import Layout from "@/components/layout/Layout";
import AdBanner from "@/components/ads/AdBanner";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pen, Megaphone, Lightbulb, CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Pen,
      title: "Content Creation",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      features: [
        "Blog posts and articles",
        "SEO-optimized content",
        "Technical writing",
        "Creative storytelling",
      ],
    },
    {
      icon: Megaphone,
      title: "Content Marketing",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      features: [
        "Social media strategy",
        "Email campaigns",
        "Brand storytelling",
        "Analytics and reporting",
      ],
    },
    {
      icon: Lightbulb,
      title: "Consulting",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      features: [
        "Content strategy development",
        "Brand voice guidelines",
        "Editorial calendar planning",
        "Team training",
      ],
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive content solutions to help your brand tell its story and connect
            with your audience effectively.
          </p>
        </div>
      </section>

      {/* Ad Banner */}
      <div className="container-custom py-8">
        <AdBanner size="large" />
      </div>

      {/* Services Grid */}
      <section className="container-custom py-16">
        <div className="space-y-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  !isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={isEven ? "" : "lg:order-2"}>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-6">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button>Learn More</Button>
                    </CardContent>
                  </Card>
                </div>
                <div className={isEven ? "" : "lg:order-1"}>
                  <div className="aspect-video rounded-2xl overflow-hidden bg-muted">
                    <img
                      src={`https://images.unsplash.com/photo-${
                        index === 0
                          ? "1542744173-8e7e53415bb0"
                          : index === 1
                          ? "1557804506-669a67965ba0"
                          : "1553877522-43269d4ea984"
                      }?auto=format&fit=crop&w=800&q=80`}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Ad Banner */}
      <div className="container-custom py-8">
        <AdBanner size="medium" />
      </div>

      {/* Process Section */}
      <section className="bg-muted/50 py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {["Discovery", "Strategy", "Creation", "Delivery"].map((step, index) => (
              <Card key={step}>
                <CardContent className="pt-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold mb-2">{step}</h3>
                  <p className="text-sm text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-custom py-16">
        <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-0">
          <CardContent className="pt-12 pb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your content goals and grow your brand
            </p>
            <Button size="lg">Contact Us Today</Button>
          </CardContent>
        </Card>
      </section>

      {/* Bottom Ad */}
      <div className="container-custom py-8">
        <AdBanner size="large" />
      </div>
    </Layout>
  );
};

export default Services;
