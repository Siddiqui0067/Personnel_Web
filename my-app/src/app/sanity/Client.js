import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'


const client = createClient({
  projectId: "82qz7ay3",
  dataset: "production",
  apiVersion: "2023-09-12",
  useCdn: false
});

const builder = imageUrlBuilder(client.image)

function urlFor(source) {
  return builder.image(source)
}
export default client;