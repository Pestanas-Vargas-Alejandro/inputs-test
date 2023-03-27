import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState({
    input1: "",
    input2: "",
  });
  const handleInputChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value
    });
    console.log(inputValue);
  }

  return (
    <div className="input-1 mt-5" style={{ textAlign: "center" }}>
      <h1>Input Test</h1>
      <div className="input-1 mt-3">
        <label htmlFor="input1">Introduce Valor 1 : </label>
        <input
          id="input1"
          name="input1"
          onChange={(e) => handleInputChange(e)}
          type="text"
          value={inputValue.input1}
        />
      </div>
      
      <div className="input-2 mt-3">
        <label>
          Introduce Valor 2 :
          <input
            name="input2"
            onChange={(e) => handleInputChange(e)}
            type="text"
            value={inputValue.input2}
          />
        </label>
      </div>
    </div>
  )
}

export default App