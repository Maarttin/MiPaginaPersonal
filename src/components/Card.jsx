import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import foto_perfil from '../assets/foto_perfil.jpg'
export default function ActionAreaCard() {
  return (
    <Card sx={{ width:400, height: 600, background:"#415a77" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={foto_perfil}
          alt="Información de Martín"
          sx={{
            height: 250,       
            width: '100%',    
            objectFit: 'cover' 
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{color:'#ffffff'}}>
            Acerca de mi
          </Typography>
          <Typography variant="body2" sx={{color:'#ffffff', }}>
            Soy Martín Aragón Sánchez, Me gradué en la carrera de Ingeniería en Computación en la Universidad Tecnológica de la Mixteca de Huajuapan de León, Oaxaca en julio de 2025. La tecnología, los videojuegos y las computadoras son cosas que realmente me apasionan y me interesan mucho. En este momento estoy interesado en Desarrollo Web y en la Inteligencia Artificial.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
//https://coolors.co/0d1b2a-1b263b-415a77-778da9-e0e1dd