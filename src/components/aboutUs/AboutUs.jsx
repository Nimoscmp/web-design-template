import { infoEnglish } from "../../utils/constants/aboutUs";
import teamWork from "../../img/team-work.jpg";

const AboutUs = () => {

    const { title, par1, par2 } = infoEnglish;

    return (
    <>
        <section>
            <div>
                <h2>{ title }</h2>
                <p>{ par1 }</p>
                <p>{ par2 }</p>
            </div>
            <div>
                <img src={teamWork} alt="about-us" />
            </div>
        </section>        
    </>
    )
}

export default AboutUs;
