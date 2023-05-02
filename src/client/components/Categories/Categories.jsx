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
  { id: "8", name: "יום נישואים" },
  { id: "9", name: "מתנה ללידה" },
  { id: "10", name: "הצעת נישואין" },
];

function Categories() {
  const [selectedCategory, setSelectedCategory] = useState("1");

  const [backgroundColor, setBackgroundColor] = useState('#6fa6ae');

  const handleMouseEnter = () => {
    const colors = ['#dfcbbd', '#deadd9', '#b4bfda', '#9dc3ce', '#b1d0b8', '#b1d0b8', '#a9d0ba', '#6fa6ae'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBackgroundColor(randomColor);
  };

  const handleMouseLeave = () => {
    setBackgroundColor('#6fa6ae');
  };

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
          navigation: {
            enabled: false,
            hiddenClass: "320",
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        },
        480: {
          slidesPerView: 3,
          navigation: {
            enabled: true,
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        },
        640: {
          slidesPerView: 4,
          navigation: {
            enabled: true,
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        },
        927: {
          slidesPerView: 5,
          navigation: {
            enabled: true,
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        },
        1200: {
          slidesPerView: 6,
          navigation: {
            enabled: true,
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        },
      },
      injectStyles: [
        `
        .swiper {
          max-width: 100vw;
          padding: 0 2.5rem
        } 
        @media screen and (max-width: 480px){
          .swiper-button-prev {
            display: none;
          }
          .swiper-button-next {
            display: none;
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
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              sx={{
                margin: "8px",
                borderRadius: "0.75rem",
                backgroundColor:
                  selectedCategory === category.id ? backgroundColor : "white",
                cursor: "pointer",
                transition: "background-color 0.2s ease-out",
                "&:hover": {
                  backgroundColor: backgroundColor,
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
