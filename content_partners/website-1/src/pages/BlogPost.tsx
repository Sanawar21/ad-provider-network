import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import AdBanner from "@/components/ads/AdBanner";
import { blogPosts } from "@/data/blogData";
import { Calendar, Clock, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <Layout>
        <div className="container-custom py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground">The article you're looking for doesn't exist.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <article className="pb-16">
        <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>

        <div className="container-custom -mt-32 relative z-10">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="pt-8">
              <div className="flex items-center gap-4 mb-6">
                <Badge>{post.category}</Badge>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>

              {/* Share Buttons */}
              <div className="flex items-center gap-2 mb-8 pb-8 border-b">
                <span className="text-sm font-medium mr-2">Share:</span>
                <Button size="sm" variant="outline">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>

              {/* Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-muted-foreground mb-8">{post.excerpt}</p>
                
                <div dangerouslySetInnerHTML={{ __html: post.content }} />

                <AdBanner size="medium" className="my-8" />

                <h2>Additional Context</h2>
                <p>
                  Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                  laudantium.
                </p>

                <p>
                  Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                  aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                  voluptatem sequi nesciunt.
                </p>

                <AdBanner size="large" className="my-8" />

                <h2>Conclusion</h2>
                <p>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                  adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
                  magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                  exercitationem ullam corporis suscipit laboriosam.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Ad */}
        <div className="container-custom mt-8">
          <AdBanner size="large" />
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
