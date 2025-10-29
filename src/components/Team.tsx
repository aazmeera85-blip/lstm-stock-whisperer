import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Your Name",
    role: "Lead Data Scientist",
    bio: "Specialized in deep learning and financial forecasting models",
  },
  {
    name: "Team Member 2",
    role: "ML Engineer",
    bio: "Expert in time-series analysis and model optimization",
  },
  {
    name: "Team Member 3",
    role: "Data Engineer",
    bio: "Focused on data pipeline and infrastructure development",
  },
];

export const Team = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the minds behind the innovation
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card 
                key={index}
                className="border-primary/20 shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4 text-center">
                  <div className="w-24 h-24 mx-auto bg-gradient-primary rounded-full flex items-center justify-center text-3xl font-bold text-primary-foreground">
                    {member.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mt-1">{member.role}</p>
                    <p className="text-muted-foreground text-sm mt-2">{member.bio}</p>
                  </div>
                  <div className="flex justify-center gap-2 pt-2">
                    <Button variant="ghost" size="icon">
                      <Github className="w-5 h-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Linkedin className="w-5 h-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Card */}
          <Card className="border-primary/20 shadow-elegant animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <CardContent className="p-8 text-center space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Get In Touch</h3>
                <p className="text-muted-foreground">
                  Interested in collaborating or learning more about our project?
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="default" size="lg">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Us
                </Button>
                <Button variant="outline" size="lg">
                  <Github className="w-5 h-5 mr-2" />
                  View Repository
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
