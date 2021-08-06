import website from '../../img/webpage.png';

const Home = () => {
    return (
    <>
        <section className="w-100 section home">
            <div className="position-relative w-100 h-100">
                <div className="text-group position-absolute w-25 zi-10">
                    <h1 className="h1 my-4 main-title font-georama">Web design</h1>
                    <h2 className="h2 my-4 sub-title font-georama">- Adapted to you -</h2>
                    <button className="btn btn-primary my-4 font-montserrat">Explore</button>
                </div>
                <div className="box-img w-25 position-absolute zi-10">
                    <img src={website} alt="Website" className="img-fluid"/>
                </div>
                <div className="trapezoid position-absolute zi-5"></div>
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
