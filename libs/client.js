// libs/client.js
import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "aberi-test01",
  apiKey: process.env.API_KEY,
});
