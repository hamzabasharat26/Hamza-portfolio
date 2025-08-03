import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Zap, Users } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI-Enhanced Learning",
      description: "Leveraging artificial intelligence as a collaborative partner in learning and problem-solving"
    },
    {
      icon: Code,
      title: "Multi-Domain Expertise",
      description: "From embedded systems to computer vision, spanning hardware and software development"
    },
    {
      icon: Zap,
      title: "Rapid Prototyping",
      description: "Accelerated development cycles through intelligent assistance and iterative design"
    },
    {
      icon: Users,
      title: "Human-AI Synergy",
      description: "Demonstrating how human creativity and AI capabilities amplify each other"
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/20 text-primary">
            About Me
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The Journey of Hamza Basharat
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From Computer Engineering student in Islamabad to pioneering AI-enhanced development, 
            my journey represents the future of learning where human curiosity meets artificial intelligence 
            to create groundbreaking solutions in robotics, embedded systems, and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary">From Student to AI-Enhanced Engineer</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a Computer Engineering student at [University Name] in Islamabad, Pakistan, I discovered 
              that combining traditional engineering education with AI assistance could exponentially 
              accelerate both learning and innovation. This approach has enabled me to complete complex 
              projects spanning embedded systems, computer vision, UAV design, and advanced robotics.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Each project became a laboratory for exploring how human engineering intuition could be 
              amplified by AI's analytical capabilities — from debugging complex embedded code to 
              optimizing neural networks for real-time applications. The results speak for themselves: 
              faster development cycles, more robust solutions, and deeper technical understanding.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <highlight.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="bg-gradient-card border-border/50 shadow-card">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-primary mb-4">Academic & Technical Foundation</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2">🎓 Education</h4>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Computer Engineering Student</li>
                  <li>• Islamabad, Pakistan</li>
                  <li>• Focus: Robotics & AI Systems</li>
                  <li>• IEEE Student Member</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🛠️ Hardware Expertise</h4>
                <ul className="text-muted-foreground space-y-1">
                  <li>• ESP32 & Arduino Development</li>
                  <li>• Raspberry Pi + OAK-D Integration</li>
                  <li>• UAV Design & Assembly</li>
                  <li>• Sensor Networks & IoT</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🧠 AI & Software</h4>
                <ul className="text-muted-foreground space-y-1">
                  <li>• YOLOv8 & Computer Vision</li>
                  <li>• TensorFlow Lite Deployment</li>
                  <li>• Python + React Development</li>
                  <li>• MATLAB Control Systems</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;