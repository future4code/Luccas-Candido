import React from "react";
import { useProtect } from "../../services/useProtect";

// Styled

import { ContainerAll, ContainerPost } from "./styles";

// Component
import CardPost from "./CardPost";

function Feed() {
  useProtect();
  return (
    <ContainerAll>
      <ContainerPost>
        <CardPost />
        <CardPost />
      </ContainerPost>
    </ContainerAll>
  );
}

export default Feed;
