import tw from 'tailwind-styled-components'

export const StyledHeader = tw.header`
  flex
  flex-col
  items-center
  md:flex-row
  md:justify-between
  py-5
  w-[85%]
  mx-auto
  font-poppins
`
export const LogoImg = tw.img`
  h-16
  xl:h-20
`
export const HeaderButton = tw.button`
  flex
  items-center
  gap-2
  mt-5
  px-4
  py-2
  text-sm
  md:text-base
  xl:text-xl
  font-medium
  text-[#008080]
  bg-[#66CCCC]/30
  rounded-lg
`

