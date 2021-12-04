import CardFeature from "./CardFeature";

export default function Features() {
return (

<section className="adventages">
        <div className="container">
            <div className="row mx-0 text-center d-block">
                <div className="headline">
                    We Provide the Easiest Way to <br />
                    <span className="cl-light-blue font-red-hat-display">Manage Your Finances</span>
                </div>
            </div>
            <div className="value row mx-0 d-flex justify-content-center justify-content-md-between">
                <CardFeature cardImg="dollar-sign.png" cardTitle="Great Trading" cardText="We believe in
                the potential to provide groundbreaking solutions across industries." />
                <CardFeature cardImg="shield.png" cardTitle="Security First" cardText="Security has been
                    our top consideration because when choosing an exchange, trust matters." />
                <CardFeature cardImg="cpu.png" cardTitle="Robust Technology" cardText="To enhance the 
                    safety aspect of our products, our products are developed using the latest robust
                    technology." />

            </div>
        </div>
    </section>

	)
}
