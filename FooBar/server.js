//dependencies
const express = require('express');
const path = require('path');

//setup server
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static(path.join(__dirname + '/client/build')));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

//start server
app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
})

