import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "be0n09rx",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-01-30",
});

export default client;
