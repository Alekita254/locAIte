import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

const RecentCases = () => {
  const navigate = useNavigate();
  
  const cases = [
    {
      id: 1,
      name: "Sarah Johnson",
      age: 25,
      location: "Seattle, WA",
      lastSeen: "3 days ago",
      status: "Active",
      description: "Last seen leaving downtown coffee shop wearing blue jacket",
      urgency: "high"
    },
    {
      id: 2,
      name: "Michael Chen",
      age: 17,
      location: "Portland, OR",
      lastSeen: "1 week ago",
      status: "Active",
      description: "Missing after school, was wearing red backpack",
      urgency: "high"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      age: 34,
      location: "San Francisco, CA",
      lastSeen: "2 weeks ago",
      status: "Active",
      description: "Last seen at hiking trail entrance",
      urgency: "medium"
    },
    {
      id: 4,
      name: "David Wilson",
      age: 45,
      location: "Los Angeles, CA",
      lastSeen: "5 days ago",
      status: "Found",
      description: "Reunited with family, safe and well",
      urgency: "resolved"
    }
  ];

  const getStatusBadge = (status: string, urgency: string) => {
    if (status === "Found") {
      return <Badge className="bg-success text-success-foreground">Found Safe</Badge>;
    }
    if (urgency === "high") {
      return <Badge className="bg-urgent text-urgent-foreground">High Priority</Badge>;
    }
    return <Badge className="bg-accent text-accent-foreground">Active</Badge>;
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Recent Cases
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Help us bring these individuals home safely. Every piece of information matters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {cases.map((case_) => (
            <Card key={case_.id} className="shadow-soft hover:shadow-elevation transition-all duration-300 bg-gradient-card">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-1">
                      {case_.name}
                    </h3>
                    <p className="text-muted-foreground">Age {case_.age}</p>
                  </div>
                  {getStatusBadge(case_.status, case_.urgency)}
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2 text-primary" />
                    {case_.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2 text-primary" />
                    {case_.lastSeen}
                  </div>
                </div>

                <p className="text-sm text-foreground mb-4 line-clamp-2">
                  {case_.description}
                </p>

                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => navigate(`/case/${case_.id}`)}
                >
                  <Eye className="w-4 h-4 mr-2" />
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="default" size="lg">
            View All Cases
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecentCases;