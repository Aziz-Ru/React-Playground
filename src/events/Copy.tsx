import { useRef, useState } from "react";

const Copy = () => {
  const pRef = useRef<HTMLParagraphElement>(null);
  const [text, setText] = useState("");

  // navigator.clipboard.writeText("Hello, World!");
  // copy text to clipboard
  
  const handleCopy = () => {
    if (pRef.current) {
      const textCopy = pRef.current.textContent || "";
      navigator.clipboard
        .writeText(textCopy)
        .then(() => {
          alert("Text copied to clipboard");
        })
        .catch(() => {
          alert("Failed to copy text to clipboard");
        });
    }
  };
  return (
    <div>
      <button onClick={handleCopy}>Copy</button>
      <p
        ref={pRef}
        onMouseDown={(e: React.MouseEvent<HTMLParagraphElement>) => {
          e.preventDefault();
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
        repudiandae pariatur nihil ut? Omnis itaque, minus nemo nulla quam ut
        vel numquam dolorum est perferendis doloribus error non, deleniti ad!
      </p>
      <textarea
        onSelect={() => {
          const selectionText = window.getSelection();
          setText(selectionText ? selectionText.toString() : "");
        }}
        rows={20}
        cols={20}
      />
      <p>{text}</p>
    </div>
  );
};

export default Copy;
