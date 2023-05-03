import { Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Images from "../Images/Images";

const ErrorPage = () => {
  return (
    <Grid
      container
      dir={"rtl"}
      justifyContent={"center"}
      textAlign={"center"}
      alignItems={"center"}
      width={"100vw"}
      height={"100vh"}
      alignContent={"center"}
    >
      <Grid item width={"100%"} marginBottom={3}>
        <Typography fontSize={"2.5rem"} color={"red"}>
          {" "}
          יש לנו שגיאה! :({" "}
        </Typography>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Button sx={{ fontSize: "1.3rem" }}>בואו נחזור להתחלה... </Button>
        </Link>
      </Grid>
      <Grid item>
        <Typography component={"img"} src={Images.ErorrImg} width={"35rem"} />
      </Grid>
    </Grid>
  );
};

export default ErrorPage;
