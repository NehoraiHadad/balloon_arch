import { Grid, Typography, Card, CardContent } from "@mui/material";
import { useRef, useEffect, useState } from "react";
import { register } from "swiper/element/bundle";

register();

const categories = [
  { id: "1", name: "Birthday" },
  { id: "2", name: "Wedding" },
  { id: "3", name: "Graduation" },
  { id: "4", name: "Baby Shower" },
  { id: "5", name: "Holiday" },
  { id: "6", name: "Birthday" },
  { id: "7", name: "Wedding" },
  { id: "8", name: "Graduation" },
  { id: "9", name: "Baby Shower" },
  { id: "10", name: "Holiday" },
];

function Categories() {
  
  const [selectedCategory, setSelectedCategory] = useState(null);

  function handleCategorySelect(category) {
    setSelectedCategory(category.id);
  }
  const swiperElRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperElRef.current;
    const params = {
      navigation: true,
      pagination: true,
      injectStyles: [
        `
        .swiper{
          width: 96vw
        }
        .swiper-pagination-bullets {
          display: none;
      }
      `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <Grid container marginTop={3} marginLeft={3}>
      <swiper-container
        class="swiper"
        ref={swiperElRef}
        init="false"
        slides-per-view={7}
        space-between={10}
        showsPagination={false}
      >
        {categories.map((category) => (
          <swiper-slide key={category.id}>
            <Card
              sx={{
                marginBottom: '8px',
                borderRadius: "0.75rem",
                backgroundColor: selectedCategory === category.id ? '#fce4ec' : 'white',
                cursor: "pointer",
                transition: "background-color 0.2s ease-out",
                "&:hover": {
                  backgroundColor: "#fce4ec",
                },
              }}
              onClick={() => handleCategorySelect(category)}
            >
              <CardContent sx={{ padding: "1.5rem", textAlign: "center" }}>
                <Typography
                  variant="h6"
                  sx={{ color: selectedCategory === category.id ? '#d81b60' : '#222' }}
                >
                  {category.name}
                </Typography>
              </CardContent>
            </Card>
          </swiper-slide>
        ))}
      </swiper-container>
    </Grid>
  );
}

export default Categories;
