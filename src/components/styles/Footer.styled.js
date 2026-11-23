import tw from 'tailwind-styled-components'

export const StyledFooter = tw.footer`
  bg-[#008080]
`

export const FooterDiv = tw.div`
  py-5
  w-[85%]
  mx-auto
  flex
  flex-col
  items-center
  lg:flex-row
  lg:justify-between
`

export const FooterText = tw.p`
  text-white
  text-center
  text-sm
  md:text-base
  font-poppins
`

export const FooterLinks = tw.ul`
  flex
  flex-col
  gap-1
  text-center
  md:flex-row
  md:gap-3
  lg:gap-5
  text-white
  mt-5
  md:mt-0
  font-poppins
  text-sm
  md:text-base
`