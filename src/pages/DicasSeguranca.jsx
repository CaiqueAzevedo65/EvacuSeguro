import React from 'react';
import '../styles/pages.css';

export default function DicasSeguranca() {
  const dicas = [
    {
      titulo: "Antes da Emergência",
      itens: [
        "Tenha um kit de emergência com água, alimentos não perecíveis, remédios e documentos importantes.",
        "Conheça os sinais de alerta da sua região e os canais de comunicação oficiais.",
        "Defina um ponto de encontro seguro para sua família em caso de separação.",
        "Mantenha uma lista de contatos de emergência em local visível."
      ]
    },
    {
      titulo: "Durante a Emergência",
      itens: [
        "Mantenha a calma e siga as instruções das autoridades locais.",
        "Desligue a energia elétrica e o gás antes de sair de casa, se possível.",
        "Evite áreas alagadas, mesmo que pareçam rasas.",
        "Use calçados resistentes para se proteger de objetos cortantes."
      ]
    },
    {
      titulo: "Após a Emergência",
      itens: [
        "Retorne para casa apenas quando as autoridades liberarem.",
        "Cuidado com fios elétricos soltos e estruturas danificadas.",
        "Ferva a água antes de consumir até que as autoridades confirmem que é seguro.",
        "Ajude vizinhos idosos ou com mobilidade reduzida, se possível."
      ]
    }
  ];

  return (
    <div className="page-container">
      <div className="container">
        <h1 className="section-title text-center">Dicas de Segurança</h1>
        
        <div className="row g-4">
          {dicas.map((categoria, index) => (
            <div key={index} className="col-md-4">
              <div className="card card-hover h-100 shadow-soft">
                <div className="card-header">
                  <h5 className="mb-0">{categoria.titulo}</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    {categoria.itens.map((item, i) => (
                      <li key={i} className="list-group-item">
                        <i className="bi bi-check-circle text-success"></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="card card-hover mt-5 shadow-soft">
          <div className="card-body">
            <h2 className="section-title text-center">Números de Emergência</h2>
            <div className="row">
              <div className="col-md-3 mb-4">
                <div className="emergency-card">
                  <i className="bi bi-heart-pulse text-danger emergency-icon"></i>
                  <h5 className="emergency-title">SAMU</h5>
                  <p className="emergency-number">192</p>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className="emergency-card">
                  <i className="bi bi-shield-check text-primary emergency-icon"></i>
                  <h5 className="emergency-title">Defesa Civil</h5>
                  <p className="emergency-number">199</p>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className="emergency-card">
                  <i className="bi bi-fire text-danger emergency-icon"></i>
                  <h5 className="emergency-title">Bombeiros</h5>
                  <p className="emergency-number">193</p>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className="emergency-card">
                  <i className="bi bi-shield-exclamation text-warning emergency-icon"></i>
                  <h5 className="emergency-title">Polícia Militar</h5>
                  <p className="emergency-number">190</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
