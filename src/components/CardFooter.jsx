import facebookIcon from '../images/facebook-icon.svg';
import githubIcon from '../images/github-icon.svg';
import instagramIcon from '../images/instagram-icon.svg';
import linkedinIcon from '../images/linkedin-icon.svg';
import twitterIcon from '../images/twitter-icon.svg';

function CardFooter() {
    return (
        <footer className='card--footer'>
            <a href=""><img src={twitterIcon} alt="twitter button"/></a>
            <a href=""><img src={facebookIcon} alt="facebook button"/></a>
            <a href=""><img src={instagramIcon} alt="instagram button"/></a>
            <a href=""><img src={linkedinIcon} alt="linkedin button"/></a>
            <a href=""><img src={githubIcon} alt="github button"/></a>
        </footer>
    );
}

export default CardFooter;