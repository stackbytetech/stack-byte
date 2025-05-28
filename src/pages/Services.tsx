
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Landing Pages",
      price: "$299",
      description: "Convert visitors into customers with high-performing landing pages",
      features: [
        "Custom AI-designed layout",
        "Mobile-responsive design",
        "SEO optimization",
        "Contact forms integration",
        "48-hour delivery",
        "One revision included"
      ],
      popular: false
    },
    {
      title: "Business Blogs",
      price: "$499",
      description: "Establish authority and improve SEO with a professional blog",
      features: [
        "Custom blog design",
        "Content management system", 
        "SEO-optimized structure",
        "Social media integration",
        "Comment system",
        "Analytics setup"
      ],
      popular: true
    },
    {
      title: "Complete Website",
      price: "$799",
      description: "Full website solution with multiple pages and advanced features",
      features: [
        "Up to 5 custom pages",
        "Advanced AI design",
        "Blog integration",
        "Contact forms",
        "SEO optimization",
        "72-hour delivery"
      ],
      popular: false
    }
  ];

  const faq = [
    {
      question: "Do you do custom designs?",
      answer: "Yes! Every website is uniquely designed using AI based on your business requirements, industry, and preferences. No templates or cookie-cutter designs."
    },
    {
      question: "How fast can I get my site?",
      answer: "Most projects are delivered within 48-72 hours. Complex websites may take up to 5 business days. We'll provide a timeline estimate before starting."
    },
    {
      question: "What if I don't like the design?",
      answer: "We include one major revision with every package. Our goal is 100% satisfaction, and we'll work with you until you love your website."
    },
    {
      question: "Do you provide hosting?",
      answer: "Yes, we can handle hosting and domain setup for an additional fee, or we can deploy to your existing hosting provider."
    },
    {
      question: "Is SEO included?",
      answer: "Basic SEO optimization is included in all packages, including meta tags, structured data, and mobile optimization."
    },
    {
      question: "Can you add content to my site?",
      answer: "We can help generate AI-powered content for an additional fee, or you can provide your own content during the project."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Services
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            AI-powered website solutions designed to help small businesses succeed online. 
            Fast delivery, affordable pricing, and professional results.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`relative ${service.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-lg">{service.description}</CardDescription>
                  <div className="pt-4">
                    <span className="text-4xl font-bold text-primary">{service.price}</span>
                    <span className="text-muted-foreground ml-1">one-time</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <Link to="/contact">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Technology Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Powered by Advanced AI Technology
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our cutting-edge AI analyzes your business, industry trends, and user behavior 
                to create websites that not only look great but convert visitors into customers.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Intelligent Design:</strong> AI creates layouts optimized for your specific industry and target audience.
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Content Generation:</strong> AI-powered copywriting that speaks to your customers.
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>SEO Optimization:</strong> Built-in SEO best practices for better search rankings.
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-4">AI-First Approach</h3>
              <p className="text-muted-foreground">
                We leverage the latest AI models to create websites that are not just beautiful, 
                but scientifically optimized for performance and conversions.
              </p>
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
              Everything you need to know about our services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faq.map((item, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-lg font-semibold">{item.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Get Your Website?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of small businesses that have launched their online presence with Stack Byte.
          </p>
          <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6 h-auto">
            <Link to="/contact">Start Your Project Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
