const express = require('express');
const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

const PORT = process.env.PORT || 8080;

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api', (req, res) => {
    fs.readFile('./apologies.json', (error, data) => {
        if (error) throw error;
        const apologies = JSON.parse(data);
        // console.log('Connected to React !');
        res.send(apologies);
    });
});

app.get('/api/list', (req, res) => {
    fs.readFile('./apologies.json', (error, data) => {
        if (error) throw error;
        const apologies = JSON.parse(data);
        
        // Send data in template for display the list
        res.render('apologies-list', { apologies });
    });
});

// ---------------------------------------------
// ADD A NEW APOLOGY
app.get('/api/new-apology', (req, res) => {
    // Use template for new apology form
    res.render('new-apology');
});

// Process POST for saving new apology
app.post('/submit', (req, res) => {
    const { http_code, tag, message } = req.body;
    const newApology = { http_code, tag, message };
    const filePath = path.join(__dirname, 'apologies.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err && err.code !== 'ENOENT') {
            return res.status(500).send('Internal Server Error');
        }
        // Check if there is already an array (and create one if not)
        const existingData = data ? JSON.parse(data) : [];

        // Add new apology data in existing array
        existingData.push(newApology);

        // Write new data in JSON file
        fs.writeFile(filePath, JSON.stringify(existingData, null, 2), (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Internal Server Error');
            }
            res.send(
                `http_code: ${http_code}, 
                Tag: ${tag}, 
                Message: ${message}`
            );
        });
    });
});
//-----------------------------------------------

app.use((req, res) => {
    res.status(404);
    res.send('404- Page not find');
});

app.listen(PORT, console.log(`Server started on port ${PORT}`));
