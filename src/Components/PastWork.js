import React from "react";
import { MdWork } from "react-icons/md";

const experiences = [
  {
    company: "Livspace",
    role: "Software Engineer (Backend)",
    duration: "Oct 2025 – Present",
    points: [
      "Reduced authorization latency by 96% (285ms → 10ms) through optimized access control.",
      "Built a cloud-agnostic attachment platform supporting AWS S3 and Google Cloud Storage.",
      "Led production migration from AWS S3 to GCS with zero data loss.",
      "Designed an OpenAPI-to-tool gateway enabling LLM interaction with 20+ microservices.",
      "Built low-latency gRPC services for HRMS workflows."
    ]
  },
  {
    company: "PlaySimple Games",
    role: "Software Engineer (Backend)",
    duration: "Dec 2023 – Oct 2025",
    points: [
      "Built a centralized leaderboard platform using Go and Redis.",
      "Increased player lifetime value by 10% through scalable ranking systems.",
      "Migrated workloads to Cloudflare Workers and KV.",
      "Built a cross-platform notification platform improving retention by 2%.",
      "Reduced application startup latency by 1.5 seconds."
    ]
  }
];

const PastWork = () => {
  return (
    <div id="experience">
      <h1 className="heading">
        Experience <MdWork />
      </h1>

      {experiences.map((exp, idx) => (
        <div className="exp-card" key={idx}>
          <div className="exp-header">
            <h2>{exp.company}</h2>
            <span>{exp.duration}</span>
          </div>

          <h3>{exp.role}</h3>

          <ul>
            {exp.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PastWork;