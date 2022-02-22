import React from 'react';

const Sidebar3 = (props) => {
      let handleBtnClick = () => {
        let modal = document.getElementById("myModal");
        modal.style.display = 'block';
    }

    let handleSpan = () => {
        let modal = document.getElementById("myModal");
        modal.style.display = "none";
    }
    return (
        <div>
            <div>
                <div className="row">
                    <div className="col-md- mx-3 sideHead sticky bg-box2" style={{ minHeight: '70vh', minWidth: '250px' }}>
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

                <div className="m-5 border bg-card">
                    <p className="h4 text-center mt-2">Have Feedback</p>
                    <div className=" d-flex justify-content-center ">
                        <div  className="text-center row  mb-3 mt-2 text-center">
                            <button className="wbtn rounded bg-danger text-white">We're Listening </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar3;
