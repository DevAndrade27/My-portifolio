import { styled, Container, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Avatar from "../../../../assests/images/avatar.jpg";
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';

const Hero = () => {
  const StyledHero = styled("div")(() => ({
    backgroundColor: "black",
    color: "white",
    height: "100vh",
  }));
  const StyledImg = styled("img")(() => ({
    width: "100%",
    borderRadius: "50%",
  }));

  return (
    <div>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 4 }} >
              <StyledImg src={Avatar} alt="Avatar" />
            </Grid>
            <Grid size={{ xs: 12, md: 8 }} >
              <Typography color="primary" textAlign="center" variant="h1">Vinícius Andrade</Typography>
              <Typography color="primary" textAlign="center" variant="h2">I´m a Frontend Developer</Typography>
              <Grid container display={"flex"} justifyContent={"center"}>
                <Grid size={{ xs: 12, md: 4}} display={"flex"} justifyContent={"center"} >
                  <Button color="primary">
                    <DownloadIcon />
                    Download CV
                  </Button>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }} display={"flex"} justifyContent={"center"} >
                  <Button color="primary">
                    <EmailIcon />
                    Contact me
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          
        </Container>
      </StyledHero>
    </div>
  );
};

export default Hero;
