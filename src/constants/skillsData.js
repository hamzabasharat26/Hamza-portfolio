export const skillCategories = [
  {
    icon: "Code",
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 95, description: "Primary language for AI/ML, robotics, and automation" },
      { name: "C/C++", level: 88, description: "Embedded systems, ESP32, and performance-critical applications" },
      { name: "JavaScript/React", level: 82, description: "Full-stack web development and dashboard interfaces" },
      { name: "MATLAB", level: 85, description: "Control systems, signal processing, and mathematical modeling" }
    ]
  },
  {
    icon: "Cpu",
    title: "Hardware & Embedded",
    skills: [
      { name: "ESP32/Arduino", level: 92, description: "Microcontroller programming and IoT development" },
      { name: "Raspberry Pi", level: 88, description: "Linux-based embedded systems and edge computing" },
      { name: "UAV/Drone Systems", level: 85, description: "Flight controllers, telemetry, and custom designs" },
      { name: "Sensor Integration", level: 80, description: "Various sensors, actuators, and robotics hardware" }
    ]
  },
  {
    icon: "Brain",
    title: "AI & Machine Learning",
    skills: [
      { name: "Computer Vision", level: 90, description: "YOLOv8, OpenCV, object detection, image processing" },
      { name: "Deep Learning", level: 85, description: "TensorFlow, CNNs, model training and optimization" },
      { name: "Edge AI Deployment", level: 82, description: "TensorFlow Lite, MobileNet, embedded inference" },
      { name: "AI-Assisted Development", level: 98, description: "Expert in human-AI collaborative workflows" }
    ]
  },
  {
    icon: "Settings",
    title: "Systems & Tools",
    skills: [
      { name: "Linux/Unix", level: 85, description: "System administration, embedded Linux development" },
      { name: "Git/Version Control", level: 88, description: "Collaborative development and project management" },
      { name: "Simulation Tools", level: 80, description: "MATLAB/Simulink, processor simulators" },
      { name: "CAD/Design", level: 75, description: "3D modeling for mechanical and electronic systems" }
    ]
  }
];

export const toolsAndFrameworks = {
  Programming: ["Python", "C/C++", "JavaScript/React", "MATLAB/Simulink"],
  "AI/ML": ["YOLOv8", "TensorFlow/TensorFlow Lite", "OpenCV", "MobileNet"],
  Hardware: ["ESP32", "Raspberry Pi", "OAK-D Camera", "Flight Controllers"],
  Platforms: ["Linux", "Arduino IDE", "VS Code", "ROS"],
  "AI Tools": ["ChatGPT", "GitHub Copilot", "AI-Enhanced Debugging"]
}; 