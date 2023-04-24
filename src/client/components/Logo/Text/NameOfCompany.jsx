import { Box } from "@mui/system";
import Images from "../../Images/Images";

const NameOfCompany = () => {
  return (
    <Box
      component={"img"}
      className="nameOfCompany"
      alt="עיצובישיין"
      src={Images.companyName}
    ></Box>
  );
};

export default NameOfCompany;
