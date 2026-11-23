import { ContentDiv, ContentButton, ContentText, ContentSpan, ContentAccoDiv, ContentP } from "../styles/Content.styled";
import { useState } from "react";

const Content = ({ title, content, index }) => {

  const [activeIndex, setActiveIndex] = useState(null);


  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <ContentDiv key={index}>
      {/* Accordion Header */}
      <ContentButton
        onClick={() => toggleAccordion(index)}
      >
        <ContentText>{title}</ContentText>
        <ContentSpan>
          {activeIndex === index ? "-" : "+"}
        </ContentSpan>
      </ContentButton>

      {/* Accordion Content */}
      {activeIndex === index && (
        <ContentAccoDiv>
          <ContentP>{content}</ContentP>
        </ContentAccoDiv>
      )}
    </ContentDiv>
  )
};

export default Content