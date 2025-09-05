import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Mitchell",
      role: "Founder & Master Ice Cream Artisan",
      image: "👩‍🍳",
      description: "With 15 years of culinary experience and a passion for artisan desserts, Sarah founded MR Milkery to bring premium ice cream experiences to every customer."
    },
    {
      name: "Marco Rodriguez",
      role: "Head of Flavor Development",
      image: "👨‍🔬",
      description: "Marco's innovative approach to flavor combinations has created some of our most beloved signatures. He sources ingredients from around the world."
    },
    {
      name: "Emma Thompson",
      role: "Quality Control Manager",
      image: "👩‍💼",
      description: "Emma ensures every batch meets our strict quality standards. Her attention to detail guarantees the perfect texture and taste in every scoop."
    }
  ];

  const milestones = [
    {
      year: "2019",
      title: "The Beginning",
      description: "Sarah started experimenting with ice cream recipes in her home kitchen, perfecting the art of ice cream balls."
    },
    {
      year: "2020",
      title: "First Store Opening",
      description: "Opened our flagship store in downtown, introducing the community to our unique ice cream ball concept."
    },
    {
      year: "2021",
      title: "Expansion & Recognition",
      description: "Expanded to 3 locations and won 'Best Artisan Ice Cream' from the Local Food Association."
    },
    {
      year: "2022",
      title: "Premium Line Launch",
      description: "Launched our premium collection featuring imported ingredients and exotic flavor combinations."
    },
    {
      year: "2024",
      title: "National Recognition",
      description: "Featured in National Dessert Magazine and expanded to 12 locations across the region."
    }
  ];

  return (
    <div className="min-h-screen bg-soft-gradient">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-hero-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary-foreground/30 text-primary-foreground">
            Our Story
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Crafting Moments of
            <span className="block text-3xl md:text-5xl mt-2">Pure Indulgence</span>
          </h1>
          <p className="text-primary-foreground/90 text-lg max-w-3xl mx-auto leading-relaxed">
            At MR Milkery, we believe that every scoop should be an experience worth savoring. 
            Our journey began with a simple mission: to create the world's most delightful ice cream balls 
            using only the finest ingredients and traditional artisan techniques.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Brand Story */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="px-4 py-2">
                Our Philosophy
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Luxury Crafted from 
                <span className="text-primary block md:inline md:ml-2">Nature's Best</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Every ice cream ball at MR Milkery is a testament to our commitment to excellence. 
                  We source our ingredients from trusted farmers and suppliers who share our passion 
                  for quality and sustainability.
                </p>
                <p>
                  Our signature spherical shape isn't just about aesthetics—it's engineered to provide 
                  the perfect balance of texture and temperature, ensuring that every bite delivers 
                  the ideal combination of creaminess and flavor intensity.
                </p>
                <p>
                  From Madagascar vanilla beans to Belgian chocolate, from locally sourced organic 
                  strawberries to artisanal sea salts, we believe that exceptional ingredients are 
                  the foundation of extraordinary ice cream.
                </p>
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold px-8 py-4 rounded-full">
                Visit Our Store
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12">
                <div className="text-center space-y-6">
                  <div className="text-6xl mb-4">🏭</div>
                  <h3 className="text-xl font-bold text-foreground">Artisan Craftsmanship</h3>
                  <p className="text-muted-foreground">
                    Every batch is handcrafted in small quantities to ensure freshness 
                    and maintain our high standards of quality.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">15+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">50+</div>
                      <div className="text-sm text-muted-foreground">Unique Flavors</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              Meet the Team
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              The Artisans Behind
              <span className="text-primary block md:inline md:ml-2">Every Scoop</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Our passionate team of culinary experts, flavor scientists, and quality enthusiasts 
              work together to create ice cream experiences that exceed expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border/50 overflow-hidden">
                <div className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                    {member.image}
                  </div>
                  <h3 className="font-bold text-xl text-foreground mb-2">{member.name}</h3>
                  <Badge variant="secondary" className="mb-4">
                    {member.role}
                  </Badge>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              Our Journey
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Milestones of
              <span className="text-primary block md:inline md:ml-2">Excellence</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6 md:gap-8">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {milestone.year.slice(-2)}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-16 bg-primary/30 mt-4"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="bg-card p-6 rounded-xl border border-border/50 hover:shadow-card transition-shadow duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="outline" className="text-xs">
                          {milestone.year}
                        </Badge>
                        <h3 className="font-bold text-lg text-foreground">
                          {milestone.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-primary/5 rounded-2xl p-8 md:p-12 border border-primary/20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These principles guide everything we do, from sourcing ingredients to serving customers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="text-4xl">🌱</div>
              <h3 className="font-bold text-xl text-foreground">Sustainability</h3>
              <p className="text-muted-foreground text-sm">
                We're committed to environmentally responsible practices and supporting local farmers.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="text-4xl">⭐</div>
              <h3 className="font-bold text-xl text-foreground">Quality</h3>
              <p className="text-muted-foreground text-sm">
                Every ingredient is carefully selected and every process is perfected for excellence.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="text-4xl">❤️</div>
              <h3 className="font-bold text-xl text-foreground">Passion</h3>
              <p className="text-muted-foreground text-sm">
                Our love for creating exceptional ice cream drives innovation and attention to detail.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;