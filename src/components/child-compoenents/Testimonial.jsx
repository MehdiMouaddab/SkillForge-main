import { StarIcon } from "@heroicons/react/16/solid";
import { TestimonialAvatarDiv, TestimonialAvatarImg, TestimonialAvatarInfoDiv, TestimonialAvatarName, TestimonialAvatarRatingDiv, TestimonialDiv, TestimonialFeedbackP } from "../styles/Testimonials.styled";

const Testimonial = ({ name, avatar, feedback, rating = 5 }) => {
  return (
    <TestimonialDiv
      className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      {/* Avatar */}
      <TestimonialAvatarDiv className="flex items-center gap-2">
        <TestimonialAvatarImg
          src={avatar}
          alt={`${name}'s avatar`}
          className="w-16 h-16 rounded-full object-cover"
        />
        <TestimonialAvatarInfoDiv className="flex flex-col">
          {/* Name */}
          <TestimonialAvatarName className="text-lg font-semibold text-gray-800 font-epilogue">
            {name}
          </TestimonialAvatarName>
          {/* Rating */}
          <TestimonialAvatarRatingDiv className="flex items-center space-x-1">
            {Array.from({ length: rating }).map((_, index) => (
              <StarIcon key={index} color="yellow" />
            ))}
          </TestimonialAvatarRatingDiv>
        </TestimonialAvatarInfoDiv>
      </TestimonialAvatarDiv>
      {/* Feedback */}
      <TestimonialFeedbackP className="text-gray-600 mt-3 font-poppins">
        {feedback}
      </TestimonialFeedbackP>
    </TestimonialDiv>
  )
};

export default Testimonial
