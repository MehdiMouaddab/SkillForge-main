import tw from "tailwind-styled-components";


export const BenefitSection = tw.div`
  flex
  flex-col
  gap-4
  items-center
  rounded-lg
  p-6
`

export const IconDiv = tw.div`
  p-2
  rounded-md
  text-3xl
`

export const BenefitIcon = tw.div`
  size-8
  xl:size-10
  text-white
`
export const BenefitTextDiv = tw.div`
  flex
  flex-col
  space-y-2
  font-epilogue
  text-center
`

export const BenefitTitle = tw.h3`
  text-xl
  xl:text-2xl
  font-semibold
`

export const BenefitDescription = tw.p`
  text-gray-500
  text-sm
  xl:text-base
`