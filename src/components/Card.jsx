import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import foto_perfil from '../assets/foto_perfil.jpg'
import { useTheme } from '@mui/material/styles';

export default function ActionAreaCard() {
    const theme = useTheme();
  return (
    <Card
      sx={{
        width: {
          xs: 250,
          sm: 300,
          md: 350,
        }
        , height: 'auto',
        backgroundColor: theme.palette.background.paper,
        margin: '0 auto',
      }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={foto_perfil}
          alt="Información de Martín"
          sx={{
            height: {
              xs: 200,
              sm: 250
            },
            width: '100%',
            objectFit: 'cover',
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ color: '#ffffff',fontSize: {
              xs: '2rem',     // teléfonos pequeños
              sm: '2.25rem',  // tablets o pantallas medianas
              md: '2.4rem',   // laptops
              lg: '2.75rem',  // pantallas grandes
            } }}>
            Acerca de mi
          </Typography>
          <Typography variant="body2" sx={{
            color: theme.palette.text.primary, fontSize: {
              xs: '1rem',     // teléfonos pequeños
              sm: '1.25rem',  // tablets o pantallas medianas
              md: '1.4rem',   // laptops
              lg: '1.75rem',  // pantallas grandes
            }
          }}>
            Soy Martín Aragón Sánchez, Me gradué en la carrera de Ingeniería en Computación en la Universidad Tecnológica de la Mixteca de Huajuapan de León, Oaxaca en julio de 2025. La tecnología, los videojuegos y las computadoras son cosas que realmente me apasionan y me interesan mucho. En este momento estoy interesado en Desarrollo Web y en la Inteligencia Artificial.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
//https://coolors.co/0d1b2a-1b263b-415a77-778da9-e0e1dd