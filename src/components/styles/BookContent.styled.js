import tw from "tailwind-styled-components";

export const BookContentSection = tw.section`
  w-[90%]
  lg:w-[75%]
  mx-auto
  mt-10
`

export const BookContentTitle = tw.h2`
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

export const BookContentDescription = tw.p`
  text-gray-500
  text-center
  text-sm
  md:text-base
  lg:text-lg
  max-w-[573px]
  mx-auto
  font-poppins
`

export const BookContentDiv = tw.div`
  space-y-4
  max-w-4xl
  mx-auto
  mt-10
`