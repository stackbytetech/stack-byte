
import { Shield, Clock, Lightbulb, Zap } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Lightning Fast Delivery",
      description: "Get your professional landing page delivered quickly with our AI-powered process. No long wait times or endless revisions."
    },
    {
      icon: Lightbulb,
      title: "AI-Powered Design",
      description: "Cutting-edge AI technology creates stunning, conversion-optimized landing pages tailored specifically to your business and industry."
    },
    {
      icon: Shield,
      title: "Custom Solutions",
      description: "Every landing page is unique and built specifically for your business needs. No templates, no cookie-cutter designs."
    },
    {
      icon: Zap,
      title: "High Converting",
      description: "Landing pages optimized for conversions with proven design patterns, compelling copy, and strategic call-to-action placement."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why Choose <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Stack Byte</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine the power of AI with proven conversion strategies to deliver exceptional landing pages 
            that help your business succeed online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl border border-cyan-400/20 bg-slate-900/30 hover:bg-slate-800/50 backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-400/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:from-cyan-400/30 group-hover:to-blue-500/30 transition-colors">
                <benefit.icon className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
