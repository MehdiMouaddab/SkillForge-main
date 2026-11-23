import tw from "tailwind-styled-components";

export const BenefitsSection = tw.section`
  w-[90%]
  lg:w-[75%]
  mx-auto
  mt-10
`

export const BenefitsTitle = tw.h2`
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

export const BenefitsDescription = tw.p`
  text-gray-500
  text-center
  text-sm
  md:text-base
  lg:text-lg
  max-w-[573px]
  mx-auto
  font-poppins
`

export const BenefitsDiv = tw.div`
  grid
  gap-8
  grid-cols-1
  md:grid-cols-2
  lg:grid-cols-3
  my-10
`