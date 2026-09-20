import { useEffect } from "react";
import "./SkillCloud.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { initSkillCloudAnimation } from "./SkillCloudAnimation.ts";

export const SkillCloud = () => {
  useEffect(() => {
    initSkillCloudAnimation();
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with custom settings
  }, []);

  return (
    <section id="skill_cloud" className="section_skill_cloud">
      <div className="skill_cloud_title">
        <h2>
          mySkillsCloud<span className="brackets">()</span>
        </h2>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
        id="skill_cloud_container"
      ></div>
    </section>
  );
};
