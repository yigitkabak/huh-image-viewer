const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));


app.get('/get-huh', (req, res) => {
    const filePath = path.join(__dirname, 'yigit.huh'); 
    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.error('Dosya okuma hatası:', err);
            res.status(500).send('Dosya okuma hatası');
        } else {
            res.setHeader('Content-Type', 'application/octet-stream');
            res.send(data);
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
