import React from "react";
import { Container, FlexboxGrid } from "rsuite";
import SkillIcon from "../Elements/SkillIcon";
import TopNav from "../Elements/TopNav";
import technicalSkills from "../../data/technicalskills.json";
import businessSkills from "../../data/business_skills.json";
import Footer from "../Elements/Footer";

const Resume = () => {
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
            {technicalSkills.map((techskills, index) => (
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
            {businessSkills.map((skill, i) => (
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
