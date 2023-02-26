import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import { google } from "googleapis";
import { config } from "dotenv";
const app = express();
config();
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

app.use(
  cors({
    origin: process.env.ALLOWED_ORIGIN,
  })
);
app.use(express.json());

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.status(200).send("HELLO WORLD!");
});

async function sendMail(email, body) {
  try {
    const accessToken = await oAuth2Client.getAccessToken();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.USER_EMAIL,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });
    const mailData = {
      from: email,
      to: process.env.USER_EMAIL,
      subject: "portfolio email",
      text: body + " email: " + email,
    };

    const result = await transporter.sendMail(mailData);
    return result;
  } catch (e) {
    return e;
  }
}

app.post("/mail", (req, res) => {
  const { email, body } = req.body;

  sendMail(email, body)
    .then((result) => res.status(200).send("email sent"))
    .catch((e) => console.log(e));
});

app.listen(port, () => console.log("listening on port " + port));
