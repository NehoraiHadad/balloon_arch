import "./HomePage.css";

import NameOfCompany from "../Logo/Text/NameOfCompany";
import { Button, Grid, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Grid2
      container
      className="homePage"
      dir="rtl"
      direction={"column"}
      justifyContent={"space-between"}
    >
      <Grid
        container
        direction={"column"}
        alignItems={"center"}
        sx={{ marginTop: "-2rem" }}
      >
        <Grid item>
          <NameOfCompany />
        </Grid>
        <Grid item>
          <Typography letterSpacing={0.3} className="ParagraphHomePag">
            שדרג את האירוע הבא שלך עם קשתות הבלונים הניתנות להתאמה אישית שלנו,
            מושלמות לכל אירוע!
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        marginBottom={"5rem"}
        direction={"column"}
        alignItems={"center"}
      >
        <Link to={"/products"} style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            sx={[
              { bgcolor: "White", color: "black", fontSize: 20 },
              { "&:hover": { bgcolor: "grey", color: "White" } },
            ]}
            size="medium"
          >
            להזמנות
          </Button>
        </Link>
      </Grid>
    </Grid2>
  );
};

export default HomePage;
