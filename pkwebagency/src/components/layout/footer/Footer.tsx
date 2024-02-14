import Link from "next/link"

export default function Footer1() {
    return (
        <>
            <footer className="main-footer footer-one pt-70 pb-20 bgc-black bordered-top rel z-1">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="footer-widget widget-about wow fadeInUp delay-0-2s">
                                <div className="footer-logo mb-15">
                                    <Link href="/"><img src="/assets/images/logos/logo.png" alt="Logo" /></Link>
                                </div>
                                <p>A <b>Pk Tech</b> é uma premiada agência de design de UI/UX e branding com sede em Ribeirão Preto, SP.</p>
                                <div className="social-style-one mt-15">
                                    <Link href="#"><i className="fab fa-twitter" /></Link>
                                    <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                    <Link href="#"><i className="fab fa-instagram" /></Link>
                                    <Link href="https://api.whatsapp.com/send?phone=5516991590303&text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20seu%20contato%20para%20entender%20melhor%20sobre%20os%20trabalhos%20da%20agencia."><i className="fab fa-whatsapp" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-6">
                            <div className="footer-widget widget-links wow fadeInUp delay-0-3s">
                                <h6 className="footer-title">Outros Links</h6>
                                <ul>
                                    <li><Link href="/services">Features</Link></li>                                    
                                    <li><Link href="/contact">Trabalhe conosco!</Link></li>
                                    <li><Link href="/contact">Acesso p/ Clientes</Link></li>
                                    <li><Link href="/contact">Criar conta</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-6">
                            <div className="footer-widget widget-links wow fadeInUp delay-0-4s">
                                <h6 className="footer-title">Encontre rápido</h6>
                                <ul>
                                    <li><Link href="/">Home</Link></li>
                                    <li><Link href="/services">Serviços</Link></li>
                                    <li><Link href="/about">Nossa Equipe</Link></li>
                                    <li><Link href="/contact">Contato</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="footer-widget widget-text wow fadeInUp delay-0-5s">
                                <div className="text">
                                    <p>Avenida Caramuru, 2730 Sala 144 Torre 2, Alto da Boa Vista - Ribeirão Preto SP</p>
                                    <Link href="mailto:contato@pktecnologia.com">contato@pktecnologia.com</Link><br />
                                    <Link href="https://api.whatsapp.com/send?phone=5516991590303&text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20seu%20contato%20para%20entender%20melhor%20sobre%20os%20trabalhos%20da%20agencia.">
                                        (16) 99159-0303
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
