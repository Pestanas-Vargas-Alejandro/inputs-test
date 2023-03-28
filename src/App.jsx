import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState({
    input1: "",
    input2: "",
    password: "",
    checkbox: "",
    color: "",
    date: "",
    datetime: "",
    email: "",
    hidden: "",
    image: "",
    month: "",
    number: "",
    radio: "",
    range: "",
    reset: "",
    search: "",
  });
  const handleInputChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value
    });
    console.log(inputValue);
  }

  return (
    <div className="inputs mt-5">
      <h1>Input Test</h1>
      <h4>Text</h4>
      <div className="input-text">
        <label htmlFor="input1">Introduce Valor 1 : </label>
        <input
          id="input1"
          name="input1"
          onChange={(e) => handleInputChange(e)}
          type="text"
          placeholder="e.j. Arturo"
          value={inputValue.input1}
        />
        <br /><br />
        <label>
          Introduce Valor 2 :
          <input
            name="input2"
            onChange={(e) => handleInputChange(e)}
            type="text"
            placeholder="e.j. Lopez Gonzalez"
            value={inputValue.input2}
          />
        </label>
      </div>

      <div className="others mt-2">
        <h4>Password</h4>
        <label htmlFor="password">Contraseña : </label>
        <input
          id="password"
          name="password"
          onChange={(e) => handleInputChange(e)}
          type="password"
          value={inputValue.password}
        />

        <h4>Checkbox</h4>
        <label htmlFor="password">Acepto Terminos y Condiciones </label>
        <input
          id="checkbox"
          name="checkbox"
          onChange={(e) => handleInputChange(e)}
          type="checkbox"
          value={inputValue.checkbox}
        />

        <h4>Color</h4>
        <label htmlFor="color">Seleccione un color : </label>
        <input
          id="color"
          name="color"
          onChange={(e) => handleInputChange(e)}
          type="color"
          value={inputValue.color}
        />

        <h4>Date</h4>
        <label htmlFor="color">Ingrese Fecha Nacimiento: </label>
        <input
          id="date"
          name="date"
          onChange={(e) => handleInputChange(e)}
          type="date"
          value={inputValue.date}
        />

        <h4>Datetime-local</h4>
        <label htmlFor="color">Ingrese Fecha y Hora: </label>
        <input
          id="datetime"
          name="datetime"
          onChange={(e) => handleInputChange(e)}
          type="datetime-local"
          value={inputValue.datetime}
        />

        <h4>Email</h4>
        <label htmlFor="email">Ingrese Email: </label>
        <input
          id="email"
          name="email"
          onChange={(e) => handleInputChange(e)}
          type="email"
          value={inputValue.email}
        />

        <h4>Hidden</h4>
        <label htmlFor="hidden">Ingrese id: </label>
        <input
          id="hidden"
          name="hidden"
          onChange={(e) => handleInputChange(e)}
          type="hidden"
          value={inputValue.hidden}
        />

        <h4>Image</h4>
        <label htmlFor="image">Ingrese imagen: </label>
        <input
          id="image"
          name="image"
          onChange={(e) => handleInputChange(e)}
          type="image"
          value={inputValue.image}
        />

        <h4>Month</h4>
        <label htmlFor="month">Ingrese mes: </label>
        <input
          id="month"
          name="month"
          onChange={(e) => handleInputChange(e)}
          type="month"
          value={inputValue.month}
        />

        <h4>Number</h4>
        <label htmlFor="number">Cantidad: </label>
        <input
          id="number"
          name="number"
          onChange={(e) => handleInputChange(e)}
          type="number"
          value={inputValue.number}
        />

        <h4>Radio</h4>
        <label htmlFor="radio">Agregar: </label>
        <input
          id="radio"
          name="radio"
          onChange={(e) => handleInputChange(e)}
          type="radio"
          value={inputValue.radio}
        />

        <h4>Range</h4>
        <label htmlFor="range">Precio: </label>
        <input
          id="range"
          name="range"
          onChange={(e) => handleInputChange(e)}
          type="range"
          value={inputValue.range}
        />

        <h4>Reset</h4>
        <label htmlFor="reset">Borrar Selección: </label>
        <input
          id="reset"
          name="reset"
          onChange={(e) => handleInputChange(e)}
          type="reset"
          value={inputValue.reset}
        />

        <h4>Search</h4>
        <label htmlFor="search">Buscar: </label>
        <input
          id="search"
          name="search"
          onChange={(e) => handleInputChange(e)}
          type="search"
          value={inputValue.search}
        />

      </div>
    </div>
  )
}

export default App