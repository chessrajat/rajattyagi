import React, { useEffect, useState } from "react";
import { Container, FlexboxGrid, Modal, Button } from "rsuite";
import SkillIcon from "../Elements/SkillIcon";
import TopNav from "../Elements/TopNav";
import Footer from "../Elements/Footer";

const Resume = () => {
  const [technicalSkills, setTechnicalSkills] = useState(null);
  const [businessSkills, setBusinessSkills] = useState(null);
  const [showModal, setShowModal] = useState(false);

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
          <p>B.sc Computer Science , University of Delhi, India (2016-2019)</p>
        </Container>
        <Container
          fluid
          style={{ alignItems: "left" }}
          className="section_style"
        >
          <h2 style={{ textAlign: "center" }}>Experience</h2>
          <br></br>
          <h4>TCS (Tata Consultancy Services)</h4>
          <p>
            <b>From:</b> Feb,2020
          </p>
          <p>
            <b>To:</b> Currently working
          </p>
          <p>
            <b>Designation: </b> Systems Engineer
          </p>
          <p>
            <b>Role: </b> Automation Developer
          </p>
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
        <Container
          style={{ alignItems: "center" }}
          fluid
          className="section_style"
        >
          <h2>Certification</h2>
          <br></br>
          <FlexboxGrid>
            <img
              src="/img/certificates/az900.png"
              alt="microsoft az900 certificate"
              width="200px"
              onClick={() => setShowModal(true)}
            />
          </FlexboxGrid>
          <Modal show={showModal}>
            <img
              src="/img/certificates/az900.png"
              alt="microsoft az900 certificate"
              width="100%"
            />
            <Button
              className="light_button"
              width="100%"
              onClick={() => setShowModal(false)}
            >
              Close
            </Button>
          </Modal>
        </Container>
        <Footer />
      </Container>
    </div>
  );
};

export default Resume;
