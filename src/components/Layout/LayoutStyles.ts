import { styled } from "@mui/system";

export const LayoutStyles = {
  Container: styled("div")(() => ({
    display: "flex",
    margin: "-8px", //change this
    width:"100vw",
    height:"100vh",
border:"2px solid black"
  })),

  SubContainer: styled("div")(() => ({
    display: "flex",
    marginLeft: "0",
    border:"2px solid green",
        flex: 1,
    overflow: "auto",
    overflowX: "hidden",
    width: "100vw",
    height:"100vh"
  })),
};
