interface CardFeatureProps {
    cardTitle: string
    cardText: string
    cardImg: 'dollar-sign.png' | 'shield.png' | 'cpu.png'
}

export default function CardFeature(props: CardFeatureProps) {   
    const { cardTitle, cardText, cardImg } = props
    return (
        <>
                <div className="card">
                    <div className="card-body p-0">
                        <img src={`./images/${cardImg}`} alt="dolar" className="img-fluid" />
                        <div className="card-desc">
                            <h4 className="card-title">{cardTitle}</h4>
                            <p className="card-text">{cardText}
                            </p>
                        </div>
                    </div>
                </div>
        </>
    )
}
