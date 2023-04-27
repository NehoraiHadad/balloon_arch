import { useState } from 'react';
import { Grid, Typography, Card, CardContent } from '@mui/material';

const categories = [
  { id: '1', name: 'Birthday' },
  { id: '2', name: 'Wedding' },
  { id: '3', name: 'Graduation' },
  { id: '4', name: 'Baby Shower' },
  { id: '5', name: 'Holiday' },
];

function Categories() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  function handleCategorySelect(category) {
    setSelectedCategory(category.id);
  }

  return (
    <Grid container spacing={2} sx={{ flexWrap: 'wrap' }}>
      <Grid item xs={12}>
        <Typography variant="h4" sx={{ color: '#222', marginBottom: '1.5rem' }}>
          Categories
        </Typography>
      </Grid>
      {categories.map((category) => (
        <Grid item xs={6} sm={4} md={2} key={category.id}>
          <Card
            sx={{
              borderRadius: '0.75rem',
              backgroundColor: selectedCategory === category.id ? '#fce4ec' : 'white',
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease-out',
              '&:hover': {
                backgroundColor: '#fce4ec',
              },
            }}
            onClick={() => handleCategorySelect(category)}
          >
            <CardContent sx={{ padding: '1.5rem', textAlign: 'center' }}>
              <Typography
                variant="h6"
                sx={{ color: selectedCategory === category.id ? '#d81b60' : '#222' }}
              >
                {category.name}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Categories;
