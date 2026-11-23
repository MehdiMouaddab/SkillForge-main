import { benefitsData } from "../constants";
import Benefit from "./child-compoenents/Benefit";
import { BenefitsDescription, BenefitsDiv, BenefitsSection, BenefitsTitle } from "./styles/Benefits.styled";

const Benefits = () => {
  return (
    <BenefitsSection>
      <BenefitsTitle>
        Discover Key Benefits Of The Software Enginnering Blueprint
      </BenefitsTitle>
      <BenefitsDescription>
        Explore the tools and resources that make learning effective, efficient, and enjoyable for all skill levels.
      </BenefitsDescription>

      <BenefitsDiv>
        {benefitsData.map((benefit, index) => (
          <Benefit
            key={index}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
            color={benefit.color}
          />
        ))}
      </BenefitsDiv>
    </BenefitsSection>
  )
};

export default Benefits
