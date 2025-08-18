import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { ArrowLeft, Upload, User } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";

interface MissingPersonForm {
  name: string;
  age: number;
  location: string;
  lastSeen: string;
  description: string;
  fullDescription: string;
  height: string;
  weight: string;
  hair: string;
  eyes: string;
  distinguishingMarks: string;
  clothing: string;
  circumstances: string;
  contactInfo: string;
  urgency: "high" | "medium" | "low";
}

const AddCase = () => {
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  
  const form = useForm<MissingPersonForm>({
    defaultValues: {
      urgency: "medium"
    }
  });

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data: MissingPersonForm) => {
    console.log("Form submitted:", data);
    toast.success("Missing person report submitted successfully");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button onClick={() => navigate("/")} variant="outline" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Report a Missing Person</CardTitle>
              <p className="text-muted-foreground">
                Please provide as much detail as possible to help in the search efforts.
              </p>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  {/* Photo Upload Section */}
                  <div className="space-y-4">
                    <Label className="text-base font-semibold">Photo</Label>
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-48 h-48 border-2 border-dashed border-muted-foreground/30 rounded-lg flex flex-col items-center justify-center bg-muted/20">
                        {imagePreview ? (
                          <img 
                            src={imagePreview} 
                            alt="Preview" 
                            className="w-full h-full object-cover rounded-lg"
                          />
                        ) : (
                          <>
                            <User className="w-16 h-16 text-muted-foreground/50 mb-2" />
                            <p className="text-sm text-muted-foreground text-center">
                              Upload a recent photo
                            </p>
                          </>
                        )}
                      </div>
                      <div className="relative">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <Button type="button" variant="outline">
                          <Upload className="w-4 h-4 mr-2" />
                          Choose Photo
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Basic Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      rules={{ required: "Name is required" }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="age"
                      rules={{ 
                        required: "Age is required",
                        min: { value: 0, message: "Age must be positive" }
                      }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Age *</FormLabel>
                          <FormControl>
                             <Input 
                              type="number" 
                              placeholder="Enter age" 
                              {...field}
                              onChange={(e) => field.onChange(parseInt(e.target.value))}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="location"
                      rules={{ required: "Location is required" }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Known Location *</FormLabel>
                          <FormControl>
                            <Input placeholder="City, State" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="lastSeen"
                      rules={{ required: "Last seen date is required" }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Seen *</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., 3 days ago, January 8, 2024" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="urgency"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Priority Level</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select priority level" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="high">High Priority</SelectItem>
                            <SelectItem value="medium">Medium Priority</SelectItem>
                            <SelectItem value="low">Low Priority</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Physical Description */}
                  <div className="space-y-4">
                    <Label className="text-base font-semibold">Physical Description</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="height"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Height</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., 5'6&quot;" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="weight"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Weight</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., 130 lbs" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="hair"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Hair</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., Brown, shoulder-length" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="eyes"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Eyes</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., Brown" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="distinguishingMarks"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Distinguishing Marks</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Scars, tattoos, birthmarks, etc." 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Clothing and Circumstances */}
                  <FormField
                    control={form.control}
                    name="clothing"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Known Clothing</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Describe what they were wearing when last seen" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="description"
                    rules={{ required: "Brief description is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Brief Description *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="A brief summary of the situation" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="fullDescription"
                    rules={{ required: "Detailed description is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Detailed Description *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Provide a comprehensive description of the circumstances" 
                            className="min-h-[100px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="circumstances"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Circumstances</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Additional context about the disappearance" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="contactInfo"
                    rules={{ required: "Contact information is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contact Information *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Phone number and/or investigating officer details" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex justify-end space-x-4">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => navigate("/")}
                    >
                      Cancel
                    </Button>
                    <Button type="submit" variant="default">
                      Submit Report
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AddCase;