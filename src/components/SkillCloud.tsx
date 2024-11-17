import { useEffect } from "react";
import "./SkillCloud.css";
import { initSkillCloudAnimation } from "./SkillCloudAnimation.ts";

export const SkillCloud = () => {
  useEffect(() => {
    initSkillCloudAnimation();
  }, []);

  return (
    <section id="skill_cloud" className="section_skill_cloud">
      <div className="skill_cloud_title">
        <h2>
          mySkillsCloud<span className="brackets">()</span>
        </h2>
      </div>
      <div id="skill_cloud_container"></div>
    </section>
  );
};
