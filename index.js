const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const { async } = require("validate.js");

const app = express();

const PORT = 3000;

const credentials = {
  apiKey: "f0e0a18fa772ce900c1e2a4dfed6c6c1c1a0b000680b5930ef6c6a7cef2fac3f",
  username: "eKaranja777",
};
const AfricasTalking = require("africastalking")(credentials);
const sms = AfricasTalking.SMS;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


 

app.post("/", async(req, res) => {
    console.log("hiiii")
    const { phoneNumber, text } = req.body
     if (text === "") {
    console.log(text);

    response = `CON karibu salum, mahali salama yako na ya mtoto wako italindwa
            1. Register
            2. check pregnancy status
            3. Advice from healthcare practitionar
            4. Join support group
            5. Give feedback or report a problem
            `;
  } else if (text === "1") {
  
    const credentials = {
      apiKey:
        "",
      username: "",
    };
    const AfricasTalking = require("africastalking")(credentials);
    const voice = AfricasTalking.VOICE;

    function makeCall(phoneNumber) {
      const options = {
        callFrom: "0792190741",

        callTo: [phoneNumber],
      };

      console.log("calling");
      voice.call(options).then(console.log).catch(console.log);
    }

    makeCall(phoneNumber);

    response = `CON you will receive a call shortly \n
    0. Back`;
  } else if (text === "2") {
    console.log(phoneNumber)
    function sendSms() {
      console.log("wwwww");
      const options = {
        to: phoneNumber,
        message:
          "First Trimester (Weeks 1-12): The first trimester begins from the first day of your last menstrual period and lasts until the end of week 12.  Early signs of pregnancy, such as missed periods, breast tenderness, and nausea (morning sickness), may occur."
      };
      sms
        .send(options)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    console.log("bfore")
    sendSms(phoneNumber);
    console.log("fore")

    console.log("smssssss");
    response = `CON you will receive an sms with a link to a document about it shortly \n
    0. Back`;
  } else if (text === "3") {
    function sendSms() {
      console.log("wwwww");
      const options = {
        to: phoneNumber,

        message:
          "Welcome to salum. It is important to have a well balanced diet. Consider taking food rich in calcium, Iron,proteins e.g leafy greens,dairy products and meat.",
      };
      sms
        .send(options)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    sendSms(phoneNumber);
    // Business logic for first level response
    response = `CON YOU WILL RECEIVE A LINK TO THE VOLUNTEER FORM SHORTLY \n 
    0. Back`;
  } else if (text === "4") {
    console.log("wwwww222");

       response = `CON thank you \n 
    0. Back`;
  }
  else if (text === "1*0") {
    console.log(text);

    response = `CON What would you like to do
            1. Helpline
            2. check pregnancy status
            3. Advice from healthcare practionar
            4.join support group 
            5. Give feedback or report a problem
            `;
  } else if (text === "2*0") {
    console.log(text);

    response = `CON What would you like to do
    1. Helpline
    2. check pregnancy status
    3. Advice from healthcare practionar
    4.join support group 
    5. Give feedback or report a problem
            `;
  } else if (text === "3*0") {
    console.log(text);

    response = `CON What would you like to do
    1. Helpline
    2. check pregnancy status
    3. Advice from healthcare practionar
    4.join support group 
    5. Give feedback or report a problem
           
            `;
  } else if (text === "4*0") {
    //     console.log(text);

    response = `CON What would you like to do
    1. Helpline
    2. check pregnancy status
    3. Advice from healthcare practionar
    4.join support group 
    5. Give feedback or report a problem
            `;
  
  }
  // Print the response onto the page so that our gateway can read it
  res.set("Content-Type: text/plain");

  res.send(response);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})