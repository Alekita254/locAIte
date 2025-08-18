import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MapPin, Calendar, Eye, ArrowLeft, Phone, Mail, Share2, User } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CaseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data - in real app, this would come from API/database
  const cases = [
    {
      id: 1,
      name: "Sarah Johnson",
      age: 25,
      location: "Seattle, WA",
      lastSeen: "3 days ago",
      status: "Active",
      description: "Last seen leaving downtown coffee shop wearing blue jacket",
      urgency: "high",
      photo: null,
      fullDescription: "Sarah Johnson was last seen on January 8th, 2024, at approximately 3:30 PM leaving Bean There Coffee Shop on Pine Street in downtown Seattle. She was wearing a navy blue jacket, dark jeans, and white sneakers. Sarah is 5'6\" tall with brown hair and brown eyes. She was carrying a black leather purse and had mentioned meeting a friend, but family has been unable to confirm this meeting.",
      physicalDescription: {
        height: "5'6\"",
        weight: "130 lbs",
        hair: "Brown, shoulder-length",
        eyes: "Brown",
        distinguishingMarks: "Small scar on left cheek, tattoo of a rose on right wrist"
      },
      clothing: "Navy blue winter jacket, dark blue jeans, white sneakers, black leather purse",
      circumstances: "Sarah left work early and told colleagues she was meeting a friend downtown. Her car was found parked near the coffee shop. Her phone has been turned off since that evening.",
      contactInfo: "Detective Maria Rodriguez - (206) 555-0123"
    },
    {
      id: 2,
      name: "Michael Chen",
      age: 17,
      location: "Portland, OR",
      lastSeen: "1 week ago",
      status: "Active",
      description: "Missing after school, was wearing red backpack",
      urgency: "high",
      photo: null,
      fullDescription: "Michael Chen, a 17-year-old high school student, was last seen leaving Lincoln High School in Portland at 3:15 PM on January 4th, 2024. He did not return home and missed an important family dinner that evening.",
      physicalDescription: {
        height: "5'8\"",
        weight: "145 lbs",
        hair: "Black, short",
        eyes: "Dark brown",
        distinguishingMarks: "Wears glasses, small birthmark on neck"
      },
      clothing: "Gray hoodie, black jeans, red backpack, white basketball shoes",
      circumstances: "Michael was reportedly upset about grades and had been stressed about college applications. Friends say he seemed more withdrawn recently.",
      contactInfo: "Officer James Wilson - (503) 555-0456"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      age: 34,
      location: "San Francisco, CA",
      lastSeen: "2 weeks ago",
      status: "Active",
      description: "Last seen at hiking trail entrance",
      urgency: "medium",
      photo: null,
      fullDescription: "Emma Rodriguez was last seen at the Lands End Trail entrance in San Francisco on December 28th, 2023, at approximately 10:00 AM. She was an experienced hiker and had planned a solo day hike.",
      physicalDescription: {
        height: "5'4\"",
        weight: "125 lbs",
        hair: "Black, long",
        eyes: "Hazel",
        distinguishingMarks: "None reported"
      },
      clothing: "Green hiking jacket, khaki pants, brown hiking boots, blue backpack",
      circumstances: "Emma's car was found in the parking area. She had informed her roommate of her hiking plans but never returned. Weather conditions were clear that day.",
      contactInfo: "Park Ranger Sarah Kim - (415) 555-0789"
    },
    {
      id: 4,
      name: "David Wilson",
      age: 45,
      location: "Los Angeles, CA",
      lastSeen: "5 days ago",
      status: "Found",
      description: "Reunited with family, safe and well",
      urgency: "resolved",
      photo: null,
      fullDescription: "David Wilson has been found safe and reunited with his family. He was located at a friend's residence where he had been staying after a personal crisis.",
      physicalDescription: {
        height: "6'0\"",
        weight: "180 lbs",
        hair: "Brown, balding",
        eyes: "Blue",
        distinguishingMarks: "None"
      },
      clothing: "N/A - Case resolved",
      circumstances: "David experienced a mental health crisis and left home without informing family. He has since received appropriate care and support.",
      contactInfo: "Case closed - contact LAPD for records"
    }
  ];

  const caseData = cases.find(c => c.id === parseInt(id || ""));

  if (!caseData) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Case Not Found</h1>
            <p className="text-muted-foreground mb-8">The requested case could not be found.</p>
            <Button onClick={() => navigate("/")} variant="default">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Return to Home
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button onClick={() => navigate("/")} variant="outline" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Cases
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header Card */}
            <Card className="shadow-soft">
              <CardHeader>
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Photo Section */}
                  <div className="flex-shrink-0">
                    <div className="w-48 h-48 bg-muted/20 border-2 border-muted-foreground/20 rounded-lg flex items-center justify-center overflow-hidden">
                      {caseData.photo ? (
                        <img 
                          src={caseData.photo} 
                          alt={`Photo of ${caseData.name}`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="flex flex-col items-center text-muted-foreground/50">
                          <User className="w-16 h-16 mb-2" />
                          <p className="text-sm text-center">No photo available</p>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Info Section */}
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <CardTitle className="text-2xl text-foreground mb-2">
                          {caseData.name}
                        </CardTitle>
                        <p className="text-lg text-muted-foreground">Age {caseData.age}</p>
                      </div>
                      {getStatusBadge(caseData.status, caseData.urgency)}
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-2 text-primary" />
                        {caseData.location}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2 text-primary" />
                        Last seen {caseData.lastSeen}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Description */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Case Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">
                  {caseData.fullDescription}
                </p>
              </CardContent>
            </Card>

            {/* Physical Description */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Physical Description</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-foreground">Height:</p>
                    <p className="text-muted-foreground">{caseData.physicalDescription.height}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Weight:</p>
                    <p className="text-muted-foreground">{caseData.physicalDescription.weight}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Hair:</p>
                    <p className="text-muted-foreground">{caseData.physicalDescription.hair}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Eyes:</p>
                    <p className="text-muted-foreground">{caseData.physicalDescription.eyes}</p>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <div>
                  <p className="font-semibold text-foreground mb-2">Distinguishing Marks:</p>
                  <p className="text-muted-foreground">{caseData.physicalDescription.distinguishingMarks}</p>
                </div>
              </CardContent>
            </Card>

            {/* Clothing */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Last Known Clothing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">{caseData.clothing}</p>
              </CardContent>
            </Card>

            {/* Circumstances */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Circumstances</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">{caseData.circumstances}</p>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-sm">
                  <p className="font-semibold text-foreground mb-2">Investigating Officer:</p>
                  <p className="text-muted-foreground">{caseData.contactInfo}</p>
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <Button variant="urgent" size="sm" className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Police
                  </Button>
                  <Button variant="outline" size="sm" className="w-full">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Tip
                  </Button>
                  <Button variant="secondary" size="sm" className="w-full">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share Case
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Resources */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Emergency Resources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <p className="font-semibold text-foreground">National Missing Persons</p>
                  <p className="text-muted-foreground">+254-7123-5678</p>
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-foreground">Crisis Support</p>
                  <p className="text-muted-foreground">988 (24/7)</p>
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-foreground">Local Police</p>
                  <p className="text-muted-foreground">911</p>
                </div>
              </CardContent>
            </Card>

            {/* Have Information */}
            <Card className="shadow-soft bg-gradient-to-br from-primary/5 to-primary-glow/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">Have Information?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Even the smallest detail could help bring {caseData.name} home safely.
                </p>
                <Button variant="hero" size="sm" className="w-full">
                  Submit a Tip
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CaseDetails;