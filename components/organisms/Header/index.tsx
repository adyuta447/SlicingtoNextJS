import Headline from "../../molecules/Headline"
import ItemCard from "./ItemCard"

export default function Header() {
    return (
        <>
            {/**Headline**/}
        <div className="container header">
            <div className="row">
                <div className="col-md-6 px-md-0 my-auto">
                    <div className="headline" data-aos="fade-right">
                        Simplifying Global <span className="cl-light-blue">Finance</span>
                    </div>
                    <div className="sub-headline" data-aos="fade-up">
                        Faster, easier and cheaper cross border payment starts here
                    </div>
                    <div className="row four-point">
                        <Headline title="Licensed & Regulated" icon="Vector" />
                        <Headline title="100% Transparent" icon="Vector" />
                        <Headline title="Hassle-free" icon="Vector" />
                        <Headline title="Across 180+ Countries" icon="Vector" />
                    </div>
                </div>
                    {/**Itemcard**/}
                <div className="col-md-6 mt-5 mt-md-0">
                    <div className="card" data-aos="zoom-in-up">
                        <ItemCard label="Email" title="Email@example.org" />
                        <ItemCard label="Password" title="Your Password" />
                        <ItemCard label="Business category" title="Select business category" />
                        <button className="btn btn-card">
                            Get Started
                        </button>
                        <div className="row mx-0 mt-4 award">
                            <div className="col-1 px-0">
                                <img src="/images/award.png" alt="award" className="img-fluid" />
                            </div>
                            <div className="col-11 px-0">
                                Licensed and regulated by The Monetary
                                Authority of Singapore, Hong Kong Customs and Excise Department and Bank Indonesia.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


     </>
    )
}
