import type { NextApiRequest, NextApiResponse } from "next";
import sanityClient from "@sanity/client";
import moment from "moment";

const config = {
  projectId: "ylwllkb5",
  dataset: "production",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: moment(new Date()).format("YYYY-MM-DD"),
};

const client = sanityClient(config);

export default async function placeComment(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { commentId, name, email, comment } = JSON.parse(req.body);
  try {
    await client.create({
      _type: "reply",
      comment: { _type: "reference", _ref: commentId },
      replierName: name,
      replierEmail: email,
      body: comment,
    });
    return res
      .status(200)
      .send({ message: "Your reply to that comment was sent" });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Your reply could not be submitted", error });
  }
}
