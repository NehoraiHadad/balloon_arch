import {Button} from '@mui/material'
import { Link } from 'react-router-dom';

// const cartDetails = [];

//   cartItems.forEach(item => {
//     const { title, price, quantity } = item;
//     const itemDetails = `${title} - $${price.toFixed(2)} x ${quantity}\n`;
//     cartDetails.push(itemDetails);
//   });

//   return cartDetails;
// }


const WhatsappButton = ({cartItems, totalCost}) => {
    
    function getCartDetails(cartItems , totalCost) {
        const cartDetails = [];
      
        // Calculate the maximum length of the title, price, and quantity fields
        const titleLength = Math.max(...cartItems.map(item => item.title.length));
        const priceLength = Math.max(...cartItems.map(item => `$${item.price.toFixed(2)}`.length));
        const quantityLength = Math.max(...cartItems.map(item => item.quantity.toString().length));

        // Add the header row to the cartDetails array
        const headerRow = `| ${'Title'.padEnd(titleLength)} | ${'Price'.padEnd(priceLength)} | ${'Quantity'.padEnd(quantityLength)} |\n`;
        cartDetails.push(headerRow);

        // Add a separator row to the cartDetails array
        const separatorRow = `+${'-'.repeat(titleLength + 2)}+${'-'.repeat(priceLength + 2)}+${'-'.repeat(quantityLength + 2)}+\n`;
        cartDetails.push(separatorRow);

        // Add each item row to the cartDetails array
        cartItems.forEach(item => {
            const { title, price, quantity } = item;
            const itemRow = `| ${title.padEnd(titleLength)} | $${price.toFixed(2).padEnd(priceLength)} | ${quantity.toString().padEnd(quantityLength)} |\n`;
            cartDetails.push(itemRow);
    });

        // Add a final separator row to the cartDetails array
        cartDetails.push(separatorRow);

        return cartDetails;

      }
      

    return(
    <Link  
        to={`https://wa.me/0547401660?text=${getCartDetails(cartItems , totalCost)}`} 
        target='_blank'
        style={{ textDecoration: 'none' }}> 
        <Button variant="contained" color="primary" disableElevation>
            לתשלום
        </Button>
    </Link>
        )
}

export default WhatsappButton;