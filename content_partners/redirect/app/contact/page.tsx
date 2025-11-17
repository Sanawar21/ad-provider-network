"use client"

import type React from "react"

import { useState } from "react"
import AdBanner from "@/components/ad-banner"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "general",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send this data to a backend
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", subject: "", category: "general", message: "" })
    }, 3000)
  }

  const contactMethods = [
    {
      title: "Email",
      icon: "✉",
      detail: "hello@nexus.dev",
      link: "mailto:hello@nexus.dev",
    },
    {
      title: "Twitter",
      icon: "𝕏",
      detail: "@NexusInsights",
      link: "https://twitter.com",
    },
    {
      title: "LinkedIn",
      icon: "in",
      detail: "NEXUS Publications",
      link: "https://linkedin.com",
    },
  ]

  return (
    <>
      {/* Page Header */}
      <section className="py-20 px-4 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 neon-glow-cyan">GET IN TOUCH</h1>
          <div className="w-16 h-1 bg-accent-purple mb-8"></div>
          <p className="text-text-secondary text-xl max-w-3xl">
            We'd love to hear from you. Whether you have a question, collaboration idea, or just want to say hello,
            reach out through any of the channels below.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {contactMethods.map((method, idx) => (
              <a
                key={idx}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel glass-panel-hover p-8 text-center border-2 border-border hover:border-accent-cyan transition-all group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{method.icon}</div>
                <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-accent-cyan transition-colors">
                  {method.title}
                </h3>
                <p className="text-text-secondary text-sm">{method.detail}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-panel p-12 border-2 border-accent-purple/20">
            <h2 className="text-3xl font-bold mb-2 neon-glow-purple">Send us a Message</h2>
            <p className="text-text-secondary mb-8">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>

            {submitted && (
              <div className="mb-8 p-6 bg-accent-cyan/10 border border-accent-cyan text-accent-cyan rounded-lg">
                <p className="font-semibold">Thank you for reaching out! We'll get back to you soon.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-text-primary font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-bg-tertiary border-2 border-border text-text-primary placeholder-text-muted focus:border-accent-cyan focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-text-primary font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-bg-tertiary border-2 border-border text-text-primary placeholder-text-muted focus:border-accent-cyan focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-text-primary font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-bg-tertiary border-2 border-border text-text-primary placeholder-text-muted focus:border-accent-cyan focus:outline-none transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              {/* Category */}
              <div>
                <label htmlFor="category" className="block text-text-primary font-semibold mb-2">
                  Inquiry Type
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-bg-tertiary border-2 border-border text-text-primary focus:border-accent-purple focus:outline-none transition-colors"
                >
                  <option value="general">General Inquiry</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="advertising">Advertising</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-text-primary font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-bg-tertiary border-2 border-border text-text-primary placeholder-text-muted focus:border-accent-cyan focus:outline-none transition-colors resize-none"
                  placeholder="Tell us what's on your mind..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-4 border-2 border-accent-orange text-accent-orange hover:shadow-[0_0_30px_rgba(255,107,53,0.5)] transition-all uppercase font-bold tracking-wide disabled:opacity-50"
                disabled={submitted}
              >
                {submitted ? "Message Sent!" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <AdBanner variant="cyan" />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-bg-secondary/50">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4 neon-glow-orange">Frequently Asked Questions</h2>
            <div className="w-16 h-1 bg-accent-cyan"></div>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How often do you publish new articles?",
                a: "We publish 3-4 new articles every week across various topics including technology, design, and innovation.",
              },
              {
                q: "Can I contribute to NEXUS?",
                a: "We welcome guest contributions from experts and enthusiasts. Reach out to us with your pitch.",
              },
              {
                q: "Do you offer advertising opportunities?",
                a: "Yes, we offer several advertising packages for brands looking to reach our tech-savvy audience. Contact us for details.",
              },
              {
                q: "What topics do you cover?",
                a: "We cover web development, AI, design trends, digital innovation, performance optimization, and much more.",
              },
            ].map((item, idx) => (
              <div key={idx} className="glass-panel p-6 border-l-4 border-accent-purple">
                <h3 className="text-lg font-bold text-text-primary mb-2">{item.q}</h3>
                <p className="text-text-secondary">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <AdBanner variant="purple" />
        </div>
      </section>

      {/* Response Time Info */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-panel p-12 text-center border-2 border-accent-orange/30">
            <h3 className="text-2xl font-bold mb-4 neon-glow-cyan">Response Time</h3>
            <p className="text-text-secondary text-lg mb-4">
              We aim to respond to all inquiries within 24-48 hours during business days.
            </p>
            <p className="text-text-muted text-sm">
              Automated responses may be sent immediately to confirm receipt of your message.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
