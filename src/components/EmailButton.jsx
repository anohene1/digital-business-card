import emailIcon from '../images/mail.svg'

function EmailButton() {
    return (
        <a href="mailto:anoheneisaac@gmail.com" className='email-button'><img src={emailIcon} alt=""/> Email</a>
    );
}

export default EmailButton;