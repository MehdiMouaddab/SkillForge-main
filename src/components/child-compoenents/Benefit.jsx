import { BenefitDescription, BenefitIcon, BenefitSection, BenefitTextDiv, BenefitTitle, IconDiv } from "../styles/Benefit.styled";

const Benefit = ({ icon, title, description, color }) => {
  return (
    <BenefitSection>
      <IconDiv style={{ backgroundColor: `${color}` }}>
        <BenefitIcon>
          {icon}
        </BenefitIcon>
      </IconDiv>
      <BenefitTextDiv>
        <BenefitTitle>{title}</BenefitTitle>
        <BenefitDescription>{description}</BenefitDescription>
      </BenefitTextDiv>
    </BenefitSection>
  )
};

export default Benefit
