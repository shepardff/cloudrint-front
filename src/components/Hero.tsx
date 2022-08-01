import { Grid } from '@mui/material';
import styled from 'styled-components';
import Typography from './Typography';
import { SmileIcon, EnvelopeIcon, printer } from '../assets';

const HeroGrid = styled(Grid)`
  background-color: #f2efef;
  border-radius: 8px;
  text-align: center;
`;

const HeroImage = styled.img`
  width: 50%;
  height: auto;
  margin-top: 30px;
`;

const IconContainer = styled.div`
  width: 40%;
  margin: 30px auto 80px;
`;

const Hero = () => {
  return (
    <Grid container justifyContent={'space-between'} columnGap={2} marginTop={'50px'}>
      <HeroGrid item lg md sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
        <Typography variant="body1" mt={6} fontSize={'24px'}>
          Удобный сервис
        </Typography>
        <IconContainer>
          <SmileIcon />
        </IconContainer>
      </HeroGrid>
      <HeroGrid item lg={5} md={4} sm={12} xs={12} pb={4}>
        <Typography variant="body1" fontSize={'28px'} mt={3}>
          Высокое качество
        </Typography>
        <Typography variant="body1" fontSize={'16px'} mt={2}>
          Только фотографии высокого качества
        </Typography>
        <HeroImage src={printer} alt="" />
      </HeroGrid>
      <HeroGrid item lg md sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
        <Typography variant="body1" mt={6} fontSize={'24px'}>
          Быстрая доставка
        </Typography>
        <IconContainer>
          <EnvelopeIcon />
        </IconContainer>
      </HeroGrid>
    </Grid>
  );
};

export default Hero;
