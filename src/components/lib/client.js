import SanityClient from "@sanity/client";

export const client = SanityClient({
  projectId: "02bwb137",
  dataset: "production",
  apiVersion: "2024-09-26",
  useCdn: true,
});
