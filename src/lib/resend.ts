import { Resend } from "resend";

export const resent = new Resend(process.env.RESEND_API_KEY);