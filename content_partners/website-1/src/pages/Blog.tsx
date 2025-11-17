import Layout from "@/components/layout/Layout";
import BlogCard from "@/components/blog/BlogCard";
import AdBanner from "@/components/ads/AdBanner";
import { blogPosts } from "@/data/blogData";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Blog = () => {
  const categories = ["All", "Technology", "Design", "Business", "Lifestyle"];

  return (
    <Layout>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore our latest articles, insights, and stories from across the web
          </p>
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input placeholder="Search articles..." className="pl-10" />
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <div className="container-custom py-8">
        <AdBanner size="large" />
      </div>

      {/* Categories */}
      <section className="container-custom py-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="container-custom py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <>
              <BlogCard key={post.id} {...post} />
              {/* Insert ad after every 3 posts */}
              {(index + 1) % 3 === 0 && (
                <div className="md:col-span-2 lg:col-span-3">
                  <AdBanner size="medium" />
                </div>
              )}
            </>
          ))}
        </div>
      </section>

      {/* Bottom Ad */}
      <div className="container-custom py-8">
        <AdBanner size="large" />
      </div>

      {/* Load More */}
      <section className="container-custom py-8 text-center">
        <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
          Load More Articles
        </button>
      </section>
    </Layout>
  );
};

export default Blog;
