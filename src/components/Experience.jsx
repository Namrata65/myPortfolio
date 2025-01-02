import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import linga from '../resources/techLogo/linga.jpg';
import cgi from '../resources/techLogo/cgi.jpg'

const Experience = () => {
  const LingaExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme }) => ({
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
    variants: [
      {
        props: ({ expand }) => !expand,
        style: {
          transform: "rotate(0deg)",
        },
      },
      {
        props: ({ expand }) => !!expand,
        style: {
          transform: "rotate(180deg)",
        },
      },
    ],
  }));
  const CGIExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme }) => ({
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
    variants: [
      {
        props: ({ expand }) => !expand,
        style: {
          transform: "rotate(0deg)",
        },
      },
      {
        props: ({ expand }) => !!expand,
        style: {
          transform: "rotate(180deg)",
        },
      },
    ],
  }));
  const [lingaExpanded, setLingaExpanded] = React.useState(false);
  const [cgiExpanded, setCGIExpanded] = React.useState(false);

  const handleLingaExpandClick = () => {
    setLingaExpanded(!lingaExpanded);
  };
  const handleCGIExpandClick = () => {
    setCGIExpanded(!cgiExpanded);
  };

  return (
    <section id="experience" className="experience">
        <h2>Work I have done at</h2>
      <div className="experience-container">
        <Card sx={{ maxWidth: 300 }}>
          <CardHeader
            title="LingaROS"
            subheader="From Sept,2020 to Sept,2021"
          />
          <CardMedia
            component="img"
            height="194"
            image={linga}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
            As a Junior Software Engineer
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <LingaExpandMore
              expand={lingaExpanded}
              onClick={handleLingaExpandClick}
              aria-expanded={lingaExpanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </LingaExpandMore>
          </CardActions>
          <Collapse in={lingaExpanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography sx={{ marginBottom: 2 }}>
              Lingaros is a global data services company specializing in data strategy, management, transformation, and analytics to help businesses unlock the full value of their data. 
              </Typography>
              <Typography>
              They empower consumer-focused enterprises with innovative, end-to-end data solutions for optimized performance.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
        <Card sx={{ maxWidth: 300 }}>
          <CardHeader
            title="CGI"
            subheader="From Sept,2021 to Oct,2022"
          />
          <CardMedia
            component="img"
            height="194"
            image={cgi}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
             As an associate software engineer
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <CGIExpandMore
              expand={cgiExpanded}
              onClick={handleCGIExpandClick}
              aria-expanded={cgiExpanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </CGIExpandMore>
          </CardActions>
          <Collapse in={cgiExpanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography sx={{ marginBottom: 2 }}>
              CGI Inc., founded in 1976 and headquartered in Montreal, Canada, is a leading multinational information technology and business consulting services firm. With approximately 95,000 employees across 40+ countries, CGI offers a comprehensive range of services, including business consulting, systems integration, application development, and IT outsourcing, to clients worldwide.  
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    </section>
  );
};

export default Experience;
