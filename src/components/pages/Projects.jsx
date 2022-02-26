import React, { useState } from "react";

import ProjectData from "../data/ProjectData.js";
import ProjectList from "./Projects/ProjectList";

import styled from "styled-components";

const ProjectContainer = styled.div`
  max-width: 768px;
  margin: auto;
  padding: 0 20px;
}
`;

// const classes = {
//   root: {
//     flexGrow: 1,
//     overflow: "hidden",
//   },
//   paper: {
//     // padding: 20,
//     marginTop: 100,
//     textAlign: "center",
//     color: "white",
//     fontSize: "60px",
//     // fontFamily: "Roboto",
//     fontWeight: "bold",
//     height: 800,
//     width: "96vw",
//     backgroundColor: "transparent",
//     // border: "1px solid white",
//     overflow: "hidden",
//   },
// };

function Projects() {
  const [project, setProject] = useState(ProjectData);
  return (
    <ProjectContainer>
      <ProjectList project={project} />
    </ProjectContainer>
  );
}

export default Projects;
