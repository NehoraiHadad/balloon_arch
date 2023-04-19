import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const WhatsappButton = ({ cartItems, totalCost, isMehadrin }) => {
  function getCartDetails(cartItems, totalCost, isMehadrin) {
    const cartDetails = [];

    // Calculate the maximum length of the title, price, and quantity fields
    const idLength = Math.max(
      ...cartItems.map((item) => item.id.toString().length)
    );
    const titleLength = Math.max(...cartItems.map((item) => item.title.length));
    const priceLength = Math.max(
      ...cartItems.map((item) => `$${item.price.toFixed(2)}`.length)
    );
    const quantityLength = Math.max(
      ...cartItems.map((item) => item.quantity.toString().length)
    );

    // Add the header row to the cartDetails array
    const headerRow = `| ${"סידורי".padEnd(
      idLength + idLength / 2
    )} | ${"שם".padEnd(titleLength + titleLength / 2)} | ${"מחיר".padEnd(
      priceLength + priceLength / 2
    )} | ${"כמות".padEnd(quantityLength + quantityLength / 2)} |%0a`;
    cartDetails.push(headerRow);

    // Add a separator row to the cartDetails array
    const separatorRow = `${"-".repeat(
      titleLength +
        titleLength +
        priceLength +
        (titleLength + titleLength + priceLength) / 4
    )}%0a`;
    cartDetails.push(separatorRow);

    // Add each item row to the cartDetails array
    cartItems.forEach((item) => {
      const { id, title, price, quantity } = item;
      const itemRow = `| ${id.toString().padEnd(idLength * 8)} | ${title.padEnd(
        titleLength
      )} | ₪${price.toFixed(2).padEnd(priceLength)} | ${quantity
        .toString()
        .padEnd(quantityLength * 6)} |%0a`;
      cartDetails.push(itemRow);
    });

    // Add a final separator row to the cartDetails array
    cartDetails.push(separatorRow);
    const isMehadrinRow = `כשרות: ${isMehadrin ? "מהדרין" : "רגיל"}%0a%0a`;
    const totalCostRow = `המחיר הסופי הוא : ₪${totalCost}`;

    // Construct the final message string by joining the cartDetails array
    const message = `רשימת הפריטים בעגלת הקניות שלך: %0a%0a ${cartDetails} ${isMehadrinRow} ${totalCostRow}`;

    return message;
  }

  return (
    <Link
      to={`https://wa.me/+972547401660?text=${getCartDetails(
        cartItems,
        totalCost,
        isMehadrin
      )}`}
      target="_blank"
      style={{ textDecoration: "none" }}
    >
      <Button
        variant="contained"
        disableElevation
        sx={{ bgcolor: "#075E54", "&:hover": { bgcolor: "#05453d" } }}
      >
        שליחת הזמנה
      </Button>
    </Link>
  );
};

export default WhatsappButton;
