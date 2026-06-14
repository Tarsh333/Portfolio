import React from "react";
import { FaTrophy } from "react-icons/fa";

const achievements = [
  {
    title: "LeetCode Knight",
    value: "Rating 1882",
    desc: "Global Rank 33,073 among 700k+ users"
  },
  {
    title: "Codeforces Specialist",
    value: "Max Rating 1447",
    desc: "Top 12% globally"
  },
  {
    title: "CodeKaze 2023",
    value: "Rank 228 / 42,844",
    desc: "3rd among college participants"
  },
  {
    title: "Anthropic Claude Credentials",
    value: "Claude API • MCP • Claude Code",
    desc: "AI-assisted development coursework"
  }
];

const Achievements = () => {
  return (
    <div id="achievements">
      <h1 className="heading">
        Achievements <FaTrophy />
      </h1>

      <div className="achievement-grid">
        {achievements.map((item, idx) => (
          <div className="achievement-card" key={idx}>
            <h2>{item.title}</h2>
            <h3>{item.value}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;