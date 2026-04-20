"use client";

import React from "react";

type tipoDeUpgrade = 'Fãs' | 'Banner' | 'Anime';

interface infoUpgrade{
    custo: number;
    level: number;
}

type EstadoDosUpgrades = {
    [key in tipoDeUpgrade]: infoUpgrade;
}

interface UpgradesProps{
  dinheiroAtual: number;
  setDinheiro: React.Dispatch<React.SetStateAction<number>>;
  upgrade: EstadoDosUpgrades;
  setUpgrade: React.Dispatch<React.SetStateAction<EstadoDosUpgrades>>;
}

export function Upgrades({dinheiroAtual, setDinheiro, upgrade, setUpgrade}: UpgradesProps){


  const comprarUpgrade = (nomeDoUpgrade: tipoDeUpgrade) =>{
    const upgradeClicado = upgrade[nomeDoUpgrade];

    if (dinheiroAtual >= upgradeClicado.custo){
      setDinheiro(dinheiroAtual - upgradeClicado.custo);
      setUpgrade((estadoAtual) => {
        return{
          ...estadoAtual,
          [nomeDoUpgrade]:{
            level: estadoAtual[nomeDoUpgrade].level + 1,
            custo: Math.floor(estadoAtual[nomeDoUpgrade].custo * 1.5)
          }
        };
      })
    }
    else{
      alert("Dinheiro insuficiente!")
    }}

return (
    <div style={{ padding: '20px', border: '1px solid #e61f1f', maxWidth: '400px', margin: '0 auto' }}>
      <h3 style={{ textAlign: 'center' }}>Status</h3>
      
      {/* Botão 1 */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
        <span>Passive income 1 (Lvl {upgrade.Fãs.level})</span>
        <button 
          onClick={() => comprarUpgrade('Fãs')}
        >
          Comprar ($ {upgrade.Fãs.custo})
        </button>
      </div>

      {/* Botão 2 */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
        <span>Passive income 2 (Lvl {upgrade.Banner.level})</span>
        <button 
          onClick={() => comprarUpgrade('Banner')}
        >
          Comprar ($ {upgrade.Banner.custo})
        </button>
      </div>

      {/* Botão 3 */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>Work efficiency (Lvl {upgrade.Anime.level})</span>
        <button 
          onClick={() => comprarUpgrade('Anime')}
        >
          Comprar ($ {upgrade.Anime.custo})
        </button>
      </div>
    </div>
  );
}