import React from 'react';
import '../styles/pages.css';

export default function RotasSeguras() {
  return (
    <div className="page-container">
      <div className="container py-5">
        <h1 className="text-center mb-5">Rotas Seguras</h1>
        
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card shadow-sm mb-5">
              <div className="card-body p-4">
                <div className="map-placeholder d-flex align-items-center justify-content-center" style={{height: '400px', backgroundColor: '#f8f9fa', borderRadius: '8px'}}>
                  <div className="text-center">
                    <i className="bi bi-geo-alt text-primary" style={{fontSize: '3rem'}}></i>
                    <p className="mt-3">Mapa interativo em desenvolvimento</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-md-6">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5><i className="bi bi-signpost-split text-primary me-2"></i> Pontos de Encontro</h5>
                    <ul className="list-group list-group-flush mt-3">
                      <li className="list-group-item">Praça Central - Rua Principal, 100</li>
                      <li className="list-group-item">Escola Municipal - Av. das Palmeiras, 250</li>
                      <li className="list-group-item">Igreja Matriz - Praça da Matriz, s/n</li>
                      <li className="list-group-item">Estádio Municipal - Rua dos Esportes, 500</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5><i className="bi bi-exclamation-triangle text-warning me-2"></i> Áreas de Risco</h5>
                    <div className="alert alert-warning mt-3">
                      <i className="bi bi-info-circle me-2"></i>
                      Evite as seguintes áreas em caso de enchente:
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">Rua das Flores (área baixa)</li>
                      <li className="list-group-item">Vila Nova (próximo ao rio)</li>
                      <li className="list-group-item">Avenida Central (trecho alagável)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mt-4 shadow-sm">
              <div className="card-body">
                <h5><i className="bi bi-info-circle text-primary me-2"></i> Informações Importantes</h5>
                <div className="alert alert-info mt-3">
                  <p className="mb-2"><strong>Horário de Monitoramento:</strong> 24 horas</p>
                  <p className="mb-0"><strong>Contato de Emergência:</strong> Defesa Civil - 199</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
