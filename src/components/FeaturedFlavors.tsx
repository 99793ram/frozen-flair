import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FeaturedFlavors = () => {
  useScrollAnimation();
  
  const flavors = [
    {
      id: 1,
      name: "Vanilla Dream",
      description: "Classic Madagascar vanilla with real vanilla bean specks and a hint of caramel",
      price: "$8.99",
      rating: 4.9,
      reviews: 156,
      badge: "Best Seller",
      image: "🍦",
      gradient: "from-amber-100 to-orange-200"
    },
    {
      id: 2,
      name: "Chocolate Bliss",
      description: "Rich Belgian dark chocolate with chunks of premium cocoa nibs",
      price: "$9.49",
      rating: 4.8,
      reviews: 203,
      badge: "Premium",
      image: "🍫",
      gradient: "from-amber-200 to-orange-300"
    },
    {
      id: 3,
      name: "Strawberry Fields",
      description: "Fresh strawberries from local farms swirled with cream",
      price: "$8.79",
      rating: 4.7,
      reviews: 89,
      badge: "Seasonal",
      image: "🍓",
      gradient: "from-pink-100 to-red-200"
    },
    {
      id: 4,
      name: "Mint Chip Paradise",
      description: "Cool peppermint with dark chocolate chips and a refreshing finish",
      price: "$9.29",
      rating: 4.8,
      reviews: 134,
      badge: "Cool Favorite",
      image: "🌿",
      gradient: "from-green-100 to-emerald-200"
    },
    {
      id: 5,
      name: "Cookies & Cream",
      description: "Crushed chocolate cookies folded into vanilla ice cream",
      price: "$9.19",
      rating: 4.9,
      reviews: 278,
      badge: "Popular",
      image: "🍪",
      gradient: "from-gray-100 to-slate-200"
    },
    {
      id: 6,
      name: "Caramel Swirl",
      description: "Buttery caramel ribbons through rich vanilla base with sea salt finish",
      price: "$9.99",
      rating: 4.9,
      reviews: 191,
      badge: "Signature",
      image: "🍯",
      gradient: "from-yellow-100 to-amber-200"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-fade-in">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Featured Flavors
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Discover Our
            <span className="text-primary block md:inline md:ml-3">Signature Collection</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Each flavor is carefully crafted with premium ingredients and perfected through 
            traditional techniques to deliver an exceptional taste experience.
          </p>
        </div>

        {/* Flavors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {flavors.map((flavor, index) => (
            <Card key={flavor.id} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-border/50 overflow-hidden scroll-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="p-6">
                {/* Flavor Image & Badge */}
                <div className="relative mb-6">
                  <div className={`w-full h-48 bg-gradient-to-br ${flavor.gradient} rounded-xl flex items-center justify-center text-6xl mb-4 group-hover:scale-105 transition-transform duration-300`}>
                    {flavor.image}
                  </div>
                  <Badge 
                    className="absolute top-3 right-3 bg-primary text-primary-foreground font-semibold"
                  >
                    {flavor.badge}
                  </Badge>
                </div>

                {/* Flavor Info */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                      {flavor.name}
                    </h3>
                    <span className="font-bold text-lg text-primary">
                      {flavor.price}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {flavor.description}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${
                            i < Math.floor(flavor.rating) 
                              ? 'fill-yellow-400 text-yellow-400' 
                              : 'text-gray-300'
                          }`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-foreground">
                      {flavor.rating}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      ({flavor.reviews} reviews)
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold px-8 py-4 rounded-full shadow-card transition-all duration-300 hover:scale-105"
          >
            View All Flavors
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedFlavors;