import { styled } from "@mui/material";
import { dmsans, montserrat } from "./fonts";

export const DashboardStyles = {
  Container: styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    width: "100%",
  })),

  SubContainerOne: styled("div")(() => ({
    display: "flex",
    gap: "10px",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: "20px",
  })),

  SubContainerTwo: styled("div")(() => ({
    display: "flex",
    gap: "20px",
    width: "100%",
    justifyContent: "center",
  })),

  Transaction: styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    width: "500px",
    height: "400px",
    backgroundColor: "#A084E8",
    borderRadius: "9px",
    padding: "20px",
    justifyContent: "flex-start",
  })),

  TranssactionInnerDiv: styled("div")(()=>({
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
height:"100%"
  })),

  TransactionSubDev: styled("div")(() => ({
    display: "flex",
    justifyContent:"space-between",
    width:"70%"

  })),

  TransactionText: styled("p")(() => ({
    fontFamily: dmsans.style.fontFamily,
    fontSize: "16px",
    fontWeight: 300,
    color:"white"
  })),

  Earnings: styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "300px",
    height: "170px",
    borderRadius: "7px",
    backgroundColor: "#A084E8",
  })),

  HeadingText: styled("div")(() => ({
    fontFamily: montserrat.style.fontFamily,
    fontSize: "22px",
    color: "white",
    fontWeight: 700,
  })),

  Text: styled("p")(() => ({
    fontFamily: dmsans.style.fontFamily,
    fontSize: "18px",
    color: "white",
  })),
};
