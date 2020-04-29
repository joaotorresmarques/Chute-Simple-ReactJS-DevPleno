import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [estado, setEstado] = useState("Entrada");
  const [palpite, setPalpite] = useState(150);
  const [numPalpites, setNumPalpites] = useState(1);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarJogo = () => {
    return setEstado("Rodando");
    setMin(0);
    setMax(300);
    setNumPalpites(1);
    setPalpite(150);
  };

  const menor = () => {
    setNumPalpites(numPalpites + 1);
    setMax(palpite);
    const proxPalpite = parseInt(palpite - min) / 2 + min;
    setPalpite(proxPalpite);
  };

  const maior = () => {
    setNumPalpites(numPalpites + 1);
    setMin(palpite);
    const proxPalpite = parseInt((palpite + min) / 2) + palpite;
    setPalpite(proxPalpite);
  };

  const acertou = () => {
    return setEstado("Fim");
  };

  if (estado === "Entrada") {
    return <button onClick={iniciarJogo}>Começar a jogar </button>;
  } else if (estado === "Fim") {
    return (
      <div>
        <p>
          Acerteeeeeeei o numero {palpite} com {numPalpites} chutes
        </p>

        <button onClick={iniciarJogo}>Começar novo jogo</button>
      </div>
    );
  }
  return (
    <div className="App">
      <p>O seu palpite é: {palpite} ?</p>
      <p>
        Min {min} e Max {max}
      </p>
      <button onClick={menor}>Menor</button>
      <button onClick={acertou}>Acertou</button>
      <button onClick={maior}>Maior</button>
    </div>
  );
}
