import { useState } from "react";

function App() {

  const [cuenta, setCuenta] = useState(0);
  const [paso, setpaso] = useState(1);

  const handleClick = () => {
    setCuenta(cuenta + paso)
   //Aumentamos la cuenta de 1 en 1
  }

  const handleDec = () => {
    setCuenta(cuenta - paso)
   //Disminuimos la cuenta de 1 en 1
  }

  const handleClear = () => {
    setCuenta(0)
    setpaso(1)
  //Reiniciamos el contador a 0
  }

  const handleInputChange = (event) => {
    setpaso(Number(event.target.value))
    if (isNaN(event.target.value))
    return;
   
  }

  return (
    <div className="App">
 <h3 className="text-center">Contador</h3>
 <hr />
 <h2 className="text-center">{cuenta}</h2>
 <hr />
 <div style={{display: "flex",
  justifyContent: "flex-end",
  marginRight: "5px",
  justifyContent:"center",
  alignItems: "center",
  }}>

    <label>
      Paso

      <input id="paso" name="paso" type="text" onChange={handleInputChange} value={paso} style={{marginLeft:"5px", width:"60px"}} />
    
    </label>

<div class="btn-group" role="group" aria-label="Basic mixed styles example">
  <button type="button" class="btn btn-danger"
  onClick={handleClick}>Up</button>

  <button type="button" class="btn btn-warning"
  onClick={handleClear}>Clear</button>

  <button type="button" class="btn btn-success"
  onClick={handleDec}>Down</button>

</div>

 </div>

    </div>
  );
}

export default App;
