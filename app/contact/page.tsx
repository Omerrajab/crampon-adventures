import type { Metadata } from "next";
import ContactPageContent from "./contact-page-content";

export const metadata: Metadata = {
  title: "Contact Us | Crampon Adventures",
  description: "Get in touch with us. We'd love to hear from you.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
