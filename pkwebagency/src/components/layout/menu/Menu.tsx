'use client'
import Link from "next/link"

export default function Menu() {
    return (
        <>
            <ul className="navigation clearfix">                                
                <li><Link href="/">Home</Link></li>
                <li><Link href="/services">Serviços</Link></li>                
                <li><Link href="/portifolio">Portifólio</Link></li>
                <li><Link href="/team">Nossa Equipe</Link></li>
                <li><Link href="/about">Sobre Nós</Link></li>
                <li><Link href="/contact">Contato</Link></li>
            </ul>
        </>
    )
}
