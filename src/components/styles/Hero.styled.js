import tw from 'tailwind-styled-components'

export const HeroSection = tw.section`
  w-[85%]
  mx-auto
  mt-7
  md:mt-11
  xl:mt-16
  flex
  flex-col
  items-center
  text-center
  font-epilogue
`

export const FirstTitle = tw.h1`
  text-xl
  font-bold
  text-[#008080]
  md:text-3xl
  lg:text-5xl
  xl:text-7xl
`
export const SecondTitle = tw.h1`
  text-sm
  font-bold
  md:text-lg
  lg:text-xl
  xl:text-2xl
  md:max-w-[80%]
  lg:max-w-[75%]
  xl:max-w-[50%]
`

export const HeroButton = tw.button`
  mt-5
  text-base
  font-medium
  uppercase
  font-poppins
  px-4
  py-2
  rounded-xl
  bg-[#008080]
  text-white
  xl:text-lg
`