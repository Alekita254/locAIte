import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, FileText, Users, AlertTriangle, ExternalLink } from "lucide-react";

const Resources = () => {
  const emergencyContacts = [
    {
      name: "National Emergency",
      number: "911",
      description: "Immediate emergencies and life-threatening situations",
      urgent: true
    },
    {
      name: "National Center for Missing & Exploited Children",
      number: "+254-7123-5678",
      description: "24/7 hotline for missing children cases",
      urgent: false
    },
    {
      name: "National Missing Persons Helpline", 
      number: "+254-7123-5678",
      description: "Support and guidance for missing person cases",
      urgent: false
    }
  ];

  const resources = [
    {
      title: "Missing Person Checklist",
      description: "Step-by-step guide on what to do when someone goes missing",
      icon: FileText,
      link: "#"
    },
    {
      title: "Support Groups",
      description: "Connect with other families and find emotional support",
      icon: Users,
      link: "#"
    },
    {
      title: "Legal Resources",
      description: "Understand your rights and legal options",
      icon: AlertTriangle,
      link: "#"
    }
  ];

  return (
    <section id="resources" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Emergency Resources
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get immediate help and access important resources for missing person cases.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Emergency Contacts</h3>
            <div className="space-y-4">
              {emergencyContacts.map((contact, index) => (
                <Card key={index} className={`shadow-soft ${contact.urgent ? 'border-urgent border-2' : ''}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-2">{contact.name}</h4>
                        <p className="text-sm text-muted-foreground mb-3">{contact.description}</p>
                      </div>
                      <Button 
                        variant={contact.urgent ? "urgent" : "default"} 
                        size="lg"
                        className="ml-4 flex-shrink-0"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        {contact.number}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Helpful Resources</h3>
            <div className="space-y-4">
              {resources.map((resource, index) => {
                const IconComponent = resource.icon;
                return (
                  <Card key={index} className="shadow-soft hover:shadow-elevation transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-2">{resource.title}</h4>
                          <p className="text-sm text-muted-foreground mb-3">{resource.description}</p>
                          <Button variant="outline" size="sm">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Learn More
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/5 to-primary-glow/5 rounded-lg p-8 text-center">
          <AlertTriangle className="w-12 h-12 text-accent mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Important Safety Information
          </h3>
          <div className="max-w-3xl mx-auto text-muted-foreground space-y-4">
            <p>
              <strong>If you believe someone is in immediate danger, call 911 immediately.</strong>
            </p>
            <p>
              Remember to preserve evidence, gather recent photos, and compile a list of the missing person's contacts, frequent locations, and any relevant circumstances.
            </p>
            <p>
              Do not delay reporting - there is no required waiting period to report someone missing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;