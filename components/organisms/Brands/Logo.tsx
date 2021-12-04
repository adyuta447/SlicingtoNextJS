interface LogoProps {
    LogoImg: 'Slack-Logo.png' | 'Microsoft-Logo.png' | 'Google-Logo.png' | 'Airbnb-Logo.png'
}

export default function Logo(props: LogoProps) {
    const { LogoImg } = props;
    return (
        <>
        <div className="col-md-3 col-6 text-center my-md-auto">
            <img src={`./images/dark-mode/${LogoImg}`} alt="brand" className="img-fluid" />
        </div>
        </>
    )
}
