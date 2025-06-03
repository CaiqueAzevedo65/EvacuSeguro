import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, LayersControl } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/pages.css';
import '../styles/map.css';

// Corrigindo ícones padrão do Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

// Pontos de interesse no mapa
const pointsOfInterest = [
  {
    id: 1,
    name: 'Praça Central',
    position: [-23.5505, -46.6333],
    address: 'Rua Principal, 100',
    description: 'Capacidade: 500 pessoas',
    type: 'meeting',
    icon: 'geo-alt'
  },
  {
    id: 2,
    name: 'Escola Municipal',
    position: [-23.555, -46.638],
    address: 'Av. das Palmeiras, 250',
    description: 'Área coberta disponível',
    type: 'meeting',
    icon: 'building'
  },
  {
    id: 3,
    name: 'Área de Risco',
    position: [-23.5525, -46.636],
    type: 'danger',
    icon: 'exclamation-triangle',
    area: [
      [-23.552, -46.635],
      [-23.552, -46.637],
      [-23.553, -46.637],
      [-23.553, -46.635],
      [-23.552, -46.635]
    ]
  }
];

export default function RotasSeguras() {
  const mapRef = useRef(null);
  const [activePoint, setActivePoint] = useState(null);
  const [mapCenter, setMapCenter] = useState([-23.5505, -46.6333]);
  
  // Efeito para ajustar o tamanho do mapa quando o componente for montado
  useEffect(() => {
    if (mapRef.current) {
      setTimeout(() => {
        mapRef.current.invalidateSize();
      }, 0);
    }
  }, []);
  
  // Função para centralizar o mapa em um ponto específico
  const centerMap = (position) => {
    if (mapRef.current) {
      mapRef.current.flyTo(position, 15, {
        duration: 1,
        animate: true
      });
      setMapCenter(position);
    }
  };
  
  // Função para traçar rota até um ponto
  const traceRoute = (destination) => {
    // Aqui você pode implementar a lógica para traçar uma rota
    // Por enquanto, apenas centraliza no destino
    centerMap(destination);
    
    // Simula um alerta de rota traçada
    alert('Rota traçada até o destino selecionado!');
  };
  return (
    <div className="page-container">
      <div className="container py-5">
        <h1 className="text-center mb-5">Rotas Seguras</h1>
        
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card shadow-sm mb-5">
              <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
                <h5 className="mb-0">
                  <i className="bi bi-geo-alt me-2"></i>
                  Mapa de Rotas de Evacuação
                </h5>
                <div className="btn-group">
                  <button 
                    className="btn btn-sm btn-outline-light"
                    onClick={() => centerMap(pointsOfInterest[0].position)}
                    title="Centralizar na Praça Central"
                  >
                    <i className="bi bi-geo-alt me-1"></i> Praça
                  </button>
                  <button 
                    className="btn btn-sm btn-outline-light"
                    onClick={() => centerMap(pointsOfInterest[1].position)}
                    title="Centralizar na Escola"
                  >
                    <i className="bi bi-building me-1"></i> Escola
                  </button>
                </div>
              </div>
              <div className="card-body p-0" style={{ minHeight: '500px' }}>
                <MapContainer 
                  center={[-23.5505, -46.6333]} 
                  zoom={13} 
                  style={{ height: '100%', width: '100%', borderRadius: '8px' }}
                  className="map-container"
                  zoomControl={false}
                >
                  <LayersControl position="topright">
                    <LayersControl.BaseLayer checked name="Mapa Padrão">
                      <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer name="Satélite">
                      <TileLayer
                        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                        attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                      />
                    </LayersControl.BaseLayer>
                  </LayersControl>
                  
                  {/* Renderizar pontos de encontro */}
                  {pointsOfInterest
                    .filter(point => point.type === 'meeting')
                    .map(point => (
                      <Marker 
                        key={`marker-${point.id}`} 
                        position={point.position}
                        eventHandlers={{
                          click: () => setActivePoint(point.id === activePoint ? null : point.id)
                        }}
                      >
                        <Popup autoClose={false} closeButton={false}>
                          <div className="text-center">
                            <h6 className="fw-bold mb-1">
                              <i className={`bi bi-${point.icon} text-primary me-1`}></i>
                              {point.name}
                            </h6>
                            <p className="mb-1">{point.address}</p>
                            <small className="text-muted">{point.description}</small>
                            <div className="mt-2">
                              <button 
                                className="btn btn-sm btn-primary w-100"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  traceRoute(point.position);
                                }}
                              >
                                Ver Rota
                              </button>
                            </div>
                          </div>
                        </Popup>
                      </Marker>
                  ))}
                  
                  {/* Renderizar áreas de risco */}
                  {pointsOfInterest
                    .filter(point => point.type === 'danger' && point.area)
                    .map((point, index) => (
                      <Polyline 
                        key={`danger-${index}`}
                        positions={point.area} 
                        color="#dc3545"
                        fillColor="#dc3545"
                        fillOpacity={0.2}
                        weight={2}
                      >
                        <Popup autoClose={false}>
                          <div className="text-center">
                            <i className="bi bi-exclamation-triangle-fill text-danger me-1"></i>
                            <strong>Área de Risco</strong><br/>
                            <small>Área sujeita a enchentes</small>
                          </div>
                        </Popup>
                      </Polyline>
                  ))}
                  
                  {/* Rotas de evacuação */}
                  {activePoint && (() => {
                    const point = pointsOfInterest.find(p => p.id === activePoint);
                    if (!point) return null;
                    
                    // Simula uma rota do centro do mapa até o ponto selecionado
                    const route = [
                      mapCenter,
                      [point.position[0] - 0.001, point.position[1] - 0.001],
                      point.position
                    ];
                    
                    return (
                      <Polyline 
                        positions={route} 
                        color="#0d6efd"
                        dashArray="5, 5"
                        weight={3}
                      >
                        <Popup autoClose={false}>
                          <div className="text-center">
                            <i className="bi bi-signpost-split-fill text-primary me-1"></i>
                            <strong>Rota para {point.name}</strong><br/>
                            <small>Distância: 1.2 km • Tempo: 15 min a pé</small>
                          </div>
                        </Popup>
                      </Polyline>
                    );
                  })()}
                  
                  {/* Legenda do Mapa */}
                  <div className="leaflet-bottom leaflet-right">
                    <div className="leaflet-control leaflet-bar map-legend">
                      <h6 className="mb-2">Legenda</h6>
                      <div className="d-flex align-items-center mb-1">
                        <div style={{
                          width: '12px',
                          height: '12px',
                          backgroundColor: '#0d6efd',
                          marginRight: '8px',
                          borderRadius: '50%'
                        }}></div>
                        <small>Ponto de Encontro</small>
                      </div>
                      <div className="d-flex align-items-center mb-1">
                        <div style={{
                          width: '12px',
                          height: '12px',
                          backgroundColor: '#dc3545',
                          opacity: '0.2',
                          marginRight: '8px',
                          border: '1px solid #dc3545'
                        }}></div>
                        <small>Área de Risco</small>
                      </div>
                      <div className="d-flex align-items-center">
                        <div style={{
                          width: '12px',
                          height: '12px',
                          background: 'repeating-linear-gradient(45deg, #0d6efd, #0d6efd 3px, transparent 3px, transparent 6px)',
                          marginRight: '8px'
                        }}></div>
                        <small>Rota Segura</small>
                      </div>
                    </div>
                  </div>
                </MapContainer>
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
