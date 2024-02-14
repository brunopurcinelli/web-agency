
import Link from "next/link"

export default function LetsTalk() {
    return (
        <>
            <div className="lets-talk-area text-center py-75 rpt-45 rpb-100">
                <div className="container">
                    <Link href="/contact" className="lets-talk-text wow zoomIn delay-0-3s">Solicite um Orçamento <i className="fal fa-arrow-right" /></Link>
                </div>
            </div>
        </>
    )
}
