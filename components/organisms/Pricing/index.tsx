import FlipLeft from "../../molecules/flip-left"
import FlipRight from "../../molecules/flip-right"

export default function Pricing() {
	return (
		<section className="plans">
        <div className="container">
            <div className="row d-block mx-0">
                <div className="headline" data-aos="fade-up">
                    Upgrade Your Accesibility <br className="d-none d-md-block" /> with <span className="
                        cl-light-blue font-red-hat-display">Professional Plan</span>
                </div>
            </div>
            <div className="row d-block mx-0" data-aos="fade-down">
                <div className="explain">
                    Choose plan that suits your budget. Every plan has their own <br className="d-none d-md-block" /> benefits
                    so careful on your
                    decision,
                    its starts from here!
                </div>
            </div>
            <div className="row mx-0 text-center d-flex justify-content-center offer">
                <FlipLeft />
                <FlipRight />
            </div>
        </div>
    </section>

	)
}
