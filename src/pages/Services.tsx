
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Services = () => {
  const features = [
    "Custom AI-designed layout",
    "Mobile-responsive design", 
    "SEO optimization",
    "Contact forms integration",
    "Fast delivery",
    "Performance optimization",
    "Conversion-focused design",
    "Professional copywriting",
    "Analytics setup",
    "Social media integration"
  ];

  const faq = [
    {
      question: "What makes your landing pages different?",
      answer: "Our landing pages are custom-built using advanced AI technology that analyzes your business, industry, and target audience to create high-converting designs tailored specifically for your needs."
    },
    {
      question: "How fast can I get my landing page?",
      answer: "We deliver professional landing pages quickly thanks to our AI-powered design process. Timeline depends on complexity and requirements - we'll provide an estimate before starting."
    },
    {
      question: "What if I don't like the design?",
      answer: "We work with you to ensure 100% satisfaction. Our goal is to create a landing page that perfectly represents your business and drives conversions."
    },
    {
      question: "Do you provide hosting?",
      answer: "Yes, we can handle hosting and domain setup, or we can deploy to your existing hosting provider - whatever works best for your business."
    },
    {
      question: "Is SEO included?",
      answer: "Absolutely! SEO optimization is included with every landing page, including meta tags, structured data, mobile optimization, and fast loading speeds."
    },
    {
      question: "Can you write content for my landing page?",
      answer: "Yes, we can create compelling, AI-powered content that speaks to your target audience and drives conversions, or you can provide your own content."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Landing Page Services
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            AI-powered landing page solutions designed to convert visitors into customers. 
            Professional design, fast delivery, and proven results for your business.
          </p>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Professional Landing Pages That <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Convert</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Every landing page we create is designed with one goal in mind: converting your visitors into customers. 
                Our AI analyzes your business and industry to create custom designs that drive results.
              </p>
              <Button asChild size="lg" className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:from-cyan-300 hover:to-blue-400">
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <Card className="border-cyan-400/20 bg-slate-900/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">What's Included</CardTitle>
                <CardDescription>Everything you need for a professional landing page</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-cyan-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Technology Section */}
      <section className="py-24 bg-gradient-to-b from-slate-900/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-cyan-400/10 to-blue-500/10 border border-cyan-400/20 rounded-2xl p-8 text-center backdrop-blur-sm">
              <div className="text-6xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">AI-First Approach</h3>
              <p className="text-muted-foreground">
                We leverage the latest AI models to create landing pages that are not just beautiful, 
                but scientifically optimized for performance and conversions.
              </p>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Powered by Advanced AI Technology
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our cutting-edge AI analyzes your business, industry trends, and user behavior 
                to create landing pages that not only look great but convert visitors into customers.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Intelligent Design:</strong> AI creates layouts optimized for your specific industry and target audience.
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Content Generation:</strong> AI-powered copywriting that speaks directly to your customers.
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Conversion Optimization:</strong> Built-in best practices for maximum conversion rates.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about our landing page services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faq.map((item, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-lg font-semibold text-cyan-400">{item.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 border-t border-cyan-400/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Get Your <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Landing Page</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join businesses that have launched their online presence with Stack Byte's AI-powered landing pages.
          </p>
          <Button size="lg" asChild className="text-lg px-8 py-6 h-auto bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:from-cyan-300 hover:to-blue-400">
            <Link to="/contact">Start Your Project Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
