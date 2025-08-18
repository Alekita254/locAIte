import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      description: "Essential features for reporting missing persons",
      features: [
        "Report missing person",
        "Basic search functionality",
        "Community support",
        "Standard photo upload"
      ],
      limitations: [
        "Limited to 1 active case",
        "No priority support",
        "Basic visibility"
      ],
      buttonText: "Get Started",
      variant: "outline" as const,
      popular: false
    },
    {
      name: "Family",
      price: "$19",
      description: "Enhanced features for families and individuals",
      features: [
        "Up to 5 active cases",
        "Advanced search filters",
        "Priority email support",
        "High-quality photo uploads",
        "SMS notifications",
        "Case status updates",
        "Extended visibility network"
      ],
      limitations: [],
      buttonText: "Start Family Plan",
      variant: "default" as const,
      popular: true
    },
    {
      name: "Organization",
      price: "$29",
      description: "Comprehensive solution for NGOs and law enforcement",
      features: [
        "Unlimited active cases",
        "Advanced analytics dashboard",
        "24/7 priority support",
        "Bulk case management",
        "Custom branding",
        "API access",
        "Multi-user collaboration",
        "Advanced reporting tools",
        "Integration support"
      ],
      limitations: [],
      buttonText: "Contact Sales",
      variant: "default" as const,
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Choose Your Plan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select the plan that best fits your needs. Help bring missing persons home with our comprehensive platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-elegant' : ''}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-foreground">
                  {plan.name}
                </CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  {plan.price !== "Free" && (
                    <span className="text-muted-foreground">/month</span>
                  )}
                </div>
                <CardDescription className="mt-4">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                  
                  {plan.limitations.map((limitation, limitIndex) => (
                    <div key={limitIndex} className="flex items-center space-x-3">
                      <X className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                      <span className="text-muted-foreground">{limitation}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant={plan.variant}
                  className="w-full"
                  size="lg"
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            All Plans Include
          </h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              "Secure data encryption",
              "Mobile-friendly platform",
              "Regular safety updates", 
              "Community network access"
            ].map((feature, index) => (
              <div key={index} className="flex items-center justify-center space-x-2">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-card rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold text-foreground mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-muted-foreground mb-6">
            Large organizations, government agencies, and enterprises can benefit from our custom solutions.
          </p>
          <Button variant="outline">
            Contact Our Team
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;