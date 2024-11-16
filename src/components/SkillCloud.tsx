import { useEffect } from "react";
import "./SkillCloud.css";
import { initSkillCloudAnimation } from "./SkillCloudAnimation.ts";

export const SkillCloud = () => {
  useEffect(() => {
    initSkillCloudAnimation();
  }, []);

  return (
    <section id="skill_cloud" className="section_skill_cloud">
      <div id="skill_cloud_container"></div>
    </section>
  );
};
