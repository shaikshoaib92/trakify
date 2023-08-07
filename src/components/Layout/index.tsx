import React, { Children } from "react";
import Sidebar from "./components/Sidebar";
import { LayoutStyles } from "./LayoutStyles";

const Layout = ({ children }: any) => {
  return (
    <LayoutStyles.Container>
      <Sidebar />
      <LayoutStyles.SubContainer>{children}</LayoutStyles.SubContainer>
    </LayoutStyles.Container>
  );
};

export default Layout;
