import moment from "moment";
import { createClient } from "next-sanity";

const client = createClient({
  projectId: "ylwllkb5",
  dataset: "production",
  apiVersion: moment(new Date()).format("YYYY-MM-DD"),
  useCdn: false,
});

export default client;
