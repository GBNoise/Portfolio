import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import { google } from "googleapis";
const app = express();

const CLIENT_ID =
  "266468944986-9l3580cc3v57v8r285oucc2fpquorqk4.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN =
  "1//04tm30qzwc5rXCgYIARAAGAQSNgF-L9IryuOGywQ6vhxv4BJ9X2SRD-xMzVKX8AgVhGf87w2rcT7exxjRHL2dFwt_UNdzlFkzlQ";

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

app.use(cors());
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
        user: "lolihrndz1997@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });
    const mailData = {
      from: email,
      to: "lolihrndz1997@gmail.com",
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
