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

interface NavigationProps {
  navigation: {
    backLink: string;
    backLinkName: string;
    forwardLink: string;
    forwardLinkName: string;
  };
}

const Navigation = (props: NavigationProps) => {
  console.log(props);
  return (
    <Grid container justifyContent={'space-between'} mt={3}>
      <Grid>
        <NavigationButton
          startIcon={<ArrowBackIcon sx={{ fontSize: '25px !important' }} />}
          href={props.navigation.backLink}
        >
          {props.navigation.backLinkName}
        </NavigationButton>
      </Grid>
      <Grid>
        <NavigationButton
          endIcon={<ChevronRightIcon sx={{ fontSize: '25px !important' }} />}
          href={props.navigation.forwardLink}
        >
          {props.navigation.forwardLinkName}
        </NavigationButton>
      </Grid>
    </Grid>
  );
};

export default Navigation;
