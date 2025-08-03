import { Mail, Linkedin, Github, MapPin } from "lucide-react";

export const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "Get in touch for collaborations",
    action: "mailto:hamza.basharat@example.com",
    display: "hamza.basharat@example.com",
    primary: true
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    description: "Connect professionally",
    action: "https://linkedin.com/in/hamzabasharat",
    display: "linkedin.com/in/hamzabasharat"
  },
  {
    icon: Github,
    title: "GitHub",
    description: "Explore my repositories",
    action: "https://github.com/hamzabasharat",
    display: "github.com/hamzabasharat"
  },
  {
    icon: MapPin,
    title: "Location",
    description: "Based in Pakistan",
    action: null,
    display: "Islamabad, Pakistan"
  }
]; 