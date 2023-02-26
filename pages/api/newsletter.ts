import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

const API_KEY = process.env.MAILCHIMP_API_KEY!;
const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

export default async function subscribeToNewsletter(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const email = req.body;

  if (!email || !email.length) {
    res.status(400).json({ error: "Please enter an email address" });
  }
  try {
    const { url, data, headers } = getRequestParams(email);

    const response = await axios.post(url, data, { headers });
    console.log(response);
    return res.status(200).json({
      error: null,
    });
  } catch (err: any) {
    console.log();
    if (err.response.data) {
      const { detail } = err.response.data;
      res.status(400).json({
        error: detail,
      });
    } else {
      res.status(400).json({
        error: "Someting went wrong.",
      });
    }
  }
}

function getRequestParams(email: string) {
  const DATACENTER = API_KEY.split("-")[1];
  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

  const data = {
    email_address: email,
    status: "subscribed",
  };

  const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString("base64");
  /*Mailchimp uses Basic Authentication so we encrypt our API key to base64 and
   add it up to a variable along with content type */
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Basic ${base64ApiKey}`,
  };

  return { url, data, headers };
}
