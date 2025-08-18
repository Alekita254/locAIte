import { Button } from "@/components/ui/button";
import { Phone, Menu, MapPin } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-card/95">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary-glow rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary-foreground"/>
            </div>
            <h1 className="text-xl font-bold text-foreground">LocAlte</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#search" className="text-foreground hover:text-primary transition-smooth">
              Search Cases
            </a>
            <Link to="add-case" className="text-foreground hover:text-primary transition-smooth">
              Report Missing
            </Link>
            <Link to="pricing" className="text-foreground hover:text-primary transition-smooth">
              Pricing
            </Link>
            <a href="#resources" className="text-foreground hover:text-primary transition-smooth">
              Resources
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth">
              Contact
            </a>
            <Button variant="urgent" size="sm" className="ml-4">
              <Phone className="w-4 h-4 mr-2" />
              Emergency: 911
            </Button>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6 text-foreground" />
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-3">
              <a href="#search" className="text-foreground hover:text-primary transition-smooth">
                Search Cases
              </a>
              <Link to="add-case" className="text-foreground hover:text-primary transition-smooth">
                Report Missing
              </Link>
              <Link to="pricing" className="text-foreground hover:text-primary transition-smooth">
                Pricing
              </Link>
              <a href="#resources" className="text-foreground hover:text-primary transition-smooth">
                Resources
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-smooth">
                Contact
              </a>
              <Button variant="urgent" size="sm" className="self-start">
                <Phone className="w-4 h-4 mr-2" />
                Emergency: 911
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;