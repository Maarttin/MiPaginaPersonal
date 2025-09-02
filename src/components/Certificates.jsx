import {Typography, Box,  Link, List, ListItem } from '@mui/material';


const certificateData =   {
    id: 1,
    title: 'Certificaciones',
    certificates: [
      {
        name: 'Deep Learning',
        url: '/MiPaginaPersonal/files/Intro-to-Deep-Learning.pdf'
      
      },
      {
        name: 'Machine Learning',
        url: '/MiPaginaPersonal/files/Intro-to-Machine-Learning.pdf'
      },
      {
      name:'Prompting responsable',
      url: '/MiPaginaPersonal/files/Prompting-responsable.pdf'
      },
      {
      name: 'python',
      url: '/MiPaginaPersonal/files/python.pdf'
      },
      {
        name:'English for semiconductors industry',
        url: '/MiPaginaPersonal/files/Semiconductor.pdf'
      },
      {
        name:'Cybersecurity',
        url: 'https://www.credly.com/badges/fe0047f9-4e55-4081-8111-025ecc29c64b/linked_in_profile'
      },
      {
        name: 'Conceptos básicos de redes',
        url: 'https://www.credly.com/badges/4959855e-c561-4e9a-9b23-64456a510fce'
      },
      {
        name: 'Jira',
        url: 'https://university.atlassian.com/student/award/CrDS9mwB6VWmPYJqCbRKTBRd'
      },
      {
        name: 'Scrum',
      url:'https://www.credly.com/badges/c9f5a17b-88ee-4d99-a611-0b13f799a123/linked_in_profile'
    }
    ],
  };


  export default function CertificateSection() {
  return (


    
    <Box sx={{ p: 2, color: 'var(--text-color)' }}>
      <Typography variant="h5" gutterBottom>
        {certificateData.title}
      </Typography>
      <List>
        {certificateData.certificates.map((cert, index) => (
          <ListItem key={index} disablePadding>
            <Link href={cert.url} target="_blank" rel="noopener" underline="hover" sx={{ color: 'var(--text-color)' }}>
              • {cert.name}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
