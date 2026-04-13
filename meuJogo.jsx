import React, { useState } from 'react';

function JogoIdle() {
  // Criamos um estado chamado 'dinheiro' que começa em 0
  const [dinheiro, setDinheiro] = useState(0);

  // Função para aumentar o dinheiro
  const handleClique = () => {
    setDinheiro(dinheiro + 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Meu Jogo Idle</h1>
      <p>Dinheiro: R$ {dinheiro}</p>
      
      {/* O botão HTML dentro do React */}
      <button 
        onClick={handleClique} 
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
      >
        Trabalhar (Clique!)
      </button>
    </div>
  );
}

export default JogoIdle;