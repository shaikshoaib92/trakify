import { styled } from "@mui/system";

export const LayoutStyles = {
  Container: styled("div")(() => ({
    display: "flex",
    margin: "-8px", //change this
  })),

  SubContainer: styled("div")(() => ({
    display: "flex",
    marginLeft: "0",
    width: "100vw",
  })),
};
