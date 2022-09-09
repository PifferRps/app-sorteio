import React, { useState } from "react";
import styles from "./app.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Display } from "./Components/Display";
import { Display2 } from "./Components/Display2";
import { numeroAleatorio } from "./Helpers/Ramdom";

function App() {
  const [numMax, setNumMax] = useState<number>(0);
  const [numMin, setNumMin] = useState<number>(0);
  const [sorteado, setSorteado] = useState<number[]>([]);

  React.useEffect(() => {}, [sorteado]);

  const Sortear = () => {
    if (numMax && numMin) {
      setSorteado([...sorteado, numeroAleatorio(numMax, numMin)]);
    } else {
      alert("Digite todos os campos");
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h1>Sorteio de Números</h1>
          <p>Inicio</p>
          <input
            type="number"
            placeholder="Digite o número de Inicio"
            onChange={(e) => setNumMin(parseFloat(e.target.value))}
          />
          <p>Fim</p>
          <input
            type="number"
            placeholder="Digite o número de Fim"
            onChange={(e) => setNumMax(parseFloat(e.target.value))}
          />
          <div className={styles.checkbox}>
            <input type="checkbox" />
            <span className={styles.span}>
              Pode Sortear 2x o mesmo número?{" "}
            </span>
          </div>
          <button onClick={Sortear}>Sortear</button>
        </div>
        <div className={styles.right}>
          <div className={styles.display}>
            <Display numeroSorteado={sorteado} />
          </div>
          <div className={styles.display2}>
            <Display2 numeroSorteado={sorteado} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
