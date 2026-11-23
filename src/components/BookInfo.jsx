import { BookInfoDiv, BookInfoGlowCircle, BookInfoImg, BookInfoImgDiv, BookInfoSection, BookInfoText } from "./styles/BookInfo.styled";

const BookInfo = () => {
  return (
    <BookInfoSection>
      <BookInfoDiv>
        <BookInfoText>
          “The Software Engineering Blueprint” is crafted for aspiring and seasoned engineers alike, designed to take you from foundational skills to advanced concepts, equipping you with the knowledge and practical abilities essential for a career in tech. This e-book is a complete roadmap, guiding you through the diverse landscape of software engineering with clarity and hands-on learning.
          <br />
          <br />
          Starting with the basics, you’ll explore essential programming languages, the principles of clean code, and best practices in data handling. As you progress, you’ll delve into core concepts of software design and architecture, learning how to structure your projects for scalability, efficiency, and maintainability. The e-book provides clear, step-by-step explanations of various development methodologies (such as Agile and Waterfall), helping you understand how professional engineering teams operate and how projects are managed from start to finish.
          <br />
          <br />
          But it doesn’t stop at coding. “The Software Engineering Blueprint” recognizes that soft skills—like problem-solving, effective communication, and teamwork—are as crucial to success as technical knowledge. That&apos;s why you&apos;ll also find dedicated sections on developing these skills, as well as career advice on building a compelling portfolio, acing technical interviews, and networking effectively in the industry.
          <br />
          <br />
          Every chapter is loaded with practical exercises, mini-projects, and real-world case studies that let you apply what you’re learning immediately, ensuring that you’re not just reading about software engineering but actively practicing it. With an emphasis on building both hard and soft skills, this e-book equips you with a well-rounded toolkit, positioning you to stand out as a skilled and adaptable engineer in the fast-paced tech world.
          <br />
          <br />
          Whether your goal is to secure your first job in tech or advance in your current role, “The Software Engineering Blueprint” is designed to help you succeed, one milestone at a time.
        </BookInfoText>
        <BookInfoImgDiv>
          <BookInfoGlowCircle></BookInfoGlowCircle>
          <BookInfoImg src="./bookcover.svg" alt="book-cover" />
        </BookInfoImgDiv>
      </BookInfoDiv>
    </BookInfoSection>
  )
};

export default BookInfo
