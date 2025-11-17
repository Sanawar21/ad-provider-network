"use client"

import type React from "react"

import Header from "@/components/header"
import Footer from "@/components/footer"
import AdBanner from "@/components/ad-banner"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <>
      <Header />
      <main className="bg-background">
        {/* Hero */}
        <section className="py-20 px-6 bg-gradient-to-br from-primary/10 to-accent/10 border-b border-border">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-black mb-4">Get in Touch</h1>
            <p className="text-muted-foreground text-xl">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 mb-12">
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-card border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-card border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-card border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="What is this about?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-card border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition-all min-h-32 resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-secondary text-background font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Contact Info</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-muted-foreground">hello@pulse.com</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Address</h3>
                    <p className="text-muted-foreground">
                      123 Design Street
                      <br />
                      Tech City, TC 12345
                      <br />
                      United States
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Follow Us</h3>
                    <div className="flex gap-4">
                      {["Twitter", "Instagram", "LinkedIn"].map((social) => (
                        <a
                          key={social}
                          href="#"
                          className="text-primary hover:text-accent transition-colors font-semibold"
                        >
                          {social}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ad Banner */}
        <section className="py-8 px-6 bg-card/50">
          <div className="max-w-7xl mx-auto">
            <AdBanner />
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="py-12 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Our Location</h2>
            <div className="w-full h-96 bg-card border border-border rounded-lg flex items-center justify-center">
              <div className="text-center">
                <p className="text-muted-foreground mb-2">Map Placeholder</p>
                <p className="text-sm text-muted-foreground">Interactive map would be displayed here</p>
              </div>
            </div>
          </div>
        </section>

        {/* Ad Banner 2 */}
        <section className="py-8 px-6 bg-card/50">
          <div className="max-w-7xl mx-auto">
            <AdBanner />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
