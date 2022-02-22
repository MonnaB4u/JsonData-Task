import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import VerticallyData from '../VerticallyData/VerticallyData';

const Home = () => {
    return (
        <div>

            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9">
                    <VerticallyData></VerticallyData>
                </div>
            </div>
        </div>
    );
};

export default Home;
