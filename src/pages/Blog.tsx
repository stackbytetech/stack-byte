
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Why Small Businesses Need a Website in 2024",
      excerpt: "Discover how a professional website can transform your small business and help you reach new customers online.",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Business Growth",
      slug: "why-small-businesses-need-website-2024"
    },
    {
      id: 2,
      title: "Benefits of AI in Website Building",
      excerpt: "Learn how artificial intelligence is revolutionizing web design and making professional websites more accessible than ever.",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "Technology",
      slug: "benefits-ai-website-building"
    },
    {
      id: 3,
      title: "How to Get Started Online with Minimal Cost",
      excerpt: "A complete guide to launching your business online without breaking the bank. Tips, tools, and strategies that work.",
      date: "2024-01-05",
      readTime: "8 min read",
      category: "Getting Started",
      slug: "get-started-online-minimal-cost"
    },
    {
      id: 4,
      title: "Landing Pages That Convert: Design Principles",
      excerpt: "Understand the key elements that make landing pages effective and how to optimize them for maximum conversions.",
      date: "2024-01-01",
      readTime: "6 min read",
      category: "Design",
      slug: "landing-pages-convert-design-principles"
    },
    {
      id: 5,
      title: "SEO Basics for Small Business Websites",
      excerpt: "Simple SEO strategies that small businesses can implement to improve their search engine rankings and get found online.",
      date: "2023-12-28",
      readTime: "10 min read",
      category: "SEO",
      slug: "seo-basics-small-business"
    },
    {
      id: 6,
      title: "The Future of AI-Powered Web Design",
      excerpt: "Explore how AI is shaping the future of web design and what it means for businesses looking to establish an online presence.",
      date: "2023-12-25",
      readTime: "9 min read",
      category: "Technology",
      slug: "future-ai-powered-web-design"
    }
  ];

  const categories = ["All", "Business Growth", "Technology", "Getting Started", "Design", "SEO"];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Stack Byte Blog
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Insights, tips, and strategies to help small businesses succeed online. 
            Learn about web design, AI technology, and digital marketing.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant={category === "All" ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{post.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get the latest insights on web design, AI technology, and small business growth 
            delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md border border-border bg-background"
            />
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
