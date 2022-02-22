import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import HorizontalData from './HorizontalData';

const HorizontalDataMian = () => {
    return (
        <div>

            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9">
                    <HorizontalData></HorizontalData>
                </div>
            </div>
        </div>
    );
};

export default HorizontalDataMian;
