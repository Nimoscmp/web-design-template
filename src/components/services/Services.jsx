import ServiceCard from "./ServiceCard";
import { servicesEnglish } from "../../utils/constants/services";

const Services = () => {

    return (
    <>
        <section>
            {servicesEnglish.map(item => (
                <ServiceCard
                    services={ item }
                />
            ))}
        </section>
    </>
    )
}

export default Services;
