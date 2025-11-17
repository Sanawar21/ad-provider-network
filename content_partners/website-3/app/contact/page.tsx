import Layout from "@/components/layout"
import AdBanner from "@/components/ad-banner"

export default function ContactPage() {
  return (
    <Layout>
      <section className="py-12 sm:py-16 bg-accent/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Get In Touch</h1>
          <p className="text-lg text-muted-foreground">We'd love to hear from you. Send us a message.</p>
        </div>
      </section>

      <AdBanner position="horizontal" />

      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { title: "Email", value: "hello@modernblog.com", icon: "✉️" },
              { title: "Phone", value: "+1 (555) 123-4567", icon: "📞" },
              { title: "Address", value: "San Francisco, CA", icon: "📍" },
            ].map((info, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl mb-3">{info.icon}</div>
                <h3 className="font-bold text-foreground mb-1">{info.title}</h3>
                <p className="text-muted-foreground">{info.value}</p>
              </div>
            ))}
          </div>

          <form className="bg-card border border-border rounded-lg p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-foreground mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground"
                placeholder="john@example.com"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground"
                placeholder="How can we help?"
              />
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-foreground mb-2">Message</label>
              <textarea
                className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground h-32 resize-none"
                placeholder="Your message here..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition"
            >
              Send Message
            </button>
          </form>

          <AdBanner position="horizontal" />
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: "How often do you publish new articles?",
                a: "We publish new articles weekly, typically on Mondays and Thursdays.",
              },
              {
                q: "Can I contribute to Modern Blog?",
                a: "Yes! We welcome guest contributions. Contact us for more information.",
              },
              {
                q: "How can I subscribe to the newsletter?",
                a: "You can subscribe through our website or directly on our About page.",
              },
              {
                q: "Do you accept advertising?",
                a: "We offer advertising opportunities. Please reach out to discuss options.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-background border border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
