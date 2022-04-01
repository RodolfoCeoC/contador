import { useState } from "react";

function App() {

  const [cuenta, setCuenta] = useState(0);


  const handleClick = () => {
    setCuenta(cuenta + 1)
   //Aumentamos la cuenta de 1 en 1
  }

  const handleDec = () => {
    setCuenta(cuenta - 1)
   //Disminuimos la cuenta de 1 en 1
  }

  const handleClear = () => {
    setCuenta(0)
  //Reiniciamos el contador a 0
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
