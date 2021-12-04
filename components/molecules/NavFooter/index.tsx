import Link from 'next/link'

interface NavFooterProps {
  title: string
  text1: string
  text2: string
  text3: string
}

export default function NavFooter(props: NavFooterProps) {
  const { title, text1, text2, text3 } = props
	return (
	<div className="col-md-4 mb-md-0 mb-3">
    <p>
      {title}
    </p>
      <ul className="list-unstyled">
        <li>
          <Link href="/">
          <a>{text1}</a>
          </Link>
        </li>
        <li>
          <Link href="/">
          <a>{text2}</a>
          </Link>
        </li>
        <li>
          <Link href="/">
          <a>{text3}</a>
          </Link>
      	</li>
      </ul>
	</div>

	)
}
