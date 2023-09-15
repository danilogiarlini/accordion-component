import { useState } from "react";
import "./AccordionItem.css";

const AccordionItem = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const infoHandler = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <div>
        {items.map((item, index) => (
          <div key={index} className="item">
            <div onClick={() => infoHandler(index)}>{item.title}</div>
            {index === activeIndex && <p>{item.content}</p>}
          </div>
        ))}
      </div>
    </>
  );
};

export default AccordionItem;
