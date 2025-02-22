import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "be0n09rx",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-01-30",
  token: import.meta.env.VITE_REACT_APP_PROJECT_API_TOKEN,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;
