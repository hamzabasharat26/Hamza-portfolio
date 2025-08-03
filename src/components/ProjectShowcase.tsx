import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Bot, Brain } from "lucide-react";
import projectsImage from "@/assets/projects-showcase.jpg";

const ProjectShowcase = () => {
  const projects = [
    {
      title: "AI-Based Garbage Segregation Robot",
      category: "Computer Vision & Robotics",
      description: "Intelligent waste sorting robot using YOLOv8 object detection, Raspberry Pi, and OAK-D camera for real-time trash classification and automated segregation.",
      technologies: ["YOLOv8", "Raspberry Pi", "OAK-D Camera", "Python", "Computer Vision", "Robotics"],
      aiContribution: "Model architecture optimization, training data preparation, debugging detection pipeline, and performance tuning for real-time operation",
      highlights: ["Real-time object detection", "Automated sorting mechanism", "Environmental impact"],
      status: "Completed"
    },
    {
      title: "Heavy Payload Hexacopter UAV",
      category: "Drone Design & Engineering",
      description: "Custom-designed hexacopter drone optimized for heavy payload transport with advanced flight control systems and telemetry integration.",
      technologies: ["Flight Controller", "ESCs", "Brushless Motors", "Carbon Fiber Frame", "Telemetry Systems"],
      aiContribution: "Aerodynamic calculations, component selection optimization, flight parameter tuning, and troubleshooting assembly issues",
      highlights: ["Heavy payload capacity", "Stable flight control", "Custom frame design"],
      status: "Completed"
    },
    {
      title: "RC Car Control System",
      category: "Embedded Systems",
      description: "ESP32-based remote-controlled vehicle with servo motor control, wireless communication, and autonomous navigation capabilities.",
      technologies: ["ESP32", "C++", "Servo Motors", "WiFi Communication", "Motor Drivers"],
      aiContribution: "Code optimization, wireless protocol implementation, debugging motor control issues, and system architecture design",
      highlights: ["Wireless control", "Precision steering", "Real-time response"],
      status: "Completed"
    },
    {
      title: "YOLOv8 Weapon Detection System",
      category: "Computer Vision & Security",
      description: "Advanced security system using YOLOv8 for real-time weapon detection in surveillance footage with high accuracy and low false positives.",
      technologies: ["YOLOv8", "Python", "OpenCV", "TensorFlow", "Deep Learning"],
      aiContribution: "Model training strategy, dataset preprocessing, accuracy optimization, and deployment pipeline development",
      highlights: ["High detection accuracy", "Real-time processing", "Security applications"],
      status: "Completed"
    },
    {
      title: "Brain Tumor Classifier (CNN)",
      category: "Medical AI & Deep Learning",
      description: "Convolutional Neural Network for automated brain tumor detection and classification from MRI scans with medical-grade accuracy.",
      technologies: ["TensorFlow", "CNN", "Medical Imaging", "Python", "Deep Learning"],
      aiContribution: "Network architecture design, data augmentation strategies, hyperparameter tuning, and medical imaging preprocessing",
      highlights: ["Medical-grade accuracy", "MRI compatibility", "Clinical validation"],
      status: "Completed"
    },
    {
      title: "Smart Glasses Prototype",
      category: "Wearable Technology",
      description: "Intelligent wearable device with integrated sensors, display, and processing capabilities for augmented reality applications.",
      technologies: ["Embedded Systems", "Sensors", "Display Technology", "Microcontrollers"],
      aiContribution: "System integration guidance, sensor fusion algorithms, power optimization, and user interface design",
      highlights: ["Wearable integration", "Real-time processing", "AR capabilities"],
      status: "In Progress"
    },
    {
      title: "Smart Parking Dashboard",
      category: "Full-Stack Development",
      description: "Comprehensive parking management system with React frontend and Python backend, featuring real-time availability tracking and analytics.",
      technologies: ["React", "Python", "REST APIs", "Database Management", "Dashboard UI"],
      aiContribution: "Frontend-backend integration, API design, database optimization, and user experience enhancement",
      highlights: ["Real-time tracking", "Analytics dashboard", "Scalable architecture"],
      status: "Completed"
    },
    {
      title: "Operating Systems Lab Suite",
      category: "Systems Programming",
      description: "Implementation of core OS algorithms including Round Robin scheduling, Banker's algorithm for deadlock prevention, and memory management systems.",
      technologies: ["C", "Linux", "System Calls", "Process Management", "Algorithms"],
      aiContribution: "Algorithm implementation guidance, debugging race conditions, performance optimization, and theoretical concept clarification",
      highlights: ["Multiple OS algorithms", "Deadlock prevention", "Performance analysis"],
      status: "Completed"
    },
    {
      title: "MATLAB Control Systems",
      category: "Control Engineering",
      description: "DC motor control system with rack-and-pinion mechanism, featuring PID control implementation and real-time feedback analysis.",
      technologies: ["MATLAB/Simulink", "Control Theory", "PID Controllers", "Mathematical Modeling"],
      aiContribution: "Control parameter tuning, system modeling assistance, simulation optimization, and mathematical analysis",
      highlights: ["PID implementation", "Real-time feedback", "Precision control"],
      status: "Completed"
    },
    {
      title: "Embedded AI Deployment",
      category: "Edge Computing",
      description: "Optimized deployment of MobileNet and TensorFlow Lite models on embedded devices for real-time inference with resource constraints.",
      technologies: ["TensorFlow Lite", "MobileNet", "Edge Computing", "Model Optimization"],
      aiContribution: "Model quantization techniques, deployment optimization, performance profiling, and hardware-specific tuning",
      highlights: ["Edge deployment", "Real-time inference", "Resource optimization"],
      status: "Completed"
    },
    {
      title: "Image Processing Suite",
      category: "Digital Signal Processing",
      description: "Comprehensive image processing algorithms including Butterworth and Gaussian filters with real-time implementation and analysis.",
      technologies: ["MATLAB", "Image Processing", "Digital Filters", "Signal Processing"],
      aiContribution: "Filter design optimization, algorithm implementation, performance analysis, and visualization techniques",
      highlights: ["Multiple filter types", "Real-time processing", "Visual analysis"],
      status: "Completed"
    },
    {
      title: "MIPS32 Processor Simulator",
      category: "Computer Architecture",
      description: "Complete MIPS32 processor simulation with instruction set implementation, pipeline stages, and performance analysis tools.",
      technologies: ["Assembly Language", "Computer Architecture", "Simulation", "Performance Analysis"],
      aiContribution: "Instruction set implementation, pipeline optimization, debugging simulation errors, and performance metrics development",
      highlights: ["Complete ISA support", "Pipeline simulation", "Performance metrics"],
      status: "Completed"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/20 text-primary">
            Project Portfolio
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Hamza's Project Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive showcase of innovative projects spanning robotics, AI, embedded systems, 
            and computer vision — all developed through AI-enhanced engineering methodologies.
          </p>
        </div>

        <div 
          className="mb-12 rounded-lg h-64 bg-cover bg-center relative overflow-hidden"
          style={{ backgroundImage: `url(${projectsImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-2">From Concept to Reality</h3>
              <p className="text-lg text-muted-foreground">Engineering solutions that bridge the digital and physical worlds</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className="text-primary border-primary/50">
                    {project.category}
                  </Badge>
                  <Badge variant="secondary" className={
                    project.status === 'Completed' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                  }>
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{project.description}</p>
                
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Brain className="h-4 w-4 mr-2 text-primary" />
                    AI Collaboration
                  </h4>
                  <p className="text-sm text-muted-foreground">{project.aiContribution}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Key Highlights</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" variant="outline">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;