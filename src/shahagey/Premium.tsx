import React, { useState } from 'react';
import { Container, Typography, Box, Grid, Card, CardMedia, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const Premium = () => {
    const [selectedCar, setSelectedCar] = useState(null);
    const navigate = useNavigate();

            const cars = [
            {
                id: 1,
                title: 'Rolls-Royce Ghost 2023',
                price: '500 $',
                location: 'г.Бишкек',
                image: 'https://i.gaw.to/vehicles/photos/40/30/403012-2023-rolls-royce-ghost.jpg?640x400',
                description: 'Ultimate luxury sedan with handcrafted interior, whisper-quiet ride, and bespoke features'
            },
            {
                id: 2,
                title: 'Bentley Continental 2022',
                price: '450 $',
                location: 'г.Бишкек',
                image: 'https://www.edmunds.com/assets/m/bentley/continental/2022/oem/2022_bentley_continental_convertible_gt-speed_fq_oem_1_815.jpg',
                description: 'Exquisite grand tourer with premium leather, diamond-quilted seats, and powerful W12 engine'
            },
            {
                id: 3,
                title: 'Audi A8L 2022',
                price: '280 $',
                location: 'г.Бишкек',
                image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=180&fit=crop',
                description: 'Executive limousine with extended wheelbase, premium materials, and VIP comfort features'
            }

];
  
    return (
      <Container maxWidth="lg">
        <Box sx={{ 
          mt: 8, 
          textAlign: 'center',
          minHeight: '60vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 700,
              color: '#1f2937',
              mb: 3,
              fontSize: { xs: '2rem', md: '2.5rem' }
            }}
          >
            Available premium class
          </Typography>
          
          <Grid container spacing={3} sx={{ mt: 4 }}>
            {cars.map((car) => (
              <Grid item xs={12} sm={6} md={3} key={car.id}>
                <Card 
                  sx={{ 
                    borderRadius: 3, 
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)'
                    }
                  }}
                  onClick={() => setSelectedCar(car)}
                >
                  <CardMedia component="img" height="180" image={car.image} />
                  <CardContent sx={{ p: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>{car.price}</Typography>
                    <Typography variant="body2" color="text.secondary">{car.title}</Typography>
                    <Typography variant="body2" color="text.secondary">{car.location}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
  
        {/* Modal for selected car */}
        {selectedCar && (
          <Box 
            sx={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1300,
              p: 2
            }}
            onClick={() => setSelectedCar(null)}
          >
            <Card 
              sx={{ 
                maxWidth: 500,
                width: '100%',
                borderRadius: 3,
                overflow: 'hidden'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="250"
                  image={selectedCar.image}
                  alt={selectedCar.title}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    width: 40,
                    height: 40,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: '#f3f4f6'
                    }
                  }}
                  onClick={() => setSelectedCar(null)}
                >
                  <Typography sx={{ color: '#6b7280', fontWeight: 'bold', fontSize: '1.25rem' }}>
                    ×
                  </Typography>
                </Box>
              </Box>
              <CardContent sx={{ p: 4 }}>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    fontWeight: 600,
                    color: '#1f2937',
                    mb: 2
                  }}
                >
                  {selectedCar.title} - {selectedCar.price}
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: '#6b7280',
                    mb: 2,
                    lineHeight: 1.6
                  }}
                >
                  {selectedCar.location}
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: '#6b7280',
                    mb: 4,
                    lineHeight: 1.6
                  }}
                >
                  {selectedCar.description}
                </Typography>
                <Box
                  sx={{
                    backgroundColor: '#2563eb',
                    color: 'white',
                    py: 2,
                    px: 4,
                    borderRadius: 2,
                    textAlign: 'center',
                    cursor: 'pointer',
                    fontWeight: 600,
                    transition: 'background-color 0.2s ease',
                    '&:hover': {
                      backgroundColor: '#1d4ed8'
                    }
                  }}
                  onClick={() => navigate('/seller')}
                >
                  Contact Owner
                </Box>
              </CardContent>
            </Card>
          </Box>
        )}
      </Container>
    );
  };


  export default Premium;