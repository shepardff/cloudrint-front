import styled from 'styled-components';
import { Typography as MuiTypography } from '@mui/material';

interface Props {
  fontSize?: string;
}

const Typography = styled(MuiTypography)<Props>`
  color: ${props => props.color || props.theme.colors.charcoal};
  font-family: ${props => props.theme.fontFamily};
  font-weight: ${props => props.theme.fontWeight};
  font-size: ${props => props.fontSize || '16px'};
`;

export default Typography;
