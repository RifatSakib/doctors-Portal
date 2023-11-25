import React from 'react';
import Header from '../Header/Header';
import Services from '../Services/Services';
import FeatureService from '../FeatureService/FeatureService';
import MakeAppointment from '../MakeAppointment/MakeAppointment';

const Home = () => {
    return (
        <div className='container-fluid'>
          <Header></Header>
          <Services></Services>
          <FeatureService></FeatureService>
          <MakeAppointment></MakeAppointment>
        </div>
    );
};

export default Home;