import tw from "tailwind-styled-components";

export const TestimonialsSection = tw.section`
  w-[90%]
  lg:w-[75%]
  mx-auto
  mt-10
`

export const TestimonialsTitle = tw.h2`
  text-xl
  md:text-3xl
  lg:text-5xl
  font-bold
  text-center
  font-epilogue
  max-w-full
  lg:max-w-[1010px]
  mx-auto
`

export const TestimonialsDescription = tw.p`
  text-gray-500
  text-center
  text-sm
  md:text-base
  lg:text-lg
  max-w-[573px]
  mx-auto
  font-poppins
`

export const TestimonialsDiv = tw.div`
  grid
  gap-8
  grid-cols-1
  md:grid-cols-2
  my-10
`

export const TestimonialDiv = tw.div`
  p-6
  bg-white
  rounded-lg
  shadow-md
  hover:shadow-lg
  transition-shadow
  duration-300
`

export const TestimonialAvatarDiv = tw.div`
  flex
  items-center
  gap-2
`

export const TestimonialAvatarImg = tw.img`
  w-16
  h-16
  rounded-full
  object-cover
`

export const TestimonialAvatarInfoDiv = tw.div`
  flex
  flex-col
`

export const TestimonialAvatarName = tw.h3`
  text-lg
  font-semibold
  text-gray-800
  font-epilogue
`

export const TestimonialAvatarRatingDiv = tw.div`
  flex
  items-center
  space-x-1
`

export const TestimonialFeedbackP = tw.p`
  text-gray-600
  mt-3
  font-poppins
`