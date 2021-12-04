import Link from 'next/link'

interface MenuProps {
    title: string;
    href: string;
}

export default function Menu(props: MenuProps) {
    const { title, href="/" } = props;
    return (   
        <li className="nav-item">
            <Link href={href}>
                <a className="nav-link" aria-current="page">{title}</a>
            </Link>
        </li>

    )
    
}
