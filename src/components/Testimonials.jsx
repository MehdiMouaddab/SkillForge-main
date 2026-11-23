import { testimonialsData } from "../constants";
import Testimonial from "./child-compoenents/Testimonial";
import { TestimonialsDescription, TestimonialsDiv, TestimonialsSection, TestimonialsTitle } from "./styles/Testimonials.styled";

const Testimonials = () => {
  return (
    <TestimonialsSection className="w-[90%] lg:w-[75%] mx-auto mt-10">
      <TestimonialsTitle className="text-xl md:text-3xl lg:text-5xl font-bold text-center font-epilogue max-w-full lg:max-w-[1010px] mx-auto">
      What Others Said About This Book
      </TestimonialsTitle>
      <TestimonialsDescription className="text-gray-500 text-center text-sm md:text-base lg:text-lg max-w-[573px] mx-auto font-poppins">
      Discover why readers love this guide to software engineering. Here's what they have to say:
      </TestimonialsDescription>
      <TestimonialsDiv className="grid gap-8 grid-cols-1 md:grid-cols-2 my-10">
        {
          testimonialsData.map((testimonial, index) => (
            <Testimonial key={index} name={testimonial.name} feedback={testimonial.feedback} avatar={testimonial.avatar} />
          ))
        }
      </TestimonialsDiv>
    </TestimonialsSection>
  )
};

export default Testimonials
