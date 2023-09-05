import React from "react";

interface IFaq {
  question: string;
  answer: string;
}

const Faq: React.FC<IFaq> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const answerPanel = React.useRef<HTMLHeadingElement>(null);
  const altOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="component-faq">
      <div className="component-faq__question" onClick={altOpen}>
        <div className="component-faq__question__btn">{isOpen ? "-" : "+"}</div>
        <div className="component-faq__question__text">{question}</div>
      </div>
      <div
        className="component-faq__answer"
        ref={answerPanel}
        style={{
          maxHeight: isOpen
            ? answerPanel.current
              ? answerPanel.current.scrollHeight
              : 0
            : "0px",
        }}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Faq;
