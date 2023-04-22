var express = require('express');
const axios = require('axios');
var router = express.Router();

router.get('/users', async function (req, res) {
    const since = req.query.since;
    const perPage = req.query.per_page;
    console.log('sice: ' + since + ' per_page: ' + perPage)
    try {
        const axiosResp = await axios.get('https://api.github.com/users', {
            params : {
                since,
                per_page: perPage
            }
        });
        res.status(200).send(axiosResp.data);
    } catch {
        res.status(400).send({"message": "Error fetching data"});
    }
});

router.get('/users/:username/details', async (req, res) => {
    const username = req.params.username;
    console.log('username: ' + username);
    try {
        if (username == null || username.lenght < 1) {
            res.status(400).send({"message": "Non edible user to find"});    
        } else {
            const axiosResp = await axios.get(`https://api.github.com/users/${username}`);
            res.status(200).send(axiosResp.data);
        }
    } catch {
        res.status(400).send({"message": "Error fetching data"});
    }
});

router.get('/users/:username/repos', async (req, res) => {
    const username = req.params.username;
    console.log('username: ' + username);
    try {
        if (username == null || username.lenght < 1) {
            res.status(400).send({"message": "Non edible user to find"});    
        } else {
            const axiosResp = await axios.get(`https://api.github.com/users/${username}/repos`);
            res.status(200).send(axiosResp.data);
        }
    } catch {
        res.status(400).send({"message": "Error fetching data"});
    }
});

/*
router.post('/', function (req, res) {
    const body = req.body;
    console.log('Recebi esse body: ' + JSON.stringify(body));
    res.send({"content" : "hello world"});
});
*/


module.exports = router;