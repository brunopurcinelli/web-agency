import Link from 'next/link'

export default function Sidebar({ handleSidebar, isSidebar }: {handleSidebar: ()=>void, isSidebar: boolean;}) {
    return (
        <>
            <div className="form-back-drop" onClick={handleSidebar}></div>
            <section className="hidden-bar">
                <div className="inner-box text-center">
                    <div className="cross-icon" onClick={handleSidebar}><span className="fa fa-times" /></div>
                    <div className="title">
                        <h4>Solicitar um Orçamento</h4>
                    </div>
                    {/*Appointment Form*/}
                    <div className="appointment-form">
                        <form method="post" action="contact">
                            <div className="form-group">
                                <input type="text" name="text" placeholder="Nome" required />
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" placeholder="Email" required />
                            </div>
                            <div className="form-group">
                                <textarea placeholder="Menssagem" rows={5} />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="theme-btn style-two">Entre em contato</button>
                            </div>
                        </form>
                    </div>
                    {/*Social Icons*/}
                    <div className="social-style-one">
                        <Link href="#"><i className="fab fa-twitter" /></Link>
                        <Link href="#"><i className="fab fa-facebook-f" /></Link>
                        <Link href="#"><i className="fab fa-instagram" /></Link>
                        <Link href="https://api.whatsapp.com/send?phone=5516991590303&text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20seu%20contato%20para%20entender%20melhor%20sobre%20os%20trabalhos%20da%20agencia."><i className="fab fa-whatsapp" /></Link>
                    </div>
                </div>
            </section>

        </>
    )
}
