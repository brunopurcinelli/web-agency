'use client'
import { useEffect, useState } from "react"
import BackToTop from '../elements/BackToTop'
import Breadcrumb from './Breadcrumb'
import Sidebar from "./Sidebar"
import Footer from './footer/Footer'
import Header from "./header/Header"

export default function Layout({ headerStyle, footerStyle, bodyCls, breadcrumbTitle, children }: {  headerStyle: number, footerStyle: number, bodyCls: string, breadcrumbTitle: string, children: React.ReactNode;})  {
    const [scroll, setScroll] = useState(false)
    // Moblile Menu
    const [isMobileMenu, setMobileMenu] = useState(false)
    const handleMobileMenu = () => {
        setMobileMenu(!isMobileMenu);
    }

    // Sidebar
    const [isSidebar, setSidebar] = useState(false)
    const handleSidebar = () => {
            setSidebar(!isSidebar); 
            !isSidebar ? document.body.classList.add("side-content-visible") : document.body.classList.remove("side-content-visible");
    }

    useEffect(() => {
        const WOW = require('wowjs')
        window.wow = new WOW.WOW({
            live: false
        })
        window.wow.init()

        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    }, [])
    return (
        <>
            <div className={`page-wrapper ${bodyCls ? bodyCls : ""}`}>
                {!headerStyle && <Header scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isSidebar={isSidebar} handleSidebar={handleSidebar} />}
                {headerStyle == 1 ? <Header scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isSidebar={isSidebar} handleSidebar={handleSidebar} /> : null}

                <Sidebar isSidebar={isSidebar} handleSidebar={handleSidebar} />

                <main className="main">
                    {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

                    {children}
                </main>

                {!footerStyle && < Footer />}
                {footerStyle == 1 ? < Footer /> : null}

                <BackToTop />
            </div>
        </>
    )
}
