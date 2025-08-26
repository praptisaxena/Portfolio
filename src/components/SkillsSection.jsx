"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const skills = [
  // Languages
  { name: "C/C++", level: 90, category: "languages" },
  { name: "Java", level: 85, category: "languages" },
  { name: "Python", level: 85, category: "languages" },
  { name: "JavaScript", level: 90, category: "languages" },

  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "React.js", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express.js", level: 80, category: "backend" },
  { name: "MongoDB", level: 90, category: "backend" },
  { name: "SQL", level: 90, category: "backend" },

  // Machine Learning
  {
    name: "Deep Learning (Neural Nets, CNNs, RNNs, Transformers)",
    level: 75,
    category: "ml",
  },
  {
    name: "Computer Vision (Image Classification, Object Detection, Processing)",
    level: 70,
    category: "ml",
  },
  {
    name: "Natural Language Processing (NLP, Sentiment Analysis, Embeddings)",
    level: 72,
    category: "ml",
  },
  {
    name: "Data Analysis & Preprocessing (NumPy, Pandas, Feature Engineering)",
    level: 80,
    category: "ml",
  },
  {
    name: "Frameworks (TensorFlow, PyTorch, Scikit-learn)",
    level: 78,
    category: "ml",
  },

  // DSA & Core Subjects
  { name: "Data Structures & Algorithms", level: 85, category: "dsa" },
  { name: "Operating Systems", level: 80, category: "dsa" },
  { name: "DBMS", level: 85, category: "dsa" },
  { name: "Computer Networks", level: 75, category: "dsa" },
  { name: "OOPs", level: 90, category: "dsa" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },

  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
];

const categories = [
  "all",
  "languages",
  "frontend",
  "backend",
  "ml",
  "dsa",
  "tools",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        {/* Category buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <motion.div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: key * 0.05 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="bg-primary h-2 rounded-full"
                />
              </div>
              <div className="text-right mt-1">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-sm text-muted-foreground"
                >
                  {skill.level}%
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
