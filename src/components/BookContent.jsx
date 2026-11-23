import { bookContentData } from "../constants";
import Content from "./child-compoenents/Content";
import { BookContentDescription, BookContentDiv, BookContentSection, BookContentTitle } from "./styles/BookContent.styled";

const BookContent = () => {
  return (
    <BookContentSection className="w-[90%] lg:w-[75%] mx-auto mt-10">
      <BookContentTitle className="text-xl md:text-3xl lg:text-5xl font-bold text-center font-epilogue max-w-full lg:max-w-[1010px] mx-auto">
        What You'll Discover in This Book
      </BookContentTitle>
      <BookContentDescription className="text-gray-500 text-center text-sm md:text-base lg:text-lg max-w-[573px] mx-auto font-poppins">
        Dive into the essential topics and practical knowledge you'll gain from this comprehensive guide to software engineering.
      </BookContentDescription>
      <BookContentDiv className="space-y-4 max-w-4xl mx-auto mt-10">
        {bookContentData.map((item, index) => (
          <Content title={item.title} content={item.content} key={index} index={index} />
        ))}
      </BookContentDiv>
    </BookContentSection>
  )
};

export default BookContent
