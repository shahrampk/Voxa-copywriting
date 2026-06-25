import React, { useState } from "react";
import PageHeading from "../shared/components/PageHeading";
import {
  AddCustomDocs,
  CustomDocsCard,
  ProDocsCard,
} from "../features/styleDocument/components";
import { GhostBtn } from "../shared/components/buttons/Buttons";
import { ArrowRight, ArrowUp, TrendingUp } from "lucide-react";

const StyleDocx = () => {
  let allPosts = [
    {
      id: "post_001",
      state: "Active",
      postHeading: "Technical Deep-Dive: REST vs GraphQL",
      postDescription:
        "Analytical, Data-Driven styles with deep focus on API Implementation and performance benchmarks.",
      tone: "Objective and Precise",
      platform: "LinkedIn",
      blogType: "Technical Blog",
    },
    {
      id: "post_002",
      state: "Draft",
      postHeading: "My Journey from Junior to Senior Dev",
      postDescription:
        "Personal reflections on growth, mistakes made, lessons learned, and habits that accelerated my career.",
      tone: "Personal and Reflective",
      platform: "Medium",
      blogType: "Career Story",
    },
    {
      id: "post_003",
      state: "Active",
      postHeading: "10 React Patterns You Should Know in 2025",
      postDescription:
        "Practical walkthrough of modern React patterns including compound components, render props, and custom hooks.",
      tone: "Educational and Friendly",
      platform: "Dev.to",
      blogType: "Tutorial",
    },
    {
      id: "post_004",
      state: "Draft",
      postHeading: "Why Most Startups Fail at Scaling",
      postDescription:
        "Opinion-driven analysis of common architectural mistakes startups make when traffic spikes unexpectedly.",
      tone: "Bold and Opinionated",
      platform: "LinkedIn",
      blogType: "Opinion Piece",
    },
    {
      id: "post_005",
      state: "Active",
      postHeading: "Building a Real-Time Chat App with WebSockets",
      postDescription:
        "Step-by-step guide to implementing a scalable WebSocket server with Node.js and a React frontend.",
      tone: "Instructional and Clear",
      platform: "Hashnode",
      blogType: "Tutorial",
    },
    {
      id: "post_006",
      state: "Active",
      postHeading: "The State of AI in 2025: What Developers Need to Know",
      postDescription:
        "Curated insights and trend analysis on how LLMs, agents, and AI tooling are reshaping software development.",
      tone: "Informative and Neutral",
      platform: "Medium",
      blogType: "Industry Trends",
    },
    {
      id: "post_007",
      state: "Draft",
      postHeading: "Stop Over-Engineering Your Side Projects",
      postDescription:
        "A candid take on how developers trap themselves in architecture paralysis instead of shipping fast.",
      tone: "Conversational and Humorous",
      platform: "Dev.to",
      blogType: "Opinion Piece",
    },
    {
      id: "post_008",
      state: "Active",
      postHeading: "PostgreSQL Query Optimization: A Practical Guide",
      postDescription:
        "Deep dive into EXPLAIN ANALYZE, indexing strategies, and common anti-patterns that slow down production queries.",
      tone: "Objective and Precise",
      platform: "LinkedIn",
      blogType: "Technical Blog",
    },
    {
      id: "post_009",
      state: "Draft",
      postHeading: "How I Built a SaaS in 30 Days",
      postDescription:
        "Honest breakdown of the tech stack, decisions, failures, and revenue results from a solo build sprint.",
      tone: "Personal and Motivational",
      platform: "Hashnode",
      blogType: "Case Study",
    },
    {
      id: "post_010",
      state: "Active",
      postHeading: "CSS Grid vs Flexbox: When to Use Which",
      postDescription:
        "Visual comparison and real-world use cases to help frontend developers choose the right layout tool every time.",
      tone: "Educational and Friendly",
      platform: "Dev.to",
      blogType: "Tutorial",
    },
  ];

  const [showAll, setShowAll] = useState(false);

  const visiblePosts = showAll ? allPosts : allPosts.slice(0, 3);

  return (
    <div
      id="style-document"
      className="py-4 px-6 flex flex-col gap-7 overflow-y-scroll"
    >
      <div
        id="heading-box"
        className="flex items-center justify-between w-full"
      >
        <PageHeading
          heading="My Documents"
          subHeading="Custom brand voices and personal style rules"
        />
        <div>
          {allPosts.length > 4 && !showAll && (
            <GhostBtn
              onClickFn={() => setShowAll(true)}
              value="View All"
              icon={<ArrowRight size={20} />}
            />
          )}
        </div>
      </div>

      <section
        id="custom-docs-section"
        className="flex flex-col items-center gap-5"
      >
        <div id="custom-docs-container" className="grid grid-cols-4 gap-5">
          {visiblePosts.map((post) => (
            <CustomDocsCard key={post.id} post={post} />
          ))}
          <AddCustomDocs />
        </div>
        <div>
          {showAll && (
            <GhostBtn
              onClickFn={() => setShowAll(false)}
              value="Show Less"
              icon={<ArrowUp size={20} />}
            />
          )}
        </div>
      </section>
      <section id="expert-docs-container" className="flex flex-col gap-5">
        <h1 className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary mb-1">
            Voxa Expert Documents
          </span>{" "}
          <span className="bg-warning/30 border border-warning/70 py-1 px-2 rounded-sm uppercase font-semibold text-xs">
            Pro
          </span>
        </h1>
        <div className="grid grid-cols-4 gap-5">
          <ProDocsCard
            title="Growth Marketer"
            description="A high-velocity, persuasive tone designed for conversion. Heavy use of social proof and urgency triggers."
            tags={["Persuasive", "Data-First"]}
            icon={TrendingUp}
            bannerBg="#0f3460"
            iconColor="#a78bfa"
          />
          <ProDocsCard
            title="Growth Marketer"
            description="A high-velocity, persuasive tone designed for conversion. Heavy use of social proof and urgency triggers."
            tags={["Persuasive", "Data-First"]}
            icon={TrendingUp}
            bannerBg="#0f3460"
            iconColor="#a78bfa"
          />
          <ProDocsCard
            title="Growth Marketer"
            description="A high-velocity, persuasive tone designed for conversion. Heavy use of social proof and urgency triggers."
            tags={["Persuasive", "Data-First"]}
            icon={TrendingUp}
            bannerBg="#0f3460"
            iconColor="#a78bfa"
          />
        </div>
      </section>
    </div>
  );
};

export default StyleDocx;
