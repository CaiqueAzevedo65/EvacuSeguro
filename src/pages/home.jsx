import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import RouteImage from '../assets/gptt.svg';
import '../styles/home.css';
import '../styles/pages.css';

export default function Home() {
    const featuresRef = useRef(null);
    const aboutRef = useRef(null);
    const pagesRef = useRef(null);

    // Efeito para animação de scroll suave
    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll('.animate-on-scroll');
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementTop < windowHeight - 100) {
                    element.classList.add('animate-card');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Verificar elementos visíveis no carregamento

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Função para rolar suavemente até uma seção
    const scrollToSection = (ref) => {
        if (ref.current) {
            scroll.scrollTo(ref.current.offsetTop - 80, {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart'
            });
        }
    };

    return (
        <>
            {/* Hero Section */}
            <section className="hero-section position-relative overflow-hidden">
                <div className="container">
                    <div className="row align-items-center min-vh-100">
                        <div 
                            className="col-12 col-lg-6 pe-lg-5"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                        >
                            <h1 className="hero-title mb-4 animate-on-scroll">
                                Rotas Seguras para Situações de Emergência
                            </h1>
                            <p className="hero-text text-white-75 mb-5 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
                                Planejamento e orientação para evacuação em desastres naturais
                                e situações de risco. Salve vidas com informações precisas e
                                atualizadas.
                            </p>
                            <div className="hero-buttons animate-on-scroll" style={{ animationDelay: '0.4s' }}>
                                <Link 
                                    to="/rotas-seguras" 
                                    className="btn btn-primary btn-lg me-3 mb-3 mb-md-0"
                                >
                                    Ver Rotas
                                </Link>
                                <Link 
                                    to="/dicas-seguranca" 
                                    className="btn btn-outline-dark btn-lg text-dark"
                                >
                                    Dicas de Segurança
                                </Link>
                            </div>
                            <div className="mt-5 pt-3 animate-on-scroll" style={{ animationDelay: '0.6s' }}>
                                <button 
                                    onClick={() => scrollToSection(featuresRef)}
                                    className="btn btn-link text-dark text-decoration-none d-flex align-items-center mx-auto"
                                >
                                    Saiba mais
                                    <i className="bi bi-arrow-down ms-2"></i>
                                </button>
                            </div>
                        </div>
                        <div 
                            className="col-12 col-lg-6 mt-5 mt-lg-0"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                        >
                            <div className="hero-image text-center">
                                <img 
                                    src="/gptt.svg" 
                                    alt="Mapa com rota de evacuação" 
                                    className="img-fluid" 
                                    style={{ maxWidth: '100%', height: 'auto' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Elementos decorativos */}
                <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden" style={{ zIndex: -1 }}>
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-90"></div>
                    <div className="position-absolute bottom-0 end-0">
                        <div className="position-relative" style={{ width: '600px', height: '600px' }}>
                            <div className="position-absolute rounded-circle bg-white opacity-10" style={{ width: '100%', height: '100%', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}></div>
                            <div className="position-absolute rounded-circle bg-white opacity-05" style={{ width: '80%', height: '80%', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section 
                ref={featuresRef}
                className="features-section py-5 bg-light"
            >
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="section-title">Nossos Diferenciais</h2>
                        <p className="lead text-muted">Tudo o que você precisa para se manter seguro em situações de emergência</p>
                    </div>
                    <div className="row g-4">
                        {[
                            {
                                icon: 'bi-map',
                                title: 'Rotas Mapeadas',
                                text: 'Rotas de evacuação atualizadas e verificadas para garantir sua segurança em momentos críticos.'
                            },
                            {
                                icon: 'bi-lightning',
                                title: 'Resposta Rápida',
                                text: 'Informações em tempo real sobre situações de emergência e caminhos alternativos.'
                            },
                            {
                                icon: 'bi-shield-check',
                                title: 'Dicas de Segurança',
                                text: 'Orientações práticas sobre como se preparar e agir durante situações de emergência.'
                            }
                        ].map((feature, index) => (
                            <div key={index} className="col-md-4">
                                <div className="feature-card card-hover h-100 animate-on-scroll">
                                    <div className="card-body text-center p-4">
                                        <div className="icon-wrapper mb-4">
                                            <i className={`bi ${feature.icon} feature-icon`}></i>
                                        </div>
                                        <h5 className="feature-title">{feature.title}</h5>
                                        <p className="feature-text text-muted mb-0">{feature.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section 
                ref={aboutRef}
                className="about-project py-5 bg-primary text-white position-relative overflow-hidden"
            >
                <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10">
                    <div className="position-absolute" style={{ top: '-100px', right: '-100px', width: '400px', height: '400px' }}>
                        <div className="w-100 h-100 rounded-circle" style={{ border: '2px dashed rgba(255,255,255,0.3)' }}></div>
                    </div>
                </div>
                
                <div className="container position-relative">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <h2 className="section-title text-white mb-4">
                                Sobre o Projeto
                            </h2>
                            <div className="about-content">
                                <p className="lead">
                                    O GeoEscape é uma iniciativa dedicada a salvar vidas através do planejamento e orientação para evacuação em situações de desastres naturais e emergências.
                                </p>
                                <p>
                                    Nossa missão é fornecer informações precisas e atualizadas sobre rotas de evacuação seguras, pontos de encontro e procedimentos de emergência para comunidades em áreas de risco.
                                </p>
                                <p className="mb-0">
                                    Trabalhamos em parceria com autoridades locais, especialistas em gestão de desastres e comunidades para desenvolver planos de evacuação eficientes e acessíveis a todos.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 text-center">
                            <div className="about-image animate-on-scroll" style={{ animationDelay: '0.2s' }}>
                                <img 
                                    src="src/assets/undraw_idea_hz8b.svg" 
                                    alt="Ilustração sobre planejamento de emergência" 
                                    className="img-fluid" 
                                    style={{ maxHeight: '400px' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pages Section */}
            <section 
                ref={pagesRef}
                className="pages-section py-5 bg-light"
            >
                <div className="container">
                    <div className="text-center mb-5 animate-on-scroll">
                        <h2 className="section-title">Conheça Nossas Páginas</h2>
                        <p className="lead text-muted">
                            Explore nosso conteúdo especializado para se manter seguro em situações de emergência.
                        </p>
                    </div>

                    <div className="row justify-content-center g-4">
                        {[
                            {
                                title: 'Rotas Seguras',
                                text: 'Acesse nosso mapa interativo com rotas de evacuação atualizadas para diferentes tipos de emergências. Encontre os caminhos mais seguros e pontos de encontro na sua região.',
                                btnText: 'Explorar Mapa',
                                link: '/rotas-seguras'
                            },
                            {
                                title: 'Dicas de Segurança',
                                text: 'Aprenda como se preparar para emergências, monte seu kit de sobrevivência e conheça os procedimentos recomendados para diferentes tipos de desastres e situações de risco.',
                                btnText: 'Ver Dicas',
                                link: '/dicas-seguranca'
                            }
                        ].map((page, index) => (
                            <div key={index} className="col-md-6 col-lg-5">
                                <div className="page-card card-hover h-100 animate-on-scroll" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
                                    <div className="card-body p-4">
                                        <h3 className="h4 mb-3">{page.title}</h3>
                                        <p className="text-muted mb-4">
                                            {page.text}
                                        </p>
                                        <Link to={page.link} className="btn btn-primary">
                                            {page.btnText} <i className="bi bi-arrow-right ms-2"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section py-5 bg-primary text-white text-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <h2 className="mb-4">Pronto para se preparar para emergências?</h2>
                            <p className="lead mb-4">
                                Acesse agora mesmo nossas rotas seguras e dicas de segurança para estar preparado em qualquer situação.
                            </p>
                            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                                <Link to="/rotas-seguras" className="btn btn-light btn-lg">
                                    Ver Rotas de Fuga
                                </Link>
                                <Link to="/dicas-seguranca" className="btn btn-outline-light btn-lg">
                                    Dicas de Segurança
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}