import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    school: "Graphic Era (Deemed to be) University, Dehradun",
    date: "Sep 2022 – Present",
    grade: "CGPA: 9.11/10",
  },
  {
    degree: "Senior Secondary (Class XII)",
    school: "St. Mary’s Sr. Sec. School",
    date: "2021(CBSE)",
    grade: "Percentage: 96%",
  },
  {
    degree: "Secondary (Class X)",
    school: "St. Mary’s Sr. Sec. School",
    date: "2019(CBSE)",
    grade: "Percentage: 93%",
  },
];

export const EducationSection = () => {
  return (
    <section id="education" className="relative py-24 px-4">
      {/* Stars Background */}

      <div className="container mx-auto max-w-4xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Education <span className="text-primary">Background</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          My academic journey and milestones so far.
        </p>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-card rounded-xl shadow-md p-6 flex items-start gap-4"
            >
              <div className="flex-shrink-0 bg-primary text-white p-3 rounded-full">
                <GraduationCap size={20} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-muted-foreground text-sm">
                  {edu.school} • {edu.date}
                </p>
                <p className="font-medium text-primary mt-1">{edu.grade} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
