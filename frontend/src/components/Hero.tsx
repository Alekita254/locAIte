import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, UserPlus, Clock } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-glow/80"></div>
      </div>
      
      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Every Person Matters.<br />
            <span className="text-accent">Help Bring Them Home.</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
            Connect families, share information, and unite communities in the search for missing loved ones.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              <Search className="w-5 h-5 mr-2" />
              Search for Someone Using AI
            </Button>
            <Link to="/add-case">
              <Button variant="urgent" size="lg" className="text-lg px-8 py-4">
                <UserPlus className="w-5 h-5 mr-2" />
                Report Missing Person
              </Button>
            </Link>
          </div>

          <div className="bg-card/95 backdrop-blur-sm rounded-lg p-6 shadow-elevation max-w-2xl mx-auto">
            <h3 className="text-foreground text-lg font-semibold mb-4">Quick Search</h3>
            <div className="flex gap-3">
              <Input 
                placeholder="Enter name, location, or case number..." 
                className="flex-1 bg-background text-foreground"
              />
              <Button variant="default" size="lg">
                <Search className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-center">
            <div className="bg-card/90 backdrop-blur-sm rounded-lg p-6 shadow-soft">
              <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center mx-auto mb-3">
                <Search className="w-6 h-6 text-success-foreground" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">1,247 Cases</h4>
              <p className="text-muted-foreground text-sm">Active searches</p>
            </div>
            
            <div className="bg-card/90 backdrop-blur-sm rounded-lg p-6 shadow-soft">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-3">
                <UserPlus className="w-6 h-6 text-accent-foreground" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">892 Reunions</h4>
              <p className="text-muted-foreground text-sm">Successful findings</p>
            </div>
            
            <div className="bg-card/90 backdrop-blur-sm rounded-lg p-6 shadow-soft">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-primary-foreground" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">24/7 Support</h4>
              <p className="text-muted-foreground text-sm">Always here to help</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;