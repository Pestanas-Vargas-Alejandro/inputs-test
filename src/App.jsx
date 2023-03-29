import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState({
    input1: "",
    input2: "",
    date: "",
    email: "",
    password: "",
    tel: "",
    color: "",
    number: "",
    range: "",
    checkbox: "",
    datetime: "",
    month: "",
    time: "",
    week: "",
    reset: "",
    file: "",
    hidden: "",
    image: "",
    radio: "",
    search: "",
    url: "",
  });
  const handleInputChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value
    });
    console.log(inputValue);
  }

  return (
    <div className="container text-center mt-5">
      <h1>Formulario (Inputs tests)</h1>
      <div className="inputs-row1 row mt-5">
        <div className="col">
          <label htmlFor="input1"> Nombre : </label>
          <input
            className="form-control mt-2"
            id="input1"
            name="input1"
            onChange={(e) => handleInputChange(e)}
            type="text"
            value={inputValue.input1}
          />
        </div>

        <div className="col">
          <label >
            Apellidos :
            <input
              className="form-control mt-2"
              name="input2"
              onChange={(e) => handleInputChange(e)}
              type="text"
              value={inputValue.input2}
            />
          </label>
        </div>

        <div className="col">
          <label htmlFor="date"> Fecha Nacimiento : </label>
          <input
            className="form-control mt-2"
            id="date"
            name="date"
            onChange={(e) => handleInputChange(e)}
            type="date"
            value={inputValue.date}
          />
        </div>

        <div className="col">
          <label htmlFor="email"> Email : </label>
          <input
            className="form-control mt-2"
            id="email"
            name="email"
            onChange={(e) => handleInputChange(e)}
            type="email"
            value={inputValue.email}
          />
        </div>

        <div className="col">
          <label htmlFor="password"> Contraseña : </label>
          <input
            className="form-control mt-2"
            id="password"
            name="password"
            onChange={(e) => handleInputChange(e)}
            type="password"
            value={inputValue.password}
          />
        </div>
      </div>

      <div className="inputs-row2 row mt-5">
        <div className="col">
          <label htmlFor="tel"> Contacto : </label>
          <input
            className="form-control mt-2"
            id="tel"
            name="tel"
            onChange={(e) => handleInputChange(e)}
            type="tel"
            value={inputValue.tel}
          />
        </div>

        <div className="col">
          <label htmlFor="color"> Color : </label>
          <input
            className="form-control mt-2"
            id="color"
            name="color"
            onChange={(e) => handleInputChange(e)}
            type="color"
            value={inputValue.color}
          />
        </div>

        <div className="col">
          <label htmlFor="number"> Cantidad : </label>
          <input
            className="form-control mt-2"
            id="number"
            name="number"
            onChange={(e) => handleInputChange(e)}
            type="number"
            value={inputValue.number}
          />
        </div>

        <div className="col">
          <label htmlFor="range"> Rango de precio : </label>
          <input
            id="range"
            name="range"
            onChange={(e) => handleInputChange(e)}
            type="range"
            value={inputValue.range}
          />
        </div>

        <div className="col">
          <label htmlFor="checkbox"> Envio express : </label>
          <input
            id="checkbox"
            name="checkbox"
            onChange={(e) => handleInputChange(e)}
            type="checkbox"
            value={inputValue.checkbox}
          />
        </div>
      </div>

      <div className="inputs-row3 row mt-5">
        <div className="col">
          <label htmlFor="datetime"> Fecha y hora de entrega : </label>
          <input
            className="form-control mt-2"
            id="datetime"
            name="datetime"
            onChange={(e) => handleInputChange(e)}
            type="datetime-local"
            value={inputValue.datetime}
          />
        </div>

        <div className="col">
          <label htmlFor="month"> Mes: </label>
          <input
            className="form-control mt-2"
            id="month"
            name="month"
            onChange={(e) => handleInputChange(e)}
            type="month"
            value={inputValue.month}
          />
        </div>

        <div className="col">
          <label htmlFor="time"> Hora : </label>
          <input
            className="form-control mt-2"
            id="time"
            name="time"
            onChange={(e) => handleInputChange(e)}
            type="time"
            value={inputValue.time}
          />
        </div>

        <div className="col">
          <label htmlFor="week"> Semana: </label>
          <input
            className="form-control mt-2"
            id="week"
            name="week"
            onChange={(e) => handleInputChange(e)}
            type="week"
            value={inputValue.week}
          />
        </div>

        <div className="col">
          <label htmlFor="file"> Seleccionar documentos : </label>
          <input
            className="form-control mt-2"
            id="file"
            name="file"
            onChange={(e) => handleInputChange(e)}
            type="file"
            value={inputValue.file}
          />
        </div>
      </div>

      <div className="inputs-row4 row mt-5">
        <div className="col">
          <label htmlFor="reset"> Restablecer valores: </label>
          <input
            id="reset"
            name="reset"
            onChange={(e) => handleInputChange(e)}
            type="reset"
            value={inputValue.reset}
          />
        </div>

        <div className="col">
          <label htmlFor="hidden"> ID_CLIENTE: </label>
          <input
            className="form-control mt-2"
            id="hidden"
            name="hidden"
            onChange={(e) => handleInputChange(e)}
            type="hidden"
            value={inputValue.hidden}
          />
        </div>

        <div className="col">
          <label htmlFor="image"> Seleccionar imagenes : </label>
          <input
            id="image"
            name="image"
            onChange={(e) => handleInputChange(e)}
            type="image"
            value={inputValue.image}
          />
        </div>

        <div className="col">
          <label htmlFor="radio"> Terminos y condiciones: </label>
          <input
            id="radio"
            name="radio"
            onChange={(e) => handleInputChange(e)}
            type="radio"
            value={inputValue.radio}
          />
        </div>

        <div className="col">
          <label htmlFor="search"> Buscar : </label>
          <input
            className="form-control mt-2"
            id="search"
            name="search"
            onChange={(e) => handleInputChange(e)}
            type="search"
            value={inputValue.search}
          />
        </div>

        <div className="col">
          <label htmlFor="url"> Buscar URL : </label>
          <input
            className="form-control mt-2"
            id="url"
            name="url"
            onChange={(e) => handleInputChange(e)}
            type="url"
            value={inputValue.url}
          />
        </div>
      </div>

    </div>
  )
}

export default App