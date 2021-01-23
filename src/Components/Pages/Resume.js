import React, { useEffect, useState } from "react";
import { Container, FlexboxGrid } from "rsuite";
import SkillIcon from "../Elements/SkillIcon";
import TopNav from "../Elements/TopNav";
import Footer from "../Elements/Footer";

const Resume = () => {
  const [technicalSkills, setTechnicalSkills] = useState(null);
  const [businessSkills, setBusinessSkills] = useState(null);

  const get_data = async () => {
    const tech_data = await fetch("/data/technicalskills.json");
    const json_data = await tech_data.json();
    setTechnicalSkills(json_data);
    const biz_data = await fetch("/data/business_skills.json");
    const biz_json_data = await biz_data.json();
    setBusinessSkills(biz_json_data);
  };

  useEffect(() => {
    get_data();
  }, []);
  return (
    <div style={{ alignContent: "center" }}>
      <Container className="main_container">
        <TopNav />
        <Container
          fluid
          style={{ alignItems: "center" }}
          className="section_style"
        >
          <h2>Education</h2>
          <p>B.sc Computer Science , University of Delhi, India</p>
        </Container>
        <Container
          fluid
          style={{ alignItems: "center" }}
          className="section_style"
        >
          <h2>Technical Skills</h2>
          <FlexboxGrid>
            {technicalSkills &&
              technicalSkills.map((techskills, index) => (
                <SkillIcon key={index} skills={techskills} />
              ))}
          </FlexboxGrid>
        </Container>

        <Container
          style={{ alignItems: "center" }}
          fluid
          className="section_style"
        >
          <h2>Business Skills</h2>
          <FlexboxGrid>
            {businessSkills &&
              businessSkills.map((skill, i) => (
                <h6 key={i} className="skill_icon">
                  {skill}
                </h6>
              ))}
          </FlexboxGrid>
        </Container>
        <Footer />
      </Container>
    </div>
  );
};

export default Resume;
