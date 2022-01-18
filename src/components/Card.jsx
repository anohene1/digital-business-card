import profilePicture from '../images/image.png'
import EmailButton from "./EmailButton";
import CardFooter from "./CardFooter";

function Card() {
    return (
        <div className='card'>
            <img src={profilePicture} alt="Profile"/>
            <main className='card--body'>
                <h1 className='card--name'>Laura Smith</h1>
                <p className='card--stack'>Frontend Developer</p>
                <p className='card--website'>laurasmith.website</p>
                <EmailButton />
                <h2 className='section--heading'>About</h2>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h2 className='section--heading'>Interests</h2>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </main>
            <CardFooter />
        </div>
    );
}

export default Card;