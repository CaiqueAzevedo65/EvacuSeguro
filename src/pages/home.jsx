import { Link } from 'react-router-dom';
import RouteImage from '../assets/gptt.svg';
import '../styles/home.css';

export default function Home() {
    return (
        <>
            <div className='presentation-space container'>
                <div className='top-space'>

                </div>
                <div className='presentation-content row'>
                    <div className='about-site col-12 col-md-6 col-lg-6'>
                        <div className='about-title ps-5 ms-5'>
                            <p className=' text-light title-p fw-bold'>Rotas Seguras para Situações de Emergência</p>
                        </div>
                        <div className='about-text ps-5 ms-5 pb-5'>
                            <p className='text-light fs-5'>
                                Planejamento e orientação para evacuaçao em desastres naturais
                                e situações de risco. Salve vidas com informações precisas e
                                atualizadas.
                            </p>
                        </div>
                        <div className='about-buttons pt-4 ps-5 ms-5'>
                            <Link to="/rotas-seguras" className='btn btn-primary btn-md me-3 rounded-5'>Ver Rotas</Link>
                            <Link to="/dicas-seguranca" className='btn btn-outline-light btn-md rounded-5'>Dicas de Segurança</Link>
                        </div>
                    </div>
                    <div className='img-space col-12 col-md-6 col-lg-6'>
                        <div className='top-image'>

                        </div>
                        <div className='image-svg'>
                            <img className='Routemap' src="src/assets/gptt.svg" alt="Mapa com rota" />
                        </div>
                        <div className='bottom-image'>

                        </div>
                    </div>
                </div>
                <div className='bottom-space'>

                </div>
            </div>

            <div className='about-site'>
                <div className="container py-5">
                    <div className="row g-4">
                        <div className="col-md-4 col-lg-4">
                            <div className="p-4 text-center shadow rounded-4 bg-white h-100">
                                <i className="bi bi-map fs-1 text-primary mb-3"></i>
                                <h5 className="fw-bold">Rotas Mapeadas</h5>
                                <p className="text-muted">Rotas de evacuação atualizadas e verificadas para garantir sua segurança em momentos críticos.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4">
                            <div className="p-4 text-center shadow rounded-4 bg-white h-100">
                                <i className="bi bi-lightning fs-1 text-primary mb-3"></i>
                                <h5 className="fw-bold">Resposta Rápida</h5>
                                <p className="text-muted">Informações em tempo real sobre situações de emergência e caminhos alternativos.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4">
                            <div className="p-4 text-center shadow rounded-4 bg-white h-100">
                                <i className="bi bi-shield-check fs-1 text-primary mb-3"></i>
                                <h5 className="fw-bold">Dicas de Segurança</h5>
                                <p className="text-muted">Orientações práticas sobre como se preparar e agir durante situações de emergência.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='about-project'>
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-md-6 col-lg-6">
                            <h2 className="fw-bold text-dark mb-3">
                                Sobre o Projeto
                                <div style={{ width: '60px', height: '3px', backgroundColor: '#2e5cb8', marginTop: '5px' }}></div>
                            </h2>
                            <p className="text-muted fs-5">
                                O EvacuSeguro é uma iniciativa dedicada a salvar vidas através do planejamento e orientação para evacuação em situações de desastres naturais e emergências.
                            </p>
                            <p className="text-muted">
                                Nossa missão é fornecer informações precisas e atualizadas sobre rotas de evacuação seguras, pontos de encontro e procedimentos de emergência para comunidades em áreas de risco.
                            </p>
                            <p className="text-muted">
                                Trabalhamos em parceria com autoridades locais, especialistas em gestão de desastres e comunidades para desenvolver planos de evacuação eficientes e acessíveis a todos.
                            </p>
                        </div>
                        <div className="image2-space col-md-6 col-lg-6 text-center">
                            <div className="image2-svg">
                                <img src="src/assets/undraw_idea_hz8b.svg" alt="Imagem de alerta" className="img-fluid danger" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className='space-abcp'>
                
            </div>

            <div className='check-pages d-flex flex-column justify-content-center text-center px-3'>
                <div>
                    <div className="divider"></div>
                    <h2 className="section-title">Conheça Nossas Páginas</h2>
                    <p className="subtitle">
                        Explore nosso conteúdo especializado para se manter seguro em situações de emergência.
                    </p>
                </div>

                <div className="container mt-5">
                    <div className="row justify-content-center g-4">
                        <div className="col-md-6 col-lg-5">
                            <div className="card card-custom h-100">
                                <h4>Rotas Seguras</h4>
                                <p>
                                    Acesse nosso mapa interativo com rotas de evacuação atualizadas para diferentes tipos de emergências.
                                    Encontre os caminhos mais seguros e pontos de encontro na sua região.
                                </p>
                                <Link to="/rotas-seguras" className="btn btn-primary mt-3 rounded-4">
                                    Explorar Mapa
                                </Link>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-5">
                            <div className="card card-custom h-100">
                                <h4>Dicas de Segurança</h4>
                                <p>
                                    Aprenda como se preparar para emergências, monte seu kit de sobrevivência e conheça os procedimentos
                                    recomendados para diferentes tipos de desastres e situações de risco.
                                </p>
                                <Link to="/dicas-seguranca" className="btn btn-primary mt-3 rounded-4">
                                    Ver Dicas
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}