import { Grid, Typography, Card, CardContent } from "@mui/material";
import { useRef, useEffect, useState } from "react";
import { register } from "swiper/element/bundle";

register();

const categories = [
  { id: "1", name: "כל המוצרים" },
  { id: "2", name: "חתונות" },
  { id: "3", name: "ימי הולדת" },
  { id: "4", name: "מתנות" },
  { id: "5", name: "חגים" },
  { id: "6", name: "מארזים" },
  { id: "7", name: "קשתות בלונים" },
  { id: "8", name: "יום נישואין" },
  { id: "9", name: "מתנה ללידה" },
  { id: "10", name: "הצעת נישואין" },
];

function Categories() {
  const [selectedCategory, setSelectedCategory] = useState("1");

  function handleCategorySelect(category) {
    setSelectedCategory(category.id);
  }
  const swiperElRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperElRef.current;
    const params = {
      navigation: true,
      breakpoints: {
        320: {
          slidesPerView: 2,
        },
        480: {
          slidesPerView: 3,
        },
        640: {
          slidesPerView: 4,
        },
        927: {
          slidesPerView: 5,
        },
        1200: {
          slidesPerView: 6,
        },
      },
      injectStyles: [
        `
        .swiper{
          max-width: 100vw;
          padding: 0 2.5rem
        },
        .swiper-button-next{
          @media (max-width: 320px){
            display: none
          }
        }
      `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <Grid container marginTop={2}>
      <swiper-container
        class="swiper"
        ref={swiperElRef}
        init="false"
        showsPagination={false}
      >
        {categories.map((category) => (
          <swiper-slide key={category.id}>
            <Card
              sx={{
                margin: "8px",
                borderRadius: "0.75rem",
                backgroundColor:
                  selectedCategory === category.id ? "#fce4ec" : "white",
                cursor: "pointer",
                transition: "background-color 0.2s ease-out",
                "&:hover": {
                  backgroundColor: "#fce4ec",
                },
              }}
              onClick={() => handleCategorySelect(category)}
            >
              <CardContent sx={{ padding: ".5rem", textAlign: "center" }}>
                <Typography
                  variant="h6"
                  sx={{
                    color:
                      selectedCategory === category.id ? "#d81b60" : "#222",
                  }}
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
