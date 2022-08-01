import styled from 'styled-components';
import { Button as MuiButton } from '@mui/material';

interface Props {
  fontSize?: string;
}

const Button = styled(MuiButton).attrs(props => ({
  variant: 'outlined',
  sx: {
    color: props.theme.colors.charcoal,
    fontFamily: props.theme.fontFamily,
    fontWeight: props.theme.fontWeight,
    borderWidth: '3px',
    borderColor: props.theme.colors.christine,
    borderRadius: '15px',
    '&:hover': {
      borderColor: props.theme.colors.christine,
      borderWidth: '3px',
    },
  },
}))<Props>`
  font-size: ${props => props.fontSize};
  background-color: white;
  &:hover {
    background-color: white;
  }
`;

export default Button;
