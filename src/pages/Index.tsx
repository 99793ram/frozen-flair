import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturedFlavors from "@/components/FeaturedFlavors";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowRight, Star, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Index = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Thanks for subscribing!",
      description: "You'll be the first to know about new flavors and offers."
    });
    setEmail("");
  };

  return (
    <div className="min-h-screen">
      {/* SEO Meta Tags */}
      <div style={{ display: 'none' }}>
        <h1>MR Milkery - Premium Ice Cream Balls | Luxury Artisan Ice Cream</h1>
      </div>

      <Navigation />
      <HeroSection />
      <FeaturedFlavors />
      
      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              Why Choose MR Milkery
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              What Makes Us
              <span className="text-primary block md:inline md:ml-3">Different</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              We're not just making ice cream—we're crafting experiences that bring joy, 
              comfort, and luxury to every moment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-border/50">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-xl text-foreground mb-4">Premium Quality</h3>
              <p className="text-muted-foreground leading-relaxed">
                Made with the finest ingredients sourced from trusted suppliers around the world. 
                Every batch is crafted with attention to detail and passion for perfection.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-border/50">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-xl text-foreground mb-4">Artisan Crafted</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our expert team of artisans brings years of experience and innovation to create 
                unique flavors and perfect textures in every ice cream ball.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-border/50">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-xl text-foreground mb-4">Customer Love</h3>
              <p className="text-muted-foreground leading-relaxed">
                Thousands of satisfied customers who return for our exceptional service and 
                unforgettable flavors. Your satisfaction is our top priority.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              Customer Reviews
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              What Our Customers
              <span className="text-primary block md:inline md:ml-3">Are Saying</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-6 border-border/50 hover:shadow-card transition-shadow duration-300">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                "Absolutely the best ice cream I've ever had! The texture is perfect and the flavors 
                are so unique. The Caramel Swirl is my absolute favorite."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-lg">
                  👩
                </div>
                <div>
                  <div className="font-semibold text-foreground">Sarah Johnson</div>
                  <div className="text-sm text-muted-foreground">Verified Customer</div>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border/50 hover:shadow-card transition-shadow duration-300">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                "MR Milkery catered our wedding and it was a huge hit! Guests are still talking 
                about how delicious and beautifully presented everything was."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-lg">
                  👨
                </div>
                <div>
                  <div className="font-semibold text-foreground">Michael Chen</div>
                  <div className="text-sm text-muted-foreground">Event Customer</div>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border/50 hover:shadow-card transition-shadow duration-300">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                "The vegan options are incredible! As someone with dietary restrictions, I'm so 
                grateful for such delicious alternatives that don't compromise on taste."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-lg">
                  👩
                </div>
                <div>
                  <div className="font-semibold text-foreground">Emma Rodriguez</div>
                  <div className="text-sm text-muted-foreground">Regular Customer</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <Badge variant="outline" className="mb-4 px-4 py-2 border-primary-foreground/30 text-primary-foreground">
              Stay Connected
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Never Miss a New Flavor
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8 leading-relaxed">
              Be the first to know about seasonal releases, exclusive flavors, special offers, 
              and behind-the-scenes content from our ice cream artisans.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/90 border-white/20 focus:bg-white"
              />
              <Button 
                type="submit"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                Subscribe
              </Button>
            </form>
            
            <p className="text-primary-foreground/70 text-sm mt-4">
              No spam, just sweet updates. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Experience
              <span className="text-primary block md:inline md:ml-3">Luxury Ice Cream?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Visit one of our locations today or explore our full range of premium flavors online. 
              Your perfect scoop is waiting for you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold px-8 py-4 rounded-full shadow-card transition-all duration-300 hover:scale-105"
              >
                <Link to="/products" className="flex items-center gap-2">
                  View All Flavors
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-4 rounded-full transition-all duration-300"
              >
                <Link to="/contact">
                  Find a Store
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 py-12 border-t border-border/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-2xl font-bold text-primary">MR Milkery</div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Luxury crafted ice cream balls made with the finest ingredients and traditional artisan techniques.
              </p>
              <div className="flex space-x-3">
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z.017-.001z"/>
                  </svg>
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">Our Products</Link></li>
                <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Catering</a></li>
              </ul>
            </div>

            {/* Customer Care */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Customer Care</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Shipping Info</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Return Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Store Locator</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Get in Touch</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>123 Creamery Lane</div>
                <div>Downtown District</div>
                <div>(555) 123-4567</div>
                <div>hello@mrmilkery.com</div>
              </div>
            </div>
          </div>

          <div className="border-t border-border/30 mt-8 pt-8 text-center">
            <p className="text-muted-foreground text-sm">
              © 2024 MR Milkery. All rights reserved. Made with ❤️ for ice cream lovers everywhere.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;