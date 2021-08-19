import { useEffect, useState } from 'react';
import website from '../../img/webpage.png';
import '../../styles/styles.css';

const Home = () => {
    //  Local states
    const [transitions, setTransitions] = useState({
        trapezoid: false,
        text1: false,
        text2: false,
        button: false,
    })

    useEffect(() => {
        const trapTimer = setTimeout(() => {
            setTransitions({
                trapezoid: true,
                text1: false,
                text2: false,
                button: false,  
            });
        }, 100);
        const text1Timer = setTimeout(() => {
            setTransitions({
                trapezoid: true,
                text1: true,
                text2: false,
                button: false,
            });
        }, 200);
        const text2Timer = setTimeout(() => {
            setTransitions({
                trapezoid: true,
                text1: true,
                text2: true,
                button: false,
            });
        }, 400);
        const btnTimer = setTimeout(() => {
            setTransitions({
                trapezoid: true,
                text1: true,
                text2: true,
                button: true,
            });
        }, 600);

        return () => clearTimeout(trapTimer, text1Timer, text2Timer, btnTimer);
        // eslint-disable-next-line
    }, [])

    return (
    <>
        <section className="w-100 section home">
            <div className="position-relative w-100 h-100">
                <div className="text-group position-absolute w-25 zi-10">
                    <h1 className={transitions.text1 ? "h1 my-4 main-title-final moved-down font-georama tr-900" : "h1 my-4 main-title moved-up font-georama tr-900"}>Web design</h1>
                    <h2 className={transitions.text2 ? "h2 my-4 sub-title-final moved-down font-georama tr-900" : "h2 my-4 sub-title moved-up font-georama tr-900"}>- Adapted to you -</h2>
                    <button className={transitions.button ? "btn btn-primary button-final moved-down my-4 font-montserrat tr-900" : "btn btn-primary button moved-up my-4 font-montserrat tr-900"}>Explore</button>
                </div>
                <div className="box-img w-25 position-absolute zi-10">
                    <img src={website} alt="Website" className="img-fluid"/>
                </div>
                <div className={transitions.trapezoid ? "trapezoid trapezoid-final position-absolute zi-5 tr-900" : "trapezoid trapezoid-init position-absolute zi-5 tr-900"}></div>
                <div className="outer-circle position-absolute zi-5">
                    <div className="position-relative w-100 h-100">
                        <div className="inner-circle position-absolute zi-5 center-xy"></div>
                    </div>
                </div>
            </div>
        </section>        
    </>
    )
}

export default Home
