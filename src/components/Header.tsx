import styled from 'styled-components';

import { RightIcon } from '../assets';
import Button from './Button';
import Typography from './Typography';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  flex: 0 0 auto;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 50px;

  @media (max-width: 1100px) {
    margin-top: 30px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Logo = styled.a`
  color: ${props => props.theme.colors.charcoal};
  font-family: ${props => props.theme.fontFamily};
  font-weight: ${props => props.theme.fontWeight};
  font-size: 26px;
  text-decoration: none;
`;

const SpanLogo = styled.span`
  color: ${props => props.theme.colors.carrotOrange};
`;

const HeaderButton = styled(Button)`
  @media (max-width: 600px) {
    display: none;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo href="#">
          <SpanLogo>Cloud</SpanLogo>Rint
        </Logo>
        <Typography mt={2}>Сервис печати фотографий</Typography>
      </LogoContainer>
      <HeaderButton endIcon={<RightIcon />}>Instagram</HeaderButton>
    </HeaderContainer>
  );
};

export default Header;
