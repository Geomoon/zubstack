"use client";

import axios from "axios";

console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);
export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 3000,
});
