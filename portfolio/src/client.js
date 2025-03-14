import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "be0n09rx",
  dataset: "production",
  useCdn: false,
  apiVersion: "2025-03-13",
  token: import.meta.env.VITE_SANITY_TOKEN,
  perspective: "previewDrafts",
  ignoreBrowserTokenWarning: true,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;
