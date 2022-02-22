import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import Sidebar3 from './Sidebar3';
const Sidebar = () => {


    return (
        <div>
            <div className="row">
                <div className="col-md- border sideHead sticky bg-box" style={{ minHeight: '120vh', minWidth: '250px' }}>
                    <div className="mt-2 m-5">
                        <div className="d-flex mt-5 border rounded bg-card">
                            <div className=" col-4 mx-3">
                                <img className="img-fluid w-75 border my-2 rounded-circle" src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png" alt="" />
                            </div>
                            <div className="mt-2">
                                <span>Hi Readers</span>
                                <br />
                                <span> Here Your News</span>
                            </div>
                        </div>
                    </div>

                    {/* ///////////View Toggle//////////// */}

                    <div className="m-5 border bg-white bg-card">
                        <p className="h4 text-center mt-2">View Toggle</p>
                        <div className=" d-flex justify-content-center ">
                            <div className="text-center row  mb-3 mt-2">
                                <div className="col-md border iconss">
                                    <Link to="/horizontalMode">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="66" fill="currentColor" class="bi bi-pc-display-horizontal " viewBox="0 0 16 16">
                                            <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0h-13Zm0 1h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5ZM12 12.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0ZM1.5 12h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1ZM1 14.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 1 1 0 .5h-5.5a.25.25 0 0 1-.25-.25Z" />
                                        </svg>
                                    </Link>
                                </div>

                                <div className="col-md border iconss">
                                    <Link to="/verticalMode">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="66" fill="currentColor" class="bi bi-list " viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                        </svg>
                                    </Link>


                                </div>
                            </div>
                        </div>

                    </div>
                    {/* ///////////Have Feedback//////////// */}
                    <div className="m-5 border bg-card">
                        <p className="h4 text-center mt-2">Have Feedback</p>
                        <div className=" d-flex justify-content-center ">
                            <div className="text-center row  mb-3 mt-2 text-center">
                                <button className="wbtn rounded">We're Listening </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Sidebar;
