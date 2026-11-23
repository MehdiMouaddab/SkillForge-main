import tw from "tailwind-styled-components";

export const BookInfoSection = tw.section`
  w-full
  bg-[#008080]
  px-6
  py-5
  lg:px-12
  lg:py-10
  mt-10
`

export const BookInfoDiv = tw.div`
  flex
  flex-col
  gap-10
  md:items-center
  md:justify-between
  md:flex-row
  w-full
`

export const BookInfoText = tw.p`
  font-poppins
  text-gray-100
  text-sm
  md:text-base
  lg:text-lg
  font-semibold
  w-full
`

export const BookInfoImgDiv = tw.div`
  hidden
  w-full
  relative
  lg:flex
  items-center
`

export const BookInfoGlowCircle = tw.div`
  hidden
  md:block
  size-[500px]
  bg-[#66CCCC]/30
  rounded-full
  absolute
  top-1/2
  left-1/2
  transform
  -translate-x-1/2
  -translate-y-1/2
  blur-[1rem]
`

export const BookInfoImg = tw.img`
  h-fit
  md:h-[650px]
  md:absolute
  md:top-1/2
  md:left-1/2
  md:transform
  md:-translate-x-1/2
  md:-translate-y-1/2
`