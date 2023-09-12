import { createClient } from "next-sanity";

const client = createClient({
  projectId: "82qz7ay3",
  dataset: "production",
  apiVersion: "2023-09-12",
  useCdn: false
});

export default client;