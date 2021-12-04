interface ItemCardProps {
    label: string
    title: string
}

export default function ItemCard(props: ItemCardProps) {
    const { label, title } = props
    return (
        <>
        <div className="input-group mb-4">
            <label htmlFor="input" className="w-100">
                <span className="input-title">{label}</span>
                <input type="text" className="form-control mt-2" 
                placeholder={title} />
            </label>
        </div>
        </>
    )
}
