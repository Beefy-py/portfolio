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

export default async function comment(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { postId, postSlug, name, email, comment } = JSON.parse(req.body);
  try {
    await client.create({
      _type: "comment",
      post: { _type: "reference", _ref: postId },
      commenterName: name,
      commenterEmail: email,
      body: comment,
    });
    console.log(req.query);

    // revalidation
    if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
      return res.status(401).json({ message: "Invalid token" });
    }

    try {
      await res.revalidate(`/blog/${postSlug}`);
      return res
        .status(200)
        .send({
          message: "You successfully placed a comment",
          revalidated: true,
        });
    } catch (err) {
      return res.status(500).send("Error revalidating");
    }
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Your comment could not be submitted", error });
  }
}
