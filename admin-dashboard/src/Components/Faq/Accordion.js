import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {
  return (
    <div className=' mt-8'>
      <Accordion sx={{
        backgroundColor: "#131E47",
        marginTop: "15px",
        borderRadius : "15px",
      }} 
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{
            color: "#fff"
          }}  />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{
            fontSize : 20, 
            fontWeight : 600,
            color : '#fff',
          }}>Module Title</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac, mi magna urna scelerisque erat. Vitae mi nunc vitae sodales placerat. Fermentum lobortis cursus arcu at nibh turpis. Vitae leo diam diam id.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{
        backgroundColor: "#131E47",
        marginTop: "15px",
        borderRadius : "15px",
      }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{
            color: "#fff"
          }} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{
            fontSize : 20, 
            fontWeight : 600,
            color : '#fff',
          }}
          >Module Title</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac, mi magna urna scelerisque erat. Vitae mi nunc vitae sodales placerat. Fermentum lobortis cursus arcu at nibh turpis. Vitae leo diam diam id.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{
        backgroundColor: "#131E47",
        marginTop: "15px",
        borderRadius : "15px",
      }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{
            color: "#fff"
          }}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{
            fontSize : 20, 
            fontWeight : 600,
            color : '#fff',
          }} 
          >Module Title</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac, mi magna urna scelerisque erat. Vitae mi nunc vitae sodales placerat. Fermentum lobortis cursus arcu at nibh turpis. Vitae leo diam diam id.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{
        backgroundColor: "#131E47",
        marginTop: "15px",
        borderRadius : "15px",
      }}> 
      
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{
            color: "#fff"
          }}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{
            fontSize : 20, 
            fontWeight : 600,
            color : '#fff',
          }}
          >Module Title</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac, mi magna urna scelerisque erat. Vitae mi nunc vitae sodales placerat. Fermentum lobortis cursus arcu at nibh turpis. Vitae leo diam diam id.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{
        backgroundColor: "#131E47",
        marginTop: "15px",
        borderRadius : "15px",
      }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{
            color: "#fff"
          }}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{
            fontSize : 20, 
            fontWeight : 600,
            color : '#fff',
          }}
          >Module Title</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac, mi magna urna scelerisque erat. Vitae mi nunc vitae sodales placerat. Fermentum lobortis cursus arcu at nibh turpis. Vitae leo diam diam id.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}