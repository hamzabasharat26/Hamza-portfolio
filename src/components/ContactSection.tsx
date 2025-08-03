import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Github,
  Linkedin,
  MessageSquare,
  Download,
  Calendar,
  MapPin,
  Phone
} from "lucide-react";
import { contactMethods } from "@/constants/contactData";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/20 text-primary">
            Let's Connect
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build the Future Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interested in robotics, AI, embedded systems, or innovative engineering projects?
            I'm always excited to discuss new ideas, collaborations, and the future of human-AI development.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <MessageSquare className="h-6 w-6 mr-3 text-primary" />
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Name</label>
                    <Input placeholder="Your name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Subject</label>
                  <Input placeholder="What would you like to discuss?" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea
                    placeholder="Share your ideas, questions, or collaboration proposals..."
                    className="min-h-[120px]"
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 shadow-glow">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col gap-2">
            {contactMethods.map((method, index) => {
              const CardContentBlock = (
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <method.icon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{method.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                      <p className="text-sm text-primary font-medium">{method.display}</p>
                    </div>
                  </div>
                </CardContent>
              );
              // Only wrap in anchor if action is a link or mailto
              const isLink = method.action && (method.action.startsWith('http') || method.action.startsWith('mailto:'));
              return isLink ? (
                <a
                  key={index}
                  href={method.action}
                  target={method.action.startsWith('http') ? '_blank' : undefined}
                  rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                  style={{ textDecoration: 'none' }}
                >
                  <Card className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300 cursor-pointer">
                    {CardContentBlock}
                  </Card>
                </a>
              ) : (
                <Card
                  key={index}
                  className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300"
                >
                  {CardContentBlock}
                </Card>
              );
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="text-xl">Collaboration Interests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Robotics Projects",
                  "AI/ML Research",
                  "Embedded Systems",
                  "UAV Development",
                  "Computer Vision",
                  "IoT Solutions",
                  "Academic Partnerships",
                  "Open Source",
                  "Tech Consulting",
                  "Startup Ideas",
                  "IEEE Collaboration",
                  "Innovation Labs"
                ].map((interest, index) => (
                  <Badge key={index} variant="outline" className="text-xs text-center py-2">
                    {interest}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="text-xl">Additional Resources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full justify-start">
                <Download className="h-4 w-4 mr-2" />
                Download CV (PDF)
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Github className="h-4 w-4 mr-2" />
                View All Projects on GitHub
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <MapPin className="h-4 w-4 mr-2" />
                Islamabad, Pakistan 🇵🇰
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Phone className="h-4 w-4 mr-2" />
                IEEE Student Member
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Ready to explore the future of robotics, AI, and embedded systems together?
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-glow">
            Start a Conversation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;