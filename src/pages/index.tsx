import Layout from "@/components/Layout";
import { Inter } from "next/font/google";
import { DashboardStyles } from "./DashboardStyles";
import { Button, TextField } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <DashboardStyles.Container>
        <DashboardStyles.SubContainerOne>
          <DashboardStyles.Earnings>
            <DashboardStyles.HeadingText>Net Worth</DashboardStyles.HeadingText>
            <DashboardStyles.Text>1M</DashboardStyles.Text>
          </DashboardStyles.Earnings>
          <DashboardStyles.Earnings>
            <DashboardStyles.HeadingText>
              Total Income
            </DashboardStyles.HeadingText>
            <DashboardStyles.Text>100k</DashboardStyles.Text>
          </DashboardStyles.Earnings>
          <DashboardStyles.Earnings>
            <DashboardStyles.HeadingText>
              Total Spent
            </DashboardStyles.HeadingText>
            <DashboardStyles.Text>20k</DashboardStyles.Text>
          </DashboardStyles.Earnings>
        </DashboardStyles.SubContainerOne>
        <DashboardStyles.SubContainerTwo>
          <DashboardStyles.Transaction>
            <DashboardStyles.HeadingText>Debited</DashboardStyles.HeadingText>
            <DashboardStyles.TranssactionInnerDiv>
              <DashboardStyles.TransactionSubDev>
                <DashboardStyles.TransactionText>
                  Amount:
                </DashboardStyles.TransactionText>
                <TextField
                  id="standard-basic"
                  label="Enter you Amount"
                  variant="standard"
                />
              </DashboardStyles.TransactionSubDev>
              <DashboardStyles.TransactionSubDev>
                <DashboardStyles.TransactionText>
                  Tags:
                </DashboardStyles.TransactionText>
                <TextField
                  id="standard-basic"
                  label="Select your catagory"
                  variant="standard"
                />
              </DashboardStyles.TransactionSubDev>
              <DashboardStyles.TransactionSubDev>
                <DashboardStyles.TransactionText>
                  Description:
                </DashboardStyles.TransactionText>
                <TextField
                  id="standard-basic"
                  label="Why did you get this ?"
                  variant="standard"
                />
              </DashboardStyles.TransactionSubDev>
            </DashboardStyles.TranssactionInnerDiv>
            <Button
                variant="contained"
                sx={{
                  backgroundColor: "green",
                }}
              >
                submit
              </Button>
          </DashboardStyles.Transaction>
          <DashboardStyles.Transaction>
            <DashboardStyles.HeadingText>Credited</DashboardStyles.HeadingText>
            <DashboardStyles.TranssactionInnerDiv>
              <DashboardStyles.TransactionSubDev>
                <DashboardStyles.TransactionText>
                  Amount:
                </DashboardStyles.TransactionText>
                <TextField
                  id="standard-basic"
                  label="Enter you Amount"
                  variant="standard"
                />
              </DashboardStyles.TransactionSubDev>
              <DashboardStyles.TransactionSubDev>
                <DashboardStyles.TransactionText>
                  Tags:
                </DashboardStyles.TransactionText>
                <TextField
                  id="standard-basic"
                  label="Select your catagory"
                  variant="standard"
                />
              </DashboardStyles.TransactionSubDev>
              <DashboardStyles.TransactionSubDev>
                <DashboardStyles.TransactionText>
                  Description:
                </DashboardStyles.TransactionText>
                <TextField
                  id="standard-basic"
                  label="Why did you get this ?"
                  variant="standard"
                />
              </DashboardStyles.TransactionSubDev>
            </DashboardStyles.TranssactionInnerDiv>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "green",
                }}
              >
                submit
              </Button>
          </DashboardStyles.Transaction>
        </DashboardStyles.SubContainerTwo>
      </DashboardStyles.Container>
    </Layout>
  );
}
