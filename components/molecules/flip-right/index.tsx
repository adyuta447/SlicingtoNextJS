import DetailFlip from "../../atoms/DetailFlip"

export default function FlipRight() {
return (
                <div className="professional mb-5 mb-md-0" data-aos="flip-right">
                    <div className="title mx-auto">
                        Most Popular
                    </div>
                    <div className="text-pro">
                        Professional
                    </div>
                    <div className="price">
                        $49<span className="normal-text">/month</span>
                    </div>
                    <div className="benefits">
                        All the basic benefits and <br className="d-none d-md-block" /> features of transwap
                    </div>
                    <div className="row mx-0 features text-left">
                        <DetailFlip title="Personal account" ImageFlip="arrow-down-circle-light.svg" />
                        <DetailFlip title="Unlimited version history" ImageFlip="arrow-down-circle-light.svg" />
                        <DetailFlip title="Shareable data permission" ImageFlip="arrow-down-circle-light.svg" />
                        <DetailFlip title="Custom users and admin" ImageFlip="arrow-down-circle-light.svg" />
                    </div>
                    <button className="btn btn-free">
                        Choose Professional
                    </button>
                </div>
)
}
