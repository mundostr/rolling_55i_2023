/**
 * Utilizamos la sintaxis import de ES6
 * En este caso estamos importando un objeto useState del propio React, pronto veremos cómo funciona,
 * también un par de logos y una hoja de estilos
 */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

/**
 * La declaración de un componente se puede realizar de un par de formas, la más práctica
 * y actual es a través de una función.
 */
function App() {
  const [count, setCount] = useState(0);

  /**
   * En lugar de retornar un valor o un objeto, como estamos habituados a ver en una función,
   * se retorna en este caso un paquete de código JSX que se renderizará al momento de llamar
   * al componente.
   */
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite junto con React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
          <ul>
            <li>Opción 1</li>
            <li>Opción 2</li>
            <li>Opción 3</li>
          </ul>
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

/**
 * Exportamos simplemente lo definido, el componente puede ser llamado utilizando su nombre en formato de etiqueta,
 * (línea 17 en main.jsx)
 */
export default App;
