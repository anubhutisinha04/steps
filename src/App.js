import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  //Create the callback functions in the class itself.

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }

  function handlePrev() {
    if (step > 1) setStep((s) => s - 1);
  }

  // function close() {
  //   isOpen ? setIsOpen(false) : setIsOpen(true);
  // }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active " : ""}>1</div>
            <div className={step >= 2 ? "active " : ""}>2</div>
            <div className={step >= 3 ? "active " : ""}>3</div>
          </div>

          <p className="message">
            Step {step} : {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#ffffff" }}
              onClick={() => handlePrev()}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#ffffff" }}
              onClick={() => handleNext()}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
