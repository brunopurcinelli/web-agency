
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Error404() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} bodyCls="" breadcrumbTitle="error page">
                <main>
                    <div>
                        {/* Error Page Area start */}
                        <div className="error-page pt-90 rpt-70">
                            <div className="container">
                                <div className="error-content wow fadeInUp delay-0-4s">
                                    <span className="error-text mb-55">404</span>
                                    <h2>Oops... arece que você está <span>perdido!</span></h2>
                                    <p>Oops! A página que você está procurando não existe. Ela pode ter sido movida ou excluída.</p>
                                    <Link href="/" className="theme-btn style-two mt-30">voltar para home</Link>
                                </div>
                            </div>
                        </div>
                        {/* Error Page Area end */}
                        {/* Lets Talk Area start */}
                        <div className="lets-talk-area text-center pt-120 rpt-90 pb-75 rpb-100">
                            <div className="container">
                                <Link href="/contact" className="lets-talk-text wow zoomIn delay-0-2s">Let’s Talk <i className="fal fa-arrow-right" /></Link>
                            </div>
                        </div>
                        {/* Lets Talk Area end */}
                        {/* Headline area start */}
                        <div className="headline-area bgc-primary py-20">
                            <div className="headline-wrap style-two color-black">
                                <span className="marquee-wrap">
                                    <span className="marquee-inner left">
                                        <span className="marquee-item"><b>customer business solution</b><i className="fas fa-bahai" /></span>
                                        <span className="marquee-item"><b><span>design</span> - customer centric solution</b><i className="fas fa-bahai" /></span>
                                        <span className="marquee-item"><b>web development based company</b><i className="fas fa-bahai" /></span>
                                        <span className="marquee-item"><b><span>design</span> - customer centric solution</b><i className="fas fa-bahai" /></span>
                                        <span className="marquee-item"><b>marketing based devlopment</b><i className="fas fa-bahai" /></span>
                                    </span>
                                    <span className="marquee-inner left">
                                        <span className="marquee-item"><b>customer business solution</b><i className="fas fa-bahai" /></span>
                                        <span className="marquee-item"><b><span>design</span> - customer centric solution</b><i className="fas fa-bahai" /></span>
                                        <span className="marquee-item"><b>web development based company</b><i className="fas fa-bahai" /></span>
                                        <span className="marquee-item"><b><span>design</span> - customer centric solution</b><i className="fas fa-bahai" /></span>
                                        <span className="marquee-item"><b>marketing based devlopment</b><i className="fas fa-bahai" /></span>
                                    </span>
                                    <span className="marquee-inner left">
                                        <span className="marquee-item"><b>customer business solution</b><i className="fas fa-bahai" /></span>
                                        <span className="marquee-item"><b><span>design</span> - customer centric solution</b><i className="fas fa-bahai" /></span>
                                        <span className="marquee-item"><b>web development based company</b><i className="fas fa-bahai" /></span>
                                        <span className="marquee-item"><b><span>design</span> - customer centric solution</b><i className="fas fa-bahai" /></span>
                                        <span className="marquee-item"><b>marketing based devlopment</b><i className="fas fa-bahai" /></span>
                                    </span>
                                </span>
                            </div>
                        </div>
                        {/* Headline Area end */}
                    </div>
                </main>

            </Layout>
        </>
    )
}