import { Trophy } from "lucide-react";


const achievements = [
  {
    title: "JPMC Code for Good ‘24 – Runner-Up",
    description:
      "Selected among the top 400 students. Built a functional MERN stack web app in 24 hours and collaborated with an NGO to develop a real-time solution.",
  },
  {
    title: "HP Power Lab – Quarter Finalist",
    description:
      "Proposed an AI-driven predictive maintenance solution for refinery operations. Advanced among 1,29,288 participants, optimizing energy efficiency.",
  },
  {
    title: "LeetCode & Codeforces Practice",
    description:
      "Solved 350+ problems on LeetCode and 100+ on Codeforces, strengthening problem-solving and algorithmic skills.",
  },
  {
    title: "C-certified NSS Volunteer",
    description:
      "Completed National Service Scheme (NSS) certification, contributing to community service, leadership, and social welfare activities.",
  },
];

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="relative py-24 px-4">
      {/* Stars Background */}
    

      <div className="container mx-auto max-w-4xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Achievements <span className="text-primary">& Awards</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Some of my notable accomplishments and recognitions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-xl shadow-md p-6 flex items-start gap-4 card-hover"
            >
              <div className="flex-shrink-0 bg-primary text-white p-3 rounded-full">
                <Trophy size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-muted-foreground text-sm mt-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
