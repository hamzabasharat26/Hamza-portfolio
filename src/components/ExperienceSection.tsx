import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/experience")
      .then((res) => res.json())
      .then((data) => setExperience(data));
  }, []);

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/20 text-primary">
            Experience
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey through various roles, companies, and impactful projects.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experience.map((exp, idx) => (
            <Card key={idx} className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{exp.role} @ {exp.company}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">{exp.duration}</p>
                <p className="text-sm text-primary font-medium mb-2">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection; 