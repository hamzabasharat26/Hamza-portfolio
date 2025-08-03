import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { skillCategories as skillCategoriesData, toolsAndFrameworks as toolsAndFrameworksData } from "@/constants/skillsData";
import { Code, Cpu, Brain, Settings, Zap, Database, Network } from "lucide-react";

const iconMap = { Code, Cpu, Brain, Settings, Zap, Database, Network };

// Type definitions for clarity
interface Skill {
  name: string;
  level: number;
  description: string;
}
interface SkillCategory {
  icon: keyof typeof iconMap;
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = skillCategoriesData;
const toolsAndFrameworks: Record<string, string[]> = toolsAndFrameworksData;

const SkillsSection = () => {
  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/20 text-primary">
            Technical Expertise
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A diverse skill set developed through hands-on projects in robotics, AI, and embedded systems, 
            enhanced by AI-assisted learning and collaborative development.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => {
            const Icon = iconMap[category.icon];
            return (
              <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Icon className="h-6 w-6 mr-3 text-primary" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{skill.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>
        <Card className="bg-gradient-card border-border/50 shadow-card">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Tools & Frameworks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {Object.entries(toolsAndFrameworks).map(([category, tools]) => (
                <div key={category} className="space-y-3">
                  <h4 className="font-semibold text-primary">{category}</h4>
                  <div className="space-y-2">
                    {tools.map((tool, index) => (
                      <Badge key={index} variant="outline" className="block text-center text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="mt-8 bg-gradient-card border-border/50 shadow-card">
          <CardHeader>
            <CardTitle className="text-2xl text-center flex items-center justify-center">
              <Brain className="h-6 w-6 mr-3 text-primary" />
              AI-Enhanced Learning Approach
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Zap className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Accelerated Learning</h4>
                <p className="text-sm text-muted-foreground">
                  Using AI to quickly understand complex concepts and identify optimal learning paths
                </p>
              </div>
              <div>
                <Network className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Cross-Domain Synthesis</h4>
                <p className="text-sm text-muted-foreground">
                  Connecting knowledge across hardware, software, and AI domains for innovative solutions
                </p>
              </div>
              <div>
                <Database className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Iterative Improvement</h4>
                <p className="text-sm text-muted-foreground">
                  Continuous refinement through AI-assisted debugging and optimization strategies
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SkillsSection;