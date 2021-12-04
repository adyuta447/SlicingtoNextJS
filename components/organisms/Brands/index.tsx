import Logo from "./Logo";

export default function Brands() {
    return (
      <section className="testimoni">
        <div className="container">
            <div className="row brand" data-aos="fade-up">
                <Logo LogoImg="Slack-Logo.png" />
                <Logo LogoImg="Microsoft-Logo.png" />
                <Logo LogoImg="Google-Logo.png" />
                <Logo LogoImg="Airbnb-Logo.png" />
            </div>
        </div>
    </section>
  )
}
