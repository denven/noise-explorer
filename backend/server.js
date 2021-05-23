let express = require('express');
let app = express();
const cors = require('cors');
const fs = require("fs");

// app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

// Just implemented two simple routes

app.get('/map-data', function(req, res) {

  try {
    let data = fs.readFileSync(`./mapData.json`);
    let jsonData = JSON.parse(data).markers || [];
    console.log(jsonData, data);

    res.setHeader('Content-Type', 'application/json');
    res.json({status: 0, data: jsonData});
  } catch (error) {
    console.log(error);
    res.send({status: -1});
  }
});


app.post('/add-data', function(req, res) {

  const {data: nweData} = req.body;
  console.log('new data:', nweData);

  try {
    let data = fs.readFileSync(`./mapData.json`);
    let jsonData = JSON.parse(data).markers || [];
    jsonData.push(nweData);
    const dataString = JSON.stringify({ "markers": jsonData}, null, 4);
    fs.writeFile(`./mapData.json`, dataString, (err, result) => {
      if (err) {
        console.log('Error in writing data into Json file', err);
        res.send({status: -1, msg: 'add data failed'});
      } else {
        res.send({status: 0, data: jsonData, 'msg': 'success'});
      }
    });
  } catch (error) {
    console.log(error);
    res.send({status: -1, msg: 'add data failed'});
  }
});

// Create HTTP Server
const PORT = 8080;

const server = app.listen(PORT, () => {
  let host = server.address().address;
  let port = server.address().port;
  console.log(`Express seems to be listening on port ${host} ${port} so that's pretty good 👍`);
});

