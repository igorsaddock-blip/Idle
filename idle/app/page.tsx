"use client";

import React, {useEffect, useState} from "react";
import { Upgrades } from "./upgrades";
import { Money } from "./money";

export default function Main(){
  const [dinheiro, setDinheiro] = useState(0);
  const [upgrade, setUpgrade] = useState({
    Fãs: {level: 0, custo: 10},
    Banner: {level: 0, custo: 50},
    Anime: {level: 0, custo: 200}
    });
  const poderDoClique = 1 + upgrade.Anime.level ;
  const rendaPassiva = 0 + upgrade.Fãs.level + upgrade.Banner.level * 5;

  useEffect(() => {
    const timer = setInterval(() => {
      setDinheiro((atual) => atual + rendaPassiva);
    },1000)
    return () => clearInterval(timer);
  }, [rendaPassiva]);

  return (
    <div>
      <Money 
      dinheiroAtual={dinheiro} 
      setDinheiro={setDinheiro}
      poderDoClique={poderDoClique}
      />

      <Upgrades 
      dinheiroAtual={dinheiro} 
      setDinheiro={setDinheiro} 
      upgrade={upgrade}
      setUpgrade={setUpgrade}
      />
    </div>
  );
}

