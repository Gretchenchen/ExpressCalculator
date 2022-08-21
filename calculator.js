const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(resquest, response){
    response.sendFile(__dirname + "/index.html");
});

app.post("/", function(resquest, response){
    var num1 = Number(resquest.body.num1);
    var num2 = Number(resquest.body.num2);
    var result = num1 + num2;

    response.send("The result of the calculation is " + result);
});


// calculate bmi
app.get("/bmicalculator", (req, res) => {
        res.sendFile(__dirname + "/bmiCalculator.html");
    });

app.post("/bmicalculator", function(req, res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmi = weight / (height * height);

    res.send("Your BMI is " + bmi);
});

app.listen(5000, function(){
    console.log("server is running on port 5000");
});
