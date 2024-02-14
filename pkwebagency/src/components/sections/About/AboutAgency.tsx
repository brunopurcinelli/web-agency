

export default function AboutAgency() {
    return (
        <>
            <section className="about-agency-area pt-135 rpt-100 rel z-1">
                <div className="container">
                    <div className="row pb-80 align-items-center">
                        <div className="col-lg-6 wow fadeInRight delay-0-2s">
                            <div className="about-agency-image rmb-55">
                                <img src="/assets/images/about/about-left.png" alt="About Agency" />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInLeft delay-0-2s">
                            <div className="about-agency-content">
                                <div className="section-title mb-30">
                                    <span className="sub-title mb-15">AGÊNCIA DE WEB DESIGN CONFIÁVEL</span>
                                    <h2>Por que deveria escolher nossa <span>agência</span>?</h2>
                                </div>
                                <p>Somos uma agência de desenvolvimento web apaixonada por transformar ideias em realidade digital. Nossa equipe criativa e experiente trabalha incansavelmente para oferecer soluções personalizadas, desde sites simples até plataformas complexas, sempre focando na qualidade, inovação e satisfação do cliente.</p>
                                <h5>Confie em nós para dar vida à sua visão digital - estamos aqui para superar suas expectativas e impulsionar o sucesso do seu negócio online!</h5>
                                <div className="skillbar" data-percent={88}>
                                    <span className="skillbar-title">Marketing</span>
                                    <div className="progress-bar-striped skillbar-bar progress-bar-animated" role="progressbar" aria-valuenow={88} aria-valuemin={0} aria-valuemax={100}  style={{ width: "88%" }}>
                                        <span className="skill-bar-percent" /></div>
                                </div>
                                <div className="row justify-content-between pt-5">
                                    <div className="col-sm-6">
                                        <div className="service-stye-two">
                                            <div className="icon">
                                                <img src="/assets/images/icons/light.png" alt="Icon" />
                                            </div>
                                            <h6>Nossa agência é lider em criatividade</h6>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="service-stye-two">
                                            <div className="icon">
                                                <img src="/assets/images/icons/development.png" alt="Icon" />
                                            </div>
                                            <h6>Sempre desenvolvendo soluções em alta qualidade</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
