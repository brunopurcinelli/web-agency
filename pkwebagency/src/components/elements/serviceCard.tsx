import Link from "next/link";


interface ServiceProps {
    serviceName: string,
    description: string
}


export function ServiceCard({ serviceName, description }: ServiceProps) {
    return(
        <>
            <div className="content">
                <h6><Link href="/services/">{serviceName}</Link></h6>
                <p>{description}</p>
            </div>
            <Link href={serviceName} className="details-btn"><i className="fal fa-long-arrow-right" /></Link>
        </>
    )
}