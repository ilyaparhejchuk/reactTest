import { useState } from "react";
import "./PlayToWinSection.css";
import Games from "./gameSection/Games";

export default function PlayToWinSection() {
  const [isSubmitted, setIsSubmitted] = useState<any>(false);
  const [inputValue, setInputValue] = useState<any>("");
  const [error, setError] = useState<any>(null);

  const handleApply = () => {
    if (inputValue.trim() === "") {
      setError("Enter the code!");
    } else {
      setError(null);
      setIsSubmitted(true);
    }
  };

  return (
    <div className="play-to-win-section">
      {!isSubmitted && (
        <InputCode
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleApply={handleApply}
        />
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {isSubmitted && <Games />}
    </div>
  );
}

function InputCode({ inputValue, setInputValue, handleApply }: any) {
  const handleChange = (e: any) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="input-code-section">
      <input
        className="input-code"
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter your code"
      />
      <br />
      <button className="apply-button" onClick={handleApply}>
        Apply code
      </button>
    </div>
  );
}
