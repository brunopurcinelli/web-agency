
import Link from "next/link"

export default function Headline2() {
    return (
        <>
            <div className="headline-area rel z-2 pt-30">
                <div className="container-fluid">
                    <div className="headline-wrap">
                        <span className="marquee-heading-two">
                            <span className="marquee-inner left">
                                <span className="marquee-item"><Link href="#">design</Link>  <span>/</span>  <Link href="#">desenvolvimento</Link>  <span>/</span>  <Link href="#">marketing digital</Link> <span>/</span><Link href="#">mídias sociais</Link> <span>/</span></span>
                                <span className="marquee-item"><Link href="#">design</Link>  <span>/</span>  <Link href="#">desenvolvimento</Link>  <span>/</span>  <Link href="#">marketing digital</Link> <span>/</span><Link href="#">mídias sociais</Link> <span>/</span></span>
                                <span className="marquee-item"><Link href="#">design</Link>  <span>/</span>  <Link href="#">desenvolvimento</Link>  <span>/</span>  <Link href="#">marketing digital</Link> <span>/</span><Link href="#">mídias sociais</Link> <span>/</span></span>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}
