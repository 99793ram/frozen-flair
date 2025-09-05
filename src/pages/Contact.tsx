import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const locations = [
    {
      name: "Flagship Store",
      address: "123 Creamery Lane, Downtown District",
      phone: "(555) 123-4567",
      hours: "Mon-Thu: 10AM-9PM, Fri-Sat: 10AM-11PM, Sun: 11AM-8PM",
      type: "Main Location"
    },
    {
      name: "Westside Branch",
      address: "456 Sweet Street, Westside Plaza",
      phone: "(555) 234-5678",
      hours: "Daily: 11AM-9PM",
      type: "Branch"
    },
    {
      name: "Eastpark Location",
      address: "789 Dessert Drive, East Park Mall",
      phone: "(555) 345-6789",
      hours: "Mon-Sat: 10AM-10PM, Sun: 12PM-8PM",
      type: "Branch"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours."
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-soft-gradient">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-hero-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary-foreground/30 text-primary-foreground">
            Get In Touch
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            We'd Love to
            <span className="block text-3xl md:text-5xl mt-2">Hear From You</span>
          </h1>
          <p className="text-primary-foreground/90 text-lg max-w-3xl mx-auto leading-relaxed">
            Have questions about our flavors? Want to place a large order? Looking for catering services? 
            Our friendly team is here to help make your ice cream dreams come true.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div>
            <div className="mb-8">
              <Badge variant="outline" className="mb-4 px-4 py-2">
                Send us a message
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Let's Start a
                <span className="text-primary block md:inline md:ml-2">Conversation</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're planning an event, have feedback about our products, or just want to say hello, 
                we're always excited to connect with fellow ice cream enthusiasts.
              </p>
            </div>

            <Card className="p-6 border-border/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    className="w-full resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary-dark text-primary-foreground font-semibold py-4 rounded-full transition-all duration-300 hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            
            {/* Quick Contact */}
            <div>
              <Badge variant="outline" className="mb-4 px-4 py-2">
                Quick Contact
              </Badge>
              <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch Directly</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Call Us</div>
                    <div className="text-muted-foreground">(555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Email Us</div>
                    <div className="text-muted-foreground">hello@mrmilkery.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Business Hours</div>
                    <div className="text-muted-foreground">Mon-Sat: 10AM-9PM, Sun: 11AM-8PM</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Store Locations */}
            <div>
              <Badge variant="outline" className="mb-4 px-4 py-2">
                Our Locations
              </Badge>
              <h3 className="text-2xl font-bold text-foreground mb-6">Visit Our Stores</h3>
              
              <div className="space-y-4">
                {locations.map((location, index) => (
                  <Card key={index} className="p-4 border-border/50 hover:shadow-card transition-shadow duration-300">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                        <MapPin className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold text-foreground">{location.name}</h4>
                          <Badge variant="secondary" className="text-xs">
                            {location.type}
                          </Badge>
                        </div>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <div>{location.address}</div>
                          <div>{location.phone}</div>
                          <div>{location.hours}</div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
              <h3 className="font-bold text-lg text-foreground mb-4">Follow Our Sweet Journey</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Stay updated with our latest flavors, behind-the-scenes content, and special offers on social media.
              </p>
              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="flex-1">
                  Instagram
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  Facebook
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  Twitter
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              Frequently Asked Questions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Common Questions
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 border-border/50">
              <h3 className="font-semibold text-foreground mb-3">Do you offer catering services?</h3>
              <p className="text-muted-foreground text-sm">
                Yes! We provide catering for events of all sizes. Contact us at least 48 hours in advance to discuss your needs.
              </p>
            </Card>
            
            <Card className="p-6 border-border/50">
              <h3 className="font-semibold text-foreground mb-3">Can I order custom flavors?</h3>
              <p className="text-muted-foreground text-sm">
                Absolutely! Our flavor development team can work with you to create custom flavors for special occasions.
              </p>
            </Card>
            
            <Card className="p-6 border-border/50">
              <h3 className="font-semibold text-foreground mb-3">Do you have vegan options?</h3>
              <p className="text-muted-foreground text-sm">
                Yes, we offer several delicious vegan flavors made with coconut and oat milk bases. Check our products page for details.
              </p>
            </Card>
            
            <Card className="p-6 border-border/50">
              <h3 className="font-semibold text-foreground mb-3">How long can I store the ice cream?</h3>
              <p className="text-muted-foreground text-sm">
                For best quality, consume within 2 weeks of purchase. Store at -5°F to -10°F for optimal texture and flavor.
              </p>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;