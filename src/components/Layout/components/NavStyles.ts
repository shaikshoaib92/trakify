import { montserrat } from "@/pages/fonts";
import { styled } from "@mui/material";

export const NavStyles = {
  Container: styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: "15%",
    backgroundColor: "#A084E8",
    height: "100vh",
    boxShadow: " 12px -1px 40px -9px rgba(160,132,232,1)",
    paddingLeft:"20px",
    paddingTop:"20px"
  })),

  SubContainer: styled("div")(() => ({
    display: "flex",
    gap: "7px",
    alignItems: "center",
  })),

  Text: styled("p")(() => ({
    color: "white",
    fontWeight: "400px",
    fontFamily: montserrat.style.fontFamily,
    fontSize:"16px"
  })),
  
  Img: styled("img")(()=>({
    // mixBlendMode:"color-burn"
  }))
};
