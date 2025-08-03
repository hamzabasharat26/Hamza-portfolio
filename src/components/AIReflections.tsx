import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Lightbulb, 
  Target, 
  Rocket, 
  Users, 
  MessageSquare,
  Clock,
  TrendingUp
} from "lucide-react";

const AIReflections = () => {
  const collaborationInsights = [
    {
      icon: Lightbulb,
      title: "Enhanced Problem-Solving",
      description: "AI serves as a thinking partner, helping break down complex problems into manageable components and suggesting multiple solution approaches.",
      impact: "50% faster problem resolution"
    },
    {
      icon: Clock,
      title: "Accelerated Learning Curve",
      description: "Real-time explanations and guidance allow for rapid skill acquisition and immediate application of new concepts.",
      impact: "3x faster concept mastery"
    },
    {
      icon: Target,
      title: "Precision in Implementation",
      description: "AI assistance in debugging, optimization, and best practices ensures higher quality code and more robust solutions.",
      impact: "70% reduction in bugs"
    },
    {
      icon: TrendingUp,
      title: "Continuous Improvement",
      description: "Iterative feedback and suggestions enable constant refinement of techniques and approaches.",
      impact: "Ongoing skill evolution"
    }
  ];

  const workflowSteps = [
    {
      step: "1",
      title: "Conceptualization",
      description: "Initial project ideas and requirements discussion with AI for feasibility analysis"
    },
    {
      step: "2",
      title: "Planning & Architecture",
      description: "System design and architecture planning with AI recommendations for optimal approaches"
    },
    {
      step: "3",
      title: "Implementation",
      description: "Collaborative coding with real-time assistance, debugging, and optimization suggestions"
    },
    {
      step: "4",
      title: "Testing & Refinement",
      description: "AI-assisted testing strategies and performance optimization for robust solutions"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/20 text-primary">
            Collaboration Insights
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Hamza's AI-Enhanced Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            How ChatGPT transformed my engineering education and project development, enabling rapid 
            innovation across robotics, embedded systems, computer vision, and beyond.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Brain className="h-6 w-6 mr-3 text-primary" />
                The Learning Revolution
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                As a Computer Engineering student in Pakistan, discovering ChatGPT fundamentally changed 
                my approach to learning and building projects. From debugging YOLOv8 models to optimizing 
                ESP32 code, AI became my intelligent pair programming partner.
              </p>
              <p className="text-muted-foreground">
                This collaboration enabled me to tackle ambitious projects like building hexacopter UAVs, 
                implementing computer vision systems, and developing complex robotics solutions — projects 
                that would have taken months now completed in weeks.
              </p>
              <div className="border-l-4 border-primary pl-4 mt-4">
                <p className="italic text-foreground">
                  "Working with AI isn't about replacing human creativity—it's about amplifying it. 
                  Every project becomes an opportunity to push the boundaries of what's possible when 
                  Pakistani engineering talent meets global AI intelligence."
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {collaborationInsights.map((insight, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <insight.icon className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2">{insight.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{insight.description}</p>
                      <Badge variant="outline" className="text-xs text-primary border-primary/50">
                        {insight.impact}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="bg-gradient-card border-border/50 shadow-card mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              Collaborative Workflow Process
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              {workflowSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mx-auto mb-4">
                    {step.step}
                  </div>
                  <h4 className="font-semibold mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <MessageSquare className="h-5 w-5 mr-3 text-primary" />
                Key Learnings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm">AI excels at rapid prototyping and debugging complex embedded systems</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm">Human engineering intuition guides project direction and creative solutions</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm">Combined approach enables tackling ambitious robotics and AI projects</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm">Accelerated learning enables keeping pace with rapid tech evolution</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Rocket className="h-5 w-5 mr-3 text-primary" />
                Future Vision
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Looking ahead, I envision expanding this collaborative model to drive innovation across Pakistan's tech landscape:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Users className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">Building Pakistan's first AI-enhanced robotics lab</span>
                </li>
                <li className="flex items-center">
                  <Brain className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">Contributing to global open-source robotics projects</span>
                </li>
                <li className="flex items-center">
                  <Target className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">Developing edge AI solutions for emerging markets</span>
                </li>
                <li className="flex items-center">
                  <Lightbulb className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">Mentoring next-gen Pakistani engineers in AI collaboration</span>
                </li>
              </ul>
              <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
                Join the Journey
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AIReflections;