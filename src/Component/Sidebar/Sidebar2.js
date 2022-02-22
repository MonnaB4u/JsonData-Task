import React from 'react';
import './Sidebar.css'

const Sidebar2 = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md- mx-3 sideHead sticky bg-box2" style={{ minHeight: '70vh', minWidth: '250px' }}>
                    <div  className="bg-success  text-center blog">
                        <p className="h4 text-white mt-1">First Blog</p>
                    </div>
                    <div className='mt-4 ml-3'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam eveniet accusamus ducimus quos fugiat ut at beatae corporis temporibus, ex incidunt distinctio minima nisi! Nemo, corrupti. Ullam voluptatem deserunt quia.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Sidebar2;
