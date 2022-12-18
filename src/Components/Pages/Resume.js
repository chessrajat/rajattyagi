import React, { useEffect, useState } from "react";
import { Container, FlexboxGrid, Modal, Button } from "rsuite";
import SkillIcon from "../Elements/SkillIcon";
import TopNav from "../Elements/TopNav";
import Footer from "../Elements/Footer";
import ProgressLine from "rsuite/lib/Progress/ProgressLine";

const Resume = () => {
  const [technicalSkills, setTechnicalSkills] = useState(null);
  const [businessSkills, setBusinessSkills] = useState(null);
  const [certs, setCerts] = useState(null);
  const [modelprop, setModelprop] = useState({
    showModal: false,
    modelimg: null,
    modeltext: "",
  });

  const get_data = async () => {
    const tech_data = await fetch("/data/technicalskills.json");
    const json_data = await tech_data.json();
    setTechnicalSkills(json_data);
    const biz_data = await fetch("/data/business_skills.json");
    const biz_json_data = await biz_data.json();
    setBusinessSkills(biz_json_data);
    const cert_data = await fetch("/data/certs.json");
    const cert_json_data = await cert_data.json();
    setCerts(cert_json_data);
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
            <b>To:</b> Dec, 2022
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

          <ProgressLine percent={100} showInfo={false} strokeWidth={2} />
          <hr></hr>
          <h3 className="skill_sub">Languages</h3>
          <FlexboxGrid>
            {technicalSkills &&
              technicalSkills
                .filter((skill) => skill.type === "language")
                .map((techskills, index) => (
                  <SkillIcon key={index} skills={techskills} />
                ))}
          </FlexboxGrid>
          <hr></hr>
          <h3 className="skill_sub">Frameworks</h3>
          <FlexboxGrid>
            {technicalSkills &&
              technicalSkills
                .filter((skill) => skill.type === "framework")
                .map((techskills, index) => (
                  <SkillIcon key={index} skills={techskills} />
                ))}
          </FlexboxGrid>
          <hr></hr>
          <h3 className="skill_sub">Dev Tools & Technologies</h3>
          <FlexboxGrid>
            {technicalSkills &&
              technicalSkills
                .filter((skill) => skill.type === "dev_tools")
                .map((techskills, index) => (
                  <SkillIcon key={index} skills={techskills} />
                ))}
          </FlexboxGrid>

          <h3 className="skill_sub">Cyber security</h3>
          <FlexboxGrid>
            {technicalSkills &&
              technicalSkills
                .filter((skill) => skill.type === "cyber")
                .map((techskills, index) => (
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
          <h2>Certifications</h2>

          <ProgressLine percent={100} showInfo={false} strokeWidth={2} />
          <hr></hr>
          <h3 className="skill_sub">Assesment certs</h3>
          <br></br>
          <div id="carousel">
            {certs &&
              certs
                .filter((c) => c.type === "assesment")
                .map((cr, index) => (
                  <div class="slide">
                    <img
                      src={cr.img}
                      alt={`${cr.name} certificate`}
                      width="200px"
                      onClick={() => {
                        setModelprop({
                          showModal: true,
                          modelimg: cr.img,
                          modeltext: cr.name,
                        });
                      }}
                    />
                  </div>
                ))}
          </div>
          <hr></hr>
          <h3 className="skill_sub">Tech course certs</h3>
          <br></br>
          <div id="carousel">
            {certs &&
              certs
                .filter((c) => c.type === "tech_course")
                .map((cr, index) => (
                  <div class="slide">
                    <img
                      src={cr.img}
                      alt={`${cr.name} certificate`}
                      width="200px"
                      onClick={() => {
                        setModelprop({
                          showModal: true,
                          modelimg: cr.img,
                          modeltext: cr.name,
                        });
                      }}
                    />
                  </div>
                ))}
          </div>

          <hr></hr>
          <h3 className="skill_sub">Business course certs</h3>
          <br></br>
          <div id="carousel">
            {certs &&
              certs
                .filter((c) => c.type === "bis_course")
                .map((cr, index) => (
                  <div class="slide">
                    <img
                      src={cr.img}
                      alt={`${cr.name} certificate`}
                      width="200px"
                      onClick={() => {
                        setModelprop({
                          showModal: true,
                          modelimg: cr.img,
                          modeltext: cr.name,
                        });
                      }}
                    />
                  </div>
                ))}
          </div>

          <Modal size="lg" show={modelprop.showModal}>
            <img
              src={modelprop.modelimg}
              alt="microsoft az900 certificate"
              width="100%"
            />
            <Button
              className="light_button"
              width="100%"
              onClick={() => {
                setModelprop({
                  showModal: false,
                  modelimg: null,
                  modeltext: "",
                });
              }}
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
