import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const EducationSection = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/education")
      .then((res) => res.json())
      .then((data) => setEducation(data));
  }, []);

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/20 text-primary">
            Education
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Academic Background
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My educational journey and academic achievements.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, idx) => (
            <Card key={idx} className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{edu.degree} @ {edu.institution}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">{edu.year}</p>
                <p className="text-sm text-primary font-medium mb-2">{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection; 