import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import BlogCard from "@/components/blog/BlogCard";
import AdBanner from "@/components/ads/AdBanner";
import { blogPosts } from "@/data/blogData";
import { Zap, Users, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Home = () => {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <Layout>
      <HeroSection />

      {/* Ad Banner */}
      <div className="container-custom py-8">
        <AdBanner size="large" />
      </div>

      {/* Featured Posts */}
      <section className="container-custom py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Articles</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked stories that have captivated our community
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted/50 py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-2">500+</h3>
                <p className="text-muted-foreground">Articles Published</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-3xl font-bold mb-2">50K+</h3>
                <p className="text-muted-foreground">Active Readers</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-2">95%</h3>
                <p className="text-muted-foreground">Reader Satisfaction</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container-custom py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose ModernBlog</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to delivering quality content that matters
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Expert Writers</h3>
              <p className="text-muted-foreground">
                Our team of experienced writers and industry experts bring you well-researched,
                insightful content across various topics. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Fresh Perspectives</h3>
              <p className="text-muted-foreground">
                We explore topics from unique angles, providing fresh insights that challenge
                conventional thinking. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </CardContent>
          </Card>
        </div>
        <AdBanner size="medium" />
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss out on the latest articles, tips, and insights
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border bg-background"
            />
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
