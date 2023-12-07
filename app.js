import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import bodyParser from 'body-parser';
import https from 'https';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, 'signup.html'));
});

app.post('/', (req, res) => {
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    const url = "https://us13.api.mailchimp.com/3.0/lists/bd02175787";

    const options = {
        method: "POST",
        auth: "raedevbr:2caee2d83276f92d2f3350aa8e5cf148-us13"
     };

    const request = https.request(url, options, (response) => {
        
        if ( response.statusCode >= 200 && response.statusCode <= 299 ) {
            res.sendFile(path.join(__dirname, 'success.html'));
        } else {
            res.sendFile(path.join(__dirname, 'failure.html'));
        }
        
        response.on("data", (data) => {
            console.log(JSON.parse(data));
        });
     });

    request.write(jsonData);
    request.end(); 
});

app.post('/failure', (req, res) => {
    res.redirect('/');
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${3000}.`);
});