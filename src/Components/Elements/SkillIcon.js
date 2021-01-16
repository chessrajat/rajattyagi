import React from "react";
import { FlexboxGrid } from "rsuite";

const SkillIcon = ({ skills }) => {
  return (
    <FlexboxGrid.Item className="skill_icon">
      <img
        style={{ width: "70px" }}
        src={`/img/icons/${skills.icon_name}`}
        alt={`${skills.text} icon`}
      />
      <h5>
        {[...Array(skills.count)].map((e, i) => (
          <span>&nbsp;</span>
        ))}
        {skills.text}
      </h5>
    </FlexboxGrid.Item>
  );
};

export default SkillIcon;
