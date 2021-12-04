import Image from 'next/image'
interface DetailFlipProps {
	title: string
	ImageFlip:'arrow-down-circle-light.svg' 
}
export default function DetailFlip(props: DetailFlipProps) {
	const { ImageFlip, title } = props
	return (
<div className="col-12 px-0 detail">
    <Image src={`/images/${ImageFlip}`} width={24} height={24} alt="arrow" className="img-fluid" />
		{title}
</div>
	)
}
