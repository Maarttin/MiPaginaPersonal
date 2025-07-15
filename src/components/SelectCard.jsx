import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import ButtonBaseDemo from "../components/Boton";
const cards = [
  {
    id: 1,
    title: 'Certificaciones',
    descriptionLong: 'Conceptos básicos de redes.\nConceptos básicos de Ciberseguridad.\nConocimiento en Python.\nConocimiento en Java.\nConocimiento en C.\nConocimiento en Javascript. ',
  },
  {
    id: 2,
    title: 'Habilidades',
    descriptionLong: 'Responsabilidad. \nResolución de problemas.\n Trabajo en equipo. \n Pensamiento crítico. \nProactividad. ',
  },
  {
    id: 3,
    title: 'Mis proyectos',
    descriptionLong: 'Humans depend on plants and animals for survival.',
  },
  
];

export default function SelectActionCard() {

  const [expandedCardId, setExpandedCardId] = React.useState(null);

  const handleToggle = (id) => {
    setExpandedCardId(expandedCardId === id ? null : id);
  };
  return (
    <Box
      sx={{

        display: 'flex',
        justifyContent: 'center',
        width: '100%',

        // alignItems: 'center',
        // height: '100vh',
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 3,
          maxWidth: '1000px',
        }}
      >
        {cards.map((card) => (
          <Card key={card.id} sx={{
            
            width:220,
            height: expandedCardId == card.id ? 300 : 60,
            backgroundColor: expandedCardId=== card.id ? '#415a77' : '#778da9',
            color: expandedCardId === card.id ? '#fff' : '#000',
            transition: 'all 0.3s ease',
            
          }} >
            <CardActionArea
              onClick={() => handleToggle(card.id)}


            >
              <CardContent sx={{ height: '100%' , }}>
                <Typography variant="h5" component="div" sx={{display: 'flex',  flexDirection: 'column',alignItems: 'center', }} >
                  {card.title}
                </Typography>
                <Typography variant="body2" sx={{display: 'flex',  flexDirection: 'column',alignItems: 'center', }} >
                 <p style={{ whiteSpace: 'pre-line' }}>
                   {expandedCardId === card.id ? card.descriptionLong : card.descriptionShort}
                  </p>
                </Typography>
              </CardContent>
            </CardActionArea>
          
          </Card>
          
        ))}
      </Box>
      
    </Box>
  );
}


