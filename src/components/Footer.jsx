import { footerLinks } from "../constants";
import { FooterDiv, FooterLinks, FooterText, StyledFooter } from "./styles/Footer.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterDiv>
        <FooterText>
          Copyright &copy; 2024 Software Engineering Blueprint
        </FooterText>
        <FooterLinks>
        {
            footerLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href}>
                  {link.name}
                </a>
              </li>
            ))
          }
        </FooterLinks>
      </FooterDiv>
    </StyledFooter>
  )
};

export default Footer
