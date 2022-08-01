import styled from 'styled-components';
import InstagramIcon from '@mui/icons-material/Instagram';

import { Box, Button } from '@mui/material';

const FooterNav = styled.nav`
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
    row-gap: 30px;
  }
`;

const FooterList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 35%;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 1100px) {
    width: 50%;
  }

  @media (max-width: 800px) {
    width: 60%;
  }

  @media (max-width: 600px) {
    width: 100%;
    row-gap: 10px;
  }
`;

const FooterLink = styled.a`
  font-family: ${props => props.theme.fontFamily};
  font-weight: ${props => props.theme.fontWeight};
  text-decoration: none;
  color: #c1b9b9;
  font-size: 20px;
`;

const FooterCopyright = styled.span`
  font-family: ${props => props.theme.fontFamily};
  font-weight: ${props => props.theme.fontWeight};
  color: #c1b9b9;
  font-size: 20px;
`;

const FooterButton = styled(Button).attrs(props => ({
  variant: 'text',
  sx: {
    color: '#c1b9b9',
    fontFamily: props.theme.fontFamily,
    fontWeight: props.theme.fontWeight,
    fontSize: '20px',
    padding: 0,
    lineHeight: 0,
  },
}))`
  @media (min-width: 600px) {
    display: none;
  }
`;

const Footer = () => {
  return (
    <footer style={{ flex: '0 0 auto', marginTop: '100px', marginBottom: '50px' }}>
      <FooterNav>
        <FooterList>
          <li>
            <FooterLink href="#">ОПЛАТА</FooterLink>
          </li>
          <li>
            <FooterLink href="#">ДОСТАВКА</FooterLink>
          </li>
          <li>
            <FooterLink href="#">КОНТАКТЫ</FooterLink>
          </li>
        </FooterList>
        <Box component={'div'} sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <FooterButton startIcon={<InstagramIcon />}>INSTAGRAM</FooterButton>
          <FooterCopyright>© 2022 CLOUDRINT</FooterCopyright>
        </Box>
      </FooterNav>
    </footer>
  );
};

export default Footer;
