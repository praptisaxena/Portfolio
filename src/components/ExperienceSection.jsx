import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Mobile App Developer Intern",
    company: "FixDukaan",
    date: "Feb 2025 – Aug 2025",
    description:
      "Built technician, admin, and customer portals using React Native. Integrated REST APIs for authentication, task updates, and real-time status tracking.",
    tags: ["React Native", "REST API", "UI/UX"],
  },
  {
    role: "Computer Vision Research Intern",
    company: "Graphic Era University",
    date: "Jul 2025",
    description:
      "Developed a YOLOv8-based anti-spoofing system for real-time liveness detection.",
    tags: ["YOLOv8", "OpenCV", "Python"],
  },
  {
    role: "Full Stack Developer",
    company: "TBI GEU",
    date: "Jul 2024 - Oct 2024",
    description:
      "Gained hands-on experience with the MERN stack by developing full-stack web applications. Implemented secure authentication, integrated third-party APIs, and built responsive UIs using React.",
    tags: ["MERN", "React", "Node.js", "MongoDB", "Express.js"],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="relative py-24 px-4">
      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Experience & <span className="text-primary">Timeline</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A journey through my professional and academic experiences so far.
        </p>

        <div className="relative">
          {/* Vertical Line in the center */}
          <div className="absolute left-1/2 top-0 w-1 h-full bg-primary/40 -translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`relative flex items-center w-full ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Icon in the center */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 bg-primary text-white rounded-full p-2 shadow-md">
                    <Briefcase size={20} />
                  </div>

                  {/* Timeline card */}
                  <div
                    className={`w-full md:w-5/12 bg-card rounded-xl shadow-md p-6 ${
                      isLeft ? "mr-auto text-right" : "ml-auto text-left"
                    }`}
                  >
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      {exp.company} • {exp.date}
                    </p>
                    <p className="mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2 justify-end md:justify-start">
                      {exp.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
