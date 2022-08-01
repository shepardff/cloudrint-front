import { Button, Grid } from '@mui/material';
import styled from 'styled-components';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const NavigationButton = styled(Button).attrs(props => ({
  variant: 'text',
  sx: {
    color: props.theme.colors.charcoal,
    fontFamily: props.theme.fontFamily,
    fontWeight: props.theme.fontWeight,
    padding: 0,
  },
}))``;

const Navigation = () => {
  return (
    <Grid container justifyContent={'space-between'} mt={3}>
      <Grid>
        <NavigationButton startIcon={<ArrowBackIcon sx={{ fontSize: '25px !important' }} />}>Мои фото</NavigationButton>
      </Grid>
      <Grid>
        <NavigationButton endIcon={<ChevronRightIcon sx={{ fontSize: '25px !important' }} />}>
          Продолжить
        </NavigationButton>
      </Grid>
    </Grid>
  );
};

export default Navigation;
