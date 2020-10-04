import { config } from "dotenv";
import mailer from "@sendgrid/mail";
import template from "../templates/mail";

config();

const sendEmail = async (action, to, token) => {
  const {
    SENDGRID_API_KEY,
    EMAIL_SENDER,
    SEND_EMAIL_URL,
    NODE_ENV,
  } = process.env;
  mailer.setApiKey(SENDGRID_API_KEY);
  const verifySubject = "Welcome to Automating Processing System";
  const verifyContent =
    '<h2>Congratulations on your new APS account!</h2><p style="font-size: 1rem;">Please confirm your email address by visiting the following link:</p>';
  const verifyLink = `${SEND_EMAIL_URL}/verify-email/${token}`;

  if (action === "verify-email") {
    const message = {
      to,
      from: EMAIL_SENDER,
      subject: verifySubject,
      html: template(verifyContent, verifyLink),
    };
    return NODE_ENV === "test" ? true : mailer.send(message);
  }
};

export default sendEmail;
