import PropTypes from 'prop-types';

const ServiceCard = ({ services }) => {

    const { id , title, info, icon } = services;

    return (
    <>
        <div key={ id }>
            <div>
                <span>{ icon }</span>
                <h3>{ title }</h3>
            </div>
            <div>
                <p>{ info }</p>
            </div>
        </div>   
    </>
    )
}

ServiceCard.propTypes = {
    services: PropTypes.object.isRequired
}

export default ServiceCard;