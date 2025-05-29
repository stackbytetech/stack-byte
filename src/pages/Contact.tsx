
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Clock, Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    projectType: 'landing-page'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          name: formData.name,
          email: formData.email,
          project_type: formData.projectType,
          message: formData.message
        });

      if (error) {
        console.error('Error submitting form:', error);
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Message sent!",
          description: "We'll get back to you within 24 hours.",
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: '',
          projectType: 'landing-page'
        });
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Get Started Today
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Ready to launch your professional landing page? Tell us about your project 
            and we'll have a custom proposal ready within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-cyan-400/20 bg-slate-900/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Start Your Project</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you with a custom quote.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="bg-slate-800/50 border-cyan-400/20"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="bg-slate-800/50 border-cyan-400/20"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="projectType">Project Type</Label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full mt-1 px-3 py-2 border border-cyan-400/20 rounded-md bg-slate-800/50"
                      disabled={isSubmitting}
                    >
                      <option value="landing-page">Landing Page</option>
                      <option value="custom">Custom Project</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Tell us about your project *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Describe your business, goals, and any specific requirements..."
                      rows={6}
                      className="bg-slate-800/50 border-cyan-400/20"
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:from-cyan-300 hover:to-blue-400" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-cyan-400/20 bg-slate-900/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-cyan-400" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <strong>Email:</strong> stackbyte.tech@gmail.com
                  </div>
                  <div>
                    <strong>Response Time:</strong> Within 24 hours
                  </div>
                  <div>
                    <strong>Business Hours:</strong> Mon-Fri, 9 AM - 6 PM EST
                  </div>
                </CardContent>
              </Card>

              <Card className="border-cyan-400/20 bg-slate-900/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-cyan-400" />
                    What Happens Next?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 text-black rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                      1
                    </div>
                    <div>
                      <strong>We Review Your Project</strong>
                      <p className="text-sm text-muted-foreground">Our team analyzes your requirements and prepares a custom proposal.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 text-black rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                      2
                    </div>
                    <div>
                      <strong>You Approve the Plan</strong>
                      <p className="text-sm text-muted-foreground">We discuss timeline, features, and any specific requirements.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 text-black rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                      3
                    </div>
                    <div>
                      <strong>We Build Your Landing Page</strong>
                      <p className="text-sm text-muted-foreground">Our AI creates your custom landing page with fast delivery.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-cyan-400/20 bg-slate-900/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-cyan-400" />
                    Our Guarantee
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We're committed to your satisfaction. If you're not happy with your landing page, 
                    we'll work with you until you love it. 100% satisfaction guaranteed.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
