import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock,faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'

const infoData = [
    {

        title: 'Opening hours',
        description: 'We are open 7 days',
        icon: faClock,
        background: 'primary'
    },
 
    {

        title: 'Visir our Location',
        description: 'Brooklyn, NY 1000s,U.S.A',
        icon: faMapMarker,
        background: 'dark'
    },

    {

        title: 'Call Us Now',
        description: '+1563271862',
        icon: faPhone,
        background: 'primary'
    },
]


const BusinessInfo = () => {
    return (
        <section className='d-flex justify-content-center'>

            <div className="w-75 row">
            {
                infoData.map(info => <InfoCard info={info}></InfoCard>)

            }
            </div>
            

        </section>
    );
};

export default BusinessInfo;