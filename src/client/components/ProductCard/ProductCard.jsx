import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import styled from 'styled-components';

import image from "../../../public/home_page_photo.png"


const ProductImage = styled(CardMedia)`
  height: 140px;
`;

const CardActionsContainer = styled(CardActions)`
  display: flex;
  justify-content: space-between;
`;

const Price = styled(Typography)`
  font-size: 1.25rem;
  font-weight: bold;
`;

const ProductCard = () => {
  return (
    <Card  >
      <CardActionArea>
        <ProductImage component="img" image={image} alt="(: בלונים" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActionsContainer>
        <Button size="small" color="primary">
          הוסף לסל
        </Button>
        <Price variant="h6">300₪</Price>
      </CardActionsContainer>
    </Card>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard;
