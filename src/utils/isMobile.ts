import { NextApiRequest } from "next";
import Parser from "ua-parser-js";

export default function isMobile(req?: NextApiRequest) {
  const userAgent = new Parser().getResult();
  return userAgent?.device?.type === "mobile";
}
