import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { Grid, Avatar } from "@mui/material";

const cartItem = ({
  cartItems,
  item,
  setCartItems,
  setTotalCost,
  totalCost,
  handleRemoveFromCart,
}) => {
  return (
    <ListItem
      key={item.id}
      sx={{ borderBottom: "1px solid #e0e0e0", padding: "10px 8px" }}
    >
      <Grid container alignItems="center" gap={1} width={"100%"}>
        <Grid item>
          <Avatar
            src={item.image}
            alt={item.title}
            sx={{ width: 85, height: 85 }}
            variant="rounded"
          />
        </Grid>
        <Grid item height={"85px"} width={"230px"}>
          <Grid
            container
            height={"100%"}
            width={"100%"}
            justifyContent="space-between"
            alignContent={"space-between"}
          >
            <Grid
              container
              flexDirection={"column"}
              width={"100%"}
              paddingTop={0.5}
              paddingRight={1.5}
              sx={{ alignItems: "flex-start" }}
            >
              <Typography
                variant="h6"
                textAlign={"center"}
                sx={{ direction: "rtl" }}
              >
                {item.title}
              </Typography>
              <Grid
                position="absolute"
                top={0}
                left={-5}
                sx={{ paddingTop: "3px" }}
              >
                <IconButton
                  size="small"
                  onClick={() => {
                    const existingItem = cartItems.find(
                      (cartItem) => cartItem.id === item.id
                    );
                    setCartItems(
                      cartItems.filter((cartItem) => cartItem.id !== item.id)
                    );
                    setTotalCost(
                      totalCost - item.price * existingItem.quantity
                    );
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </Grid>
            </Grid>
            <Grid
              container
              gap={"3px"}
              height={"50%"}
              marginTop={0}
              marginLeft={0}
              justifyContent={"space-around"}
              alignItems={"flex-end"}
            >
              <Grid container width={"50%"} justifyContent={"center"}>
                <Grid>
                  <IconButton
                    size="small"
                    onClick={() => handleRemoveFromCart(item)}
                  >
                    <RemoveIcon />
                  </IconButton>
                </Grid>
                <Grid>
                  <Typography variant="body1" padding={0.8}>
                    {item.quantity}
                  </Typography>
                </Grid>
                <Grid>
                  <IconButton
                    size="small"
                    onClick={() => {
                      const existingItem = cartItems.find(
                        (cartItem) => cartItem.id === item.id
                      );
                      existingItem.quantity += 1;
                      setCartItems([...cartItems]);
                      setTotalCost(totalCost + item.price);
                    }}
                  >
                    <AddIcon />
                  </IconButton>
                </Grid>
              </Grid>

              <Grid item>
                <Typography
                  variant="body2"
                  paddingBottom={1.3}
                  color="textSecondary"
                >
                  מחיר: {item.price.toFixed(2)} ₪
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default cartItem;
