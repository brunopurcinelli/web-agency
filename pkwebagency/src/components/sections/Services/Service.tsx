
import Link from "next/link"

export default function Services1() {
    return (
        <>
            <section className="services-area pt-135 rpt-100 rel z-1">
                <div className="container">
                    <div className="row pb-60 align-items-center justify-content-between">
                        <div className="col-xl-6 col-lg-8 wow fadeInLeft delay-0-2s">
                            <div className="section-title mb-20 rmb-35">
                                <span className="sub-title mb-15">Serviço confiável de web design</span>
                                <h2>moderno &amp; <span>soluções</span> web intuitivas</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 text-lg-end wow fadeInRight delay-0-2s">
                            <Link href="/services" className="theme-btn">Veja todos os serviços</Link>
                        </div>
                    </div>
                    <div className="row gap-40">
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item wow fadeInUp delay-0-2s">
                                <div className="content">
                                    <h5><Link href="/service-details">WEBSITE DESIGN</Link></h5>
                                    <p>Confira todos os serviços...</p>
                                </div>
                                <Link href="/service-details" className="details-btn"><i className="fal fa-long-arrow-right" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item wow fadeInUp delay-0-4s">
                                <div className="content">
                                    <h5><Link href="/service-details">SOFTWARE DESIGN</Link></h5>
                                    <p>Confira todos os serviços...</p>
                                </div>
                                <Link href="/service-details" className="details-btn"><i className="fal fa-long-arrow-right" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item wow fadeInUp delay-0-6s">
                                <div className="content">
                                    <h5><Link href="/service-details">MÍDIA SOCIAL</Link></h5>
                                    <p>Confira todos os serviços...</p>
                                </div>
                                <Link href="/service-details" className="details-btn"><i className="fal fa-long-arrow-right" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item wow fadeInUp delay-0-2s">
                                <div className="content">
                                    <h5><Link href="/service-details">MOBILE APP DESIGN</Link></h5>
                                    <p>Confira todos os serviços...</p>
                                </div>
                                <Link href="/service-details" className="details-btn"><i className="fal fa-long-arrow-right" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item wow fadeInUp delay-0-4s">
                                <div className="content">
                                    <h5><Link href="/service-details">MARKETING DIGITAL</Link></h5>
                                    <p>Confira todos os serviços...</p>
                                </div>
                                <Link href="/service-details" className="details-btn"><i className="fal fa-long-arrow-right" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item wow fadeInUp delay-0-6s">
                                <div className="content">
                                    <h5><Link href="/service-details">UI/UX DEVELOPMENT</Link></h5>
                                    <p>Confira todos os serviços...</p>
                                </div>
                                <Link href="/service-details" className="details-btn"><i className="fal fa-long-arrow-right" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
