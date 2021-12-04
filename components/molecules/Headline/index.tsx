interface HeadlineProps {
  title: string
  icon: 'Vector'
}

export default function Headline(props: HeadlineProps) {
  const { title, icon } = props;
  return ( 
  <div className="col-md-6">
    <img src={`/images/${icon}.png`} alt="vector" className="mr-3" />{title}
  </div>
	)
}
