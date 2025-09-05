import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { useState } from "react";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Flavors" },
    { id: "classic", name: "Classic" },
    { id: "premium", name: "Premium" },
    { id: "seasonal", name: "Seasonal" },
    { id: "vegan", name: "Vegan" }
  ];

  const products = [
    {
      id: 1,
      name: "Vanilla Dream",
      description: "Classic Madagascar vanilla with real vanilla bean specks, rich cream, and a hint of bourbon caramel that melts perfectly on your tongue.",
      price: "$8.99",
      originalPrice: "$10.99",
      rating: 4.9,
      reviews: 156,
      badge: "Best Seller",
      category: "classic",
      image: "🍦",
      gradient: "from-amber-100 to-orange-200",
      nutritionInfo: {
        calories: 220,
        fat: "12g",
        sugar: "18g",
        protein: "4g"
      },
      ingredients: ["Fresh cream", "Madagascar vanilla", "Organic sugar", "Free-range eggs", "Bourbon caramel"]
    },
    {
      id: 2,
      name: "Chocolate Bliss",
      description: "Rich Belgian dark chocolate (70% cocoa) with premium cocoa nibs and a velvety smooth texture that chocolate lovers dream about.",
      price: "$9.49",
      rating: 4.8,
      reviews: 203,
      badge: "Premium",
      category: "premium",
      image: "🍫",
      gradient: "from-amber-200 to-orange-300",
      nutritionInfo: {
        calories: 240,
        fat: "14g",
        sugar: "20g",
        protein: "5g"
      },
      ingredients: ["Belgian dark chocolate", "Fresh cream", "Cocoa nibs", "Organic sugar", "Vanilla extract"]
    },
    {
      id: 3,
      name: "Strawberry Fields",
      description: "Hand-picked strawberries from local organic farms, churned fresh daily with our signature cream base for natural sweetness.",
      price: "$8.79",
      rating: 4.7,
      reviews: 89,
      badge: "Seasonal",
      category: "seasonal",
      image: "🍓",
      gradient: "from-pink-100 to-red-200",
      nutritionInfo: {
        calories: 200,
        fat: "10g",
        sugar: "16g",
        protein: "3g"
      },
      ingredients: ["Fresh organic strawberries", "Heavy cream", "Natural cane sugar", "Lemon zest", "Vanilla bean"]
    },
    {
      id: 4,
      name: "Mint Chip Paradise",
      description: "Cool Oregon peppermint with handcrafted dark chocolate chips, delivering a refreshing and indulgent experience.",
      price: "$9.29",
      rating: 4.8,
      reviews: 134,
      badge: "Cool Favorite",
      category: "classic",
      image: "🌿",
      gradient: "from-green-100 to-emerald-200",
      nutritionInfo: {
        calories: 230,
        fat: "13g",
        sugar: "17g",
        protein: "4g"
      },
      ingredients: ["Fresh peppermint", "Dark chocolate chips", "Cream base", "Organic sugar", "Natural mint extract"]
    },
    {
      id: 5,
      name: "Coconut Dream Vegan",
      description: "Creamy coconut milk base with toasted coconut flakes, completely dairy-free without compromising on taste or texture.",
      price: "$10.49",
      rating: 4.6,
      reviews: 92,
      badge: "Vegan",
      category: "vegan",
      image: "🥥",
      gradient: "from-stone-100 to-neutral-200",
      nutritionInfo: {
        calories: 180,
        fat: "15g",
        sugar: "14g",
        protein: "2g"
      },
      ingredients: ["Coconut milk", "Toasted coconut", "Organic agave", "Coconut cream", "Vanilla extract"]
    },
    {
      id: 6,
      name: "Caramel Swirl Signature",
      description: "Our signature buttery caramel ribbons swirled through rich vanilla base, finished with a touch of Himalayan sea salt.",
      price: "$9.99",
      rating: 4.9,
      reviews: 191,
      badge: "Signature",
      category: "premium",
      image: "🍯",
      gradient: "from-yellow-100 to-amber-200",
      nutritionInfo: {
        calories: 250,
        fat: "15g",
        sugar: "22g",
        protein: "4g"
      },
      ingredients: ["Salted caramel", "Vanilla bean base", "Heavy cream", "Brown butter", "Sea salt"]
    }
  ];

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-soft-gradient">
      <Navigation />
      
      {/* Page Header */}
      <section className="bg-hero-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary-foreground/30 text-primary-foreground">
            Our Products
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Premium Ice Cream
            <span className="block text-3xl md:text-5xl mt-2">Collection</span>
          </h1>
          <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto leading-relaxed">
            Discover our handcrafted ice cream balls, made with the finest ingredients 
            and perfected through traditional artisan techniques.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`rounded-full px-6 py-2 transition-all duration-300 ${
                selectedCategory === category.id 
                  ? "bg-primary text-primary-foreground shadow-card" 
                  : "hover:bg-primary/10 hover:border-primary"
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50 overflow-hidden bg-card">
              <div className="p-6">
                {/* Product Image & Badge */}
                <div className="relative mb-6">
                  <div className={`w-full h-48 bg-gradient-to-br ${product.gradient} rounded-xl flex items-center justify-center text-6xl mb-4 group-hover:scale-105 transition-transform duration-300`}>
                    {product.image}
                  </div>
                  <Badge 
                    className="absolute top-3 right-3 bg-primary text-primary-foreground font-semibold shadow-sm"
                  >
                    {product.badge}
                  </Badge>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-3 left-3 h-8 w-8 p-0 bg-white/80 hover:bg-white"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>

                {/* Product Info */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <div className="text-right">
                      <span className="font-bold text-lg text-primary block">
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {product.description}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) 
                              ? 'fill-yellow-400 text-yellow-400' 
                              : 'text-gray-300'
                          }`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-foreground">
                      {product.rating}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      ({product.reviews} reviews)
                    </span>
                  </div>

                  {/* Nutrition Info */}
                  <div className="grid grid-cols-4 gap-2 pt-2 border-t border-border/30">
                    <div className="text-center">
                      <div className="text-xs text-muted-foreground">Calories</div>
                      <div className="text-sm font-semibold text-foreground">{product.nutritionInfo.calories}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-muted-foreground">Fat</div>
                      <div className="text-sm font-semibold text-foreground">{product.nutritionInfo.fat}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-muted-foreground">Sugar</div>
                      <div className="text-sm font-semibold text-foreground">{product.nutritionInfo.sugar}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-muted-foreground">Protein</div>
                      <div className="text-sm font-semibold text-foreground">{product.nutritionInfo.protein}</div>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <Button 
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full transition-all duration-300 hover:scale-105"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-20 bg-primary/5 rounded-2xl p-8 md:p-12 text-center border border-primary/20">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Stay Updated on New Flavors
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Be the first to know about seasonal releases, limited editions, and exclusive flavors.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold px-8 py-3 rounded-full">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;