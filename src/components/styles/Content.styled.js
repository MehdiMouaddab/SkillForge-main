import tw from "tailwind-styled-components";

export const ContentDiv = tw.div`
  border
  rounded-lg
  overflow-hidden
  shadow-sm
  bg-[#008080]
`

export const ContentButton = tw.button`
  w-full
  flex
  items-center
  justify-between
  px-6
  py-4
  bg-[#008080]
  transition
`

export const ContentText = tw.h2`
  text-lg
  font-semibold
  text-white
  font-epilogue
`

export const ContentSpan = tw.span`
  text-3xl
  text-white
`

export const ContentAccoDiv = tw.div`
  px-6
  py-4
  bg-white
`

export const ContentP = tw.p`
  text-gray-600
  font-poppins
`