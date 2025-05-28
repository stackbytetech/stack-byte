
import { Shield, Clock, Lightbulb, DollarSign } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Lightning Fast Delivery",
      description: "Get your professional website delivered in 48-72 hours, not weeks. Our AI-powered process ensures rapid turnaround without compromising quality."
    },
    {
      icon: DollarSign,
      title: "Affordable Pricing",
      description: "Professional websites starting at $299. No hidden fees, no monthly subscriptions. Pay once and own your site forever."
    },
    {
      icon: Lightbulb,
      title: "AI-Powered Design",
      description: "Cutting-edge AI technology creates stunning, conversion-optimized designs tailored to your business and industry."
    },
    {
      icon: Shield,
      title: "Custom Solutions",
      description: "Every website is unique and built specifically for your business needs. No templates, no cookie-cutter designs."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why Choose Stack Byte?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine the power of AI with human creativity to deliver exceptional websites 
            that help small businesses thrive online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
