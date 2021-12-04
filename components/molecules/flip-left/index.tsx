import DetailFlip from "../../atoms/DetailFlip"

export default function FlipLeft() {
return (

                <div className="free mb-5 mb-md-0 mr-md-5" data-aos="flip-left">
                    <div className="text-free">
                        Free
                    </div>
                    <div className="price">
                        $0<span className="normal-text">/month</span>
                    </div>
                    <div className="benefits">
                        All the basic benefits and <br className="d-none d-md-block" /> features of <span
                            className="cl-light-blue">transwap</span>
                    </div>
                    <div className="row mx-0 features text-left">
                        <DetailFlip title="Personal account" ImageFlip="arrow-down-circle-light.svg" />
                        <DetailFlip title="Unlimited version history" ImageFlip="arrow-down-circle-light.svg" /> 
                    </div>
                    <button className="btn btn-free">
                        Choose Free
                    </button>
                </div>

	)
}
