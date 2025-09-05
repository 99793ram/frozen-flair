import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-ice-cream.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-hero-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-white rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-white rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-primary-foreground/80 font-medium tracking-wider uppercase text-sm">
                Luxury crafted from nature
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-tight">
                RELAX AND TAKE A
                <br />
                <span className="text-5xl md:text-7xl">MOMENT TO ENJOY</span>
                <br />
                <span className="text-4xl md:text-6xl">YOURSELF</span>
              </h1>
            </div>
            
            <p className="text-primary-foreground/90 text-lg leading-relaxed max-w-md">
              At MR Milkery, every scoop is a celebration of craftsmanship and indulgence. Our premium ice cream balls are made with the finest ingredients, blended to perfection to create flavors that are rich, smooth, and unforgettable. Whether you're taking a break or treating someone special, MR Milkery is your moment of luxury—served cold.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                asChild
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 rounded-full shadow-elegant transition-all duration-300 hover:scale-105"
              >
                <Link to="/products" className="flex items-center gap-2">
                  Where to buy
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8 py-4 rounded-full transition-all duration-300"
              >
                Our Story
              </Button>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative flex justify-center items-center">
            <div className="relative">
              {/* Circular Background */}
              <div className="w-80 h-80 md:w-96 md:h-96 bg-white/20 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 backdrop-blur-sm"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 bg-white/30 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 backdrop-blur-sm animate-pulse"></div>
              
              {/* Ice Cream Image */}
              <div className="relative z-10 w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-elegant">
                <img 
                  src={heroImage}
                  alt="Premium ice cream balls - vanilla, chocolate, and strawberry flavors in perfect spherical shapes"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-accent/80 rounded-full flex items-center justify-center text-2xl animate-float">
                🍓
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary-light/80 rounded-full flex items-center justify-center text-xl animate-float" style={{ animationDelay: '1s' }}>
                🍒
              </div>
              <div className="absolute top-8 -left-8 w-14 h-14 bg-white/80 rounded-full flex items-center justify-center text-xl animate-float" style={{ animationDelay: '2s' }}>
                🥛
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
            className="fill-background"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;