const Links = () => {

    const mailAddress = "umanski.maciej@protonmail.com";
    const telegramInvite = "https://telegram.me/mumanski";
    const github = "https://github.com/maciej-umanski";
    const dockerHub = "https://hub.docker.com/u/mumanski";
    const linkedin = "https://www.linkedin.com/in/maciej-umanski-a05690205/";

    const noWrap = {whiteSpace: 'nowrap'};

    return (
        <div className="container">
            <div>
                <h2>Email</h2>
                <p>You can reach me at: <a href={"mailto:" + mailAddress}>{mailAddress}</a></p>
            </div>
            <div>
                <h2>Telegram</h2>
                <p>The fastest way to get in touch <a style={noWrap} href={telegramInvite}>Get invite</a></p>
            </div>
            <div>
                <h2>Linkedin</h2>
                <p>I sometimes post updates there: <a href={linkedin}>LinkedIn</a></p>
            </div>
            <div>
                <h2>Check out my projects:</h2>
                <p><a href={github}>GitHub</a> / <a style={noWrap} href={dockerHub}>Docker Hub</a></p>
            </div>
        </div>
    )
}

export default Links;