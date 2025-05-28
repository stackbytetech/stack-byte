
import { MessageSquare, Lightbulb, Clock } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: MessageSquare,
      step: "01",
      title: "Tell Us About Your Business",
      description: "Share your business details, goals, and preferences through our simple form. The more we know, the better your landing page will be."
    },
    {
      icon: Lightbulb,
      step: "02", 
      title: "AI Creates Your Landing Page",
      description: "Our advanced AI analyzes your requirements and generates a custom landing page design optimized for your industry and target audience."
    },
    {
      icon: Clock,
      step: "03",
      title: "Launch and Convert",
      description: "Review, refine, and launch your professional landing page. We handle hosting, optimization, and provide ongoing support."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting your professional landing page is simple. Just three easy steps 
            and you're ready to convert visitors into customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center group">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-cyan-400/50 to-blue-500/20 transform translate-x-8" />
              )}
              
              <div className="relative">
                {/* Step Number */}
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-400/20">
                  <step.icon className="h-10 w-10 text-black" />
                </div>
                
                {/* Step Badge */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 text-black rounded-full flex items-center justify-center text-sm font-bold">
                  {step.step}
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
