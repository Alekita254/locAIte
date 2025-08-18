import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary-glow rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold">LocAlte</h3>
            </div>
            <p className="text-background/80 mb-4">
              Connecting families and communities to bring missing loved ones home safely.
            </p>
            <div className="flex items-center space-x-2 text-accent">
              <Heart className="w-4 h-4" />
              <span className="text-sm">Made with hope and determination</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Actions</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#search" className="hover:text-primary-glow transition-smooth">
                  Search for Someone
                </a>
              </li>
              <li>
                <Link to="add-case" className="hover:text-primary-glow transition-smooth">
                  Report Missing Person
                </Link>
              </li>
              <li>
                <a href="#cases" className="hover:text-primary-glow transition-smooth">
                  Browse Cases
                </a>
              </li>
              <li>
                <a href="#volunteer" className="hover:text-primary-glow transition-smooth">
                  Volunteer
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#resources" className="hover:text-primary-glow transition-smooth">
                  Resources
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-primary-glow transition-smooth">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-glow transition-smooth">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-primary-glow transition-smooth">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Emergency Contacts</h4>
            <div className="space-y-3">
              <Button variant="urgent" size="sm" className="w-full justify-start">
                <Phone className="w-4 h-4 mr-2" />
                Emergency: 911
              </Button>
              <div className="text-background/80 text-sm">
                <div className="flex items-center mb-2">
                  <Phone className="w-4 h-4 mr-2" />
                  +254 7123-5678
                </div>
                <div className="flex items-center mb-2">
                  <Mail className="w-4 h-4 mr-2" />
                  help@LocAlte.org
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  24/7 Support Available
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm mb-4 md:mb-0">
            © 2025 LocAlte. All rights reserved. | Created to help families reunite.
          </p>
          <div className="flex space-x-6 text-sm text-background/80">
            <a href="#terms" className="hover:text-primary-glow transition-smooth">
              Terms of Service
            </a>
            <a href="#privacy" className="hover:text-primary-glow transition-smooth">
              Privacy Policy
            </a>
            <a href="#accessibility" className="hover:text-primary-glow transition-smooth">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;