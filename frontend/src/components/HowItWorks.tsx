import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, Search, Users, Heart } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Report a Missing Person",
      description: "Provide detailed information about your missing loved one including photos, last known location, and circumstances.",
      color: "bg-urgent"
    },
    {
      icon: Search,
      title: "Search & Share",
      description: "Our platform distributes information across networks and helps coordinate search efforts with authorities.",
      color: "bg-primary"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Connect with volunteers, local organizations, and other families to expand your search network.",
      color: "bg-accent"
    },
    {
      icon: Heart,
      title: "Reunion & Recovery",
      description: "Celebrate successful reunions and access ongoing support resources for families throughout their journey.",
      color: "bg-success"
    }
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How FindHope Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our platform connects families, communities, and resources to maximize the chances of bringing missing persons home safely.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card key={index} className="relative shadow-soft hover:shadow-elevation transition-all duration-300 bg-card border-0">
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-card rounded-lg p-8 shadow-soft max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Time is Critical
            </h3>
            <p className="text-muted-foreground mb-6">
              The first 48 hours are crucial in missing person cases. Our platform ensures rapid information distribution and coordination with law enforcement agencies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">72%</div>
                <p className="text-sm text-muted-foreground">Success rate within 48 hours</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">15min</div>
                <p className="text-sm text-muted-foreground">Average alert distribution time</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-success mb-2">24/7</div>
                <p className="text-sm text-muted-foreground">Support availability</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;