"use client";

import { useState } from "react";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const contactDetails = [
    { icon: Mail, text: "appyweb.raya@gmail.com", href: "mailto:appyweb.raya@gmail.com" },
    { icon: Phone, text: "+91 8688601826", href: `tel:+918688601826` },
    { icon: MapPin, text: "Hi-Tech City, Hyderabad, Telangana, India", href: "#" },
  ];

  const WHATSAPP_NUMBER = "+918688601826";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

    if (data.success && data.whatsappUrl) {
  window.open(data.whatsappUrl, "_blank");
  setStatus("Opening WhatsApp...");
  setForm({ name: "", email: "", message: "" });
}
else {
        setStatus("Failed to send message. Try again later.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Error sending message.");
    }
  };

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hello AppyWeb, I am ${form.name || "[Your Name]"} (${form.email || "[Your Email]"}): ${form.message || "[Your Message]"}`
  )}`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* PageHeader with your image */}
      <PageHeader
        title="Get In Touch"
        subtitle="We'd love to hear from you. Let's build something amazing together."
        imageSrc="/images/imagecontact.jpeg"
      />

      {/* Contact Section */}
      <section className="py-16 md:py-24 container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
          <p className="mb-8 text-muted-foreground">
            Have a project in mind or just want to say hello? Reach out using the details below or fill out the contact form.
          </p>

          <div className="space-y-6">
            {contactDetails.map((detail, i) => (
              <div key={i} className="flex items-start">
                <div className="bg-secondary p-3 rounded-md mr-4">
                  <detail.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <Link href={detail.href} className="text-lg hover:text-primary transition-colors">
                    {detail.text}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* WhatsApp Button */}
          <Link
            href={whatsappLink}
            target="_blank"
            className="inline-block mt-8 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
          >
            Chat on WhatsApp
          </Link>
        </div>

        {/* Contact Form */}
        <div className="bg-secondary p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md border border-border bg-background text-foreground"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md border border-border bg-background text-foreground"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md border border-border bg-background text-foreground"
              rows={5}
            />
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Send Message
            </button>
            {status && <p className="mt-2 text-sm">{status}</p>}
          </form>
        </div>
      </section>
    </div>
  );
}
