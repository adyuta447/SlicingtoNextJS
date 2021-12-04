import NavFooter from "../../molecules/NavFooter"
import SocialMediaFooter from "../../molecules/SocialMediaFooter"

export default function Footer() {
	return (
		<footer className="page-footer font-small blue">
        <div className="container text-md-left">
            <div className="row">
                <div className="col-md-6 mt-md-0 mt-3 address">
                    <div className="logo font-red-hat-display">
                        GivMoney
                    </div>
                    <SocialMediaFooter />
                    <div className="copyright font-red-hat-display">
                        2021 All rights reserved.
                    </div>
                </div>
                <hr className="clearfix w-100 d-md-none pb-3" />
                <div className="row col-md-6 nav-footer">
                    <NavFooter title="Features" text1="Payments" text2="Collections" text3="Conversions" 
                    />
                    <NavFooter title="Resources" text1="Blog" text2="FAQ" text3="Partnerships" />
                    <NavFooter title="Our Company" text1="About Us" text2="Careers" text3="News & Media" />
                </div>
            </div>
        </div>
    </footer>

	)
}
