
import VideoPopup from "@/components/elements/VideoPopup"
import Link from "next/link"

export default function Video() {
    return (
        <>
            <section className="video-area rel z-1">
                <div className="container">
                    <div className="video-top text-center pt-30 mb-30">
                        <h5><Link href="/contact">Entre em contato conosco</Link> ou envie um <span>email para</span> clientevip@pktecnologia.com</h5>
                    </div>
                </div>
                <div className="container container-1695">
                    <div className="video-inner pt-110 rpt-60 text-center" style={{ backgroundImage: 'url(assets/images/video/video-bg.jpg)' }}>
                        <span className="play-intro wow fadeInUp delay-0-2s"><span>Assista</span> a</span>
                        <div className="row rpt-15 align-items-center">
                            <div className="col-xl-2 offset-xl-5 col-4 offset-4 wow zoomIn delay-0-2s">
                                <VideoPopup style={1}/>
                            </div>
                            <div className="col-xl-5 col-4 text-start wow fadeInRight delay-0-2s">
                                <span className="video-text">Introdução</span>
                            </div>
                        </div>
                        <div className="shape-image d-flex mt-60 rmt-40">
                            <img src="/assets/images/shapes/wave-shape-primary.png" alt="Wave" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
