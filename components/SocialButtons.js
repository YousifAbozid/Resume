const SocialButtons = () => {
    return (
        <div className="social_buttons">
            <a
                href="https://github.com/YousifAbozid"
                target="_blank"
                rel="noopener noreferrer"
            >
                <span>
                    <i className="fab fa-github"></i>
                </span>
                GitHub
            </a>
            <a
                href="https://facebook.com/YousifAbozid"
                target="_blank"
                rel="noopener noreferrer"
            >
                <span>
                    <i className="fab fa-facebook"></i>
                </span>
                FaceBook
            </a>
            <a
                href="https://t.me/YousifAbozid"
                target="_blank"
                rel="noopener noreferrer"
            >
                <span>
                    <i className="fab fa-telegram"></i>
                </span>
                Telegram
            </a>
            <a
                href="mailto:yousif.abozid@yahoo.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <span>
                    <i className="fas fa-at"></i>
                </span>
                Mail
            </a>
        </div>
    )
}

export default SocialButtons
