import React from 'react';
import feature from '../../../images/treatment.png'

const FeatureService = () => {
    return (
        <section className='features-service pb-0 pb-md-5 my-5'>
            <div className="container md-5">
                <div className="row mb-5">
                    <div className="col-md-5 mb-4 m-md-0">

                        <img className='img-fluid' src={feature} alt="" />
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1>Exceptional Dental Care,on your Term</h1>
                        <p className='text-secondary my-5'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, vitae.

                        </p>
                        <button className='btn btn-primary'>Learn More</button>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default FeatureService;