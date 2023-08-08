import React from "react";
import { NavStyles } from "./NavStyles";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import PaidIcon from "@mui/icons-material/Paid";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const Sidebar = () => {
  return (
    <NavStyles.Container>
       {/* <NavStyles.Img src="./trakify-logo.png"/> */}
      <NavStyles.SubContainer>
        <SpaceDashboardIcon
          sx={{
            color: "white",
          }}
        />
        <NavStyles.Text>Dash Board</NavStyles.Text>
      </NavStyles.SubContainer>
      <NavStyles.SubContainer>
        <PaidIcon
          sx={{
            color: "white",
          }}
        />
        <NavStyles.Text>Transaction</NavStyles.Text>
      </NavStyles.SubContainer>
      <NavStyles.SubContainer>
        <AccountBalanceIcon
          sx={{
            color: "white",
          }}
        />
        <NavStyles.Text>Account</NavStyles.Text>
      </NavStyles.SubContainer>
      <NavStyles.SubContainer>
        <AccountBalanceWalletIcon
          sx={{
            color: "white",
          }}
        />
        <NavStyles.Text>Budget</NavStyles.Text>
      </NavStyles.SubContainer>
      <NavStyles.SubContainer>
        <TrendingUpIcon
          sx={{
            color: "white",
          }}
        />
        <NavStyles.Text>Report</NavStyles.Text>
      </NavStyles.SubContainer>
    </NavStyles.Container>
  );
};

export default Sidebar;
