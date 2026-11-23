import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { HeaderButton, LogoImg, StyledHeader } from "./styles/Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <LogoImg src="./logo.svg" alt="logo"/>
      <HeaderButton>
        <span>Download Now</span>
        <ArrowDownTrayIcon className="size-5 md:size-8 xl:size-10"/>
      </HeaderButton>
    </StyledHeader>
  )
};

export default Header
