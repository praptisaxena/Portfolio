import { ArrowRight, ExternalLink, Github } from "lucide-react";
import career from "../assets/career.png";
import expense from "../assets/expense.png";
import antiS from "../assets/antiS.png";
import gesture from "../assets/gesture.png";
import sentiment from "../assets/sentiment.png";
import Cpu from "../assets/Cpu.png";
const projects = [
  {
    id: 1,
    title: "Anti-Spoofing / Liveness Detection",
    description:
      "Built a real-time face liveness detector using YOLOv8, classifying faces as real or spoofed based on blurriness and trained data. Collected, labeled, and split custom dataset; deployed model with live webcam inference.",
    image: antiS, // <- replace with your screenshot
    tags: ["Python", "YOLOv8", "OpenCV", "cvzone"],
    demoUrl:
      "https://drive.google.com/file/d/1-3fXSKriZtq59OHtkNPXRketi6bZfuFq/view?usp=sharing",
    githubUrl:
      "https://github.com/praptisaxena/Antispoofing-Liveliness-Detector",
    date: "Jun 2025",
  },
  {
    id: 2,
    title: "Career Planning & Financial Goal Web App",
    description:
      "React-based web app helping users explore career paths, plan financial goals, and receive tailored investment advice. Integrated Gemini API for personalized strategies and Firebase for authentication, real-time database, and PDF storage.",
    image: career,
    tags: ["React.js", "Firebase", "Gemini API"],
    demoUrl: "https://ai-career-planner.vercel.app/",
    githubUrl: "https://github.com/praptisaxena/Team10",
    date: "Mar 2025",
  },
  {
    id: 3,
    title: "Expense Tracker",
    description:
      "MERN-based web app to track income and expenses with secure authentication. Users can categorize expenses and visualize spending patterns using circular charts. Provides total income, expenses, and net balance with REST APIs for CRUD operations.",
    image: expense,

    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    demoUrl:
      "https://drive.google.com/file/d/16GIEA4wiSIV5LJ3lyiCERUNbfa_bwKRD/view?usp=drive_link",
    githubUrl: "https://github.com/praptisaxena/ExpenseTracker",
    date: "Jan 2025",
  },
  {
    id: 4,
    title: "Hand Gesture Mouse Control",
    description:
      "Developed a real-time system to control the mouse using hand gestures via webcam. Enabled cursor movement and clicks using MediaPipe, OpenCV, and Autopy, with smooth interpolation and FPS tracking.",
    image: gesture,
    tags: ["Python", "OpenCV", "MediaPipe", "Autopy"],
    demoUrl:
      "https://drive.google.com/file/d/1XtTeTCNKAGB6noddRvYdoSUwrGop2NiS/view?usp=sharing",
    githubUrl: "https://github.com/praptisaxena/AI-Virtual-Mouse.git",
    date: "Jun 2025",
  },
  {
    id: 5,
    title: "CPU Process Scheduling Simulator",
    description:
      "Created an interactive simulator using Python and Streamlit to visualize and compare CPU scheduling algorithms such as FCFS, SJF, Priority, and Round Robin. It allows users to input process details and displays Gantt charts along with metrics like average waiting and turnaround times.",
    image: Cpu,
    tags: ["Python", "Streamlit"],
    demoUrl:
      "https://drive.google.com/file/d/1FmsmuCQTkW-B_wqvDjO5tvxt5N0T6hl4/view?usp=drive_link",
    githubUrl: "https://github.com/praptisaxena/ProcessScheduler",
    date: "Feb 2025",
  },
  {
    id: 6,
    title: "Sentiment Analysis App",
    description:
      "Conducted an in-depth analysis of Coursera course reviews by leveraging Natural Language Processing (NLP) techniques to classify them into positive and negative categories, achieving an impressive accuracy of 95.62%. Developed a user-friendly Streamlit application that enables interactive visualization and exploration of the sentiment analysis results",
    image: sentiment,
    tags: ["Python", "NLP", "Streamlit"],
    demoUrl:
      "https://drive.google.com/file/d/1fa9_BIZORWTeQ124IkLD8MhtQryePalH/view",
    githubUrl: "https://github.com/praptisaxena/Sentiment-Analysis-App",
    date: "Feb 2025",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`${
                    project.type === "screenshot"
                      ? "max-h-64 w-auto object-contain"
                      : "h-full w-full object-cover"
                  }`}
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/praptisaxena"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
