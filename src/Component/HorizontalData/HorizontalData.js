import React, { useEffect, useState } from 'react';
import ModalNav from '../Modal/ModalNav';
import Pagination from '../Pagination/Pagination';
import Sidebar2 from '../Sidebar/Sidebar2';
import './HorizontalData.css'
const HorizontalData = () => {
    const [data, setData] = useState([])
    const sliceData = data.slice(0, 9)
    // const allPost = [...sliceData]

    // const shuffle = a => {
    //     for (let i = a.length; i; i--) {
    //         let j = Math.floor(Math.random() * i);
    //         [a[i - 1], a[j]] = [a[j], a[i - 1]];
    //     }
    // }
    // shuffle(allPost);



    useEffect(() => {
        const url = ('https://jsonplaceholder.typicode.com/posts')
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))

    }, [])

    const d = new Date()
    const weekDay = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'may', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    const day = weekDay[d.getDay()]
    const month = months[d.getMonth()]
    const date = d.getDate()
    const year = d.getFullYear()
    // let time = (d.getHours() / 12).toFixed()
    let time = d.getHours()
    let minutes = d.getMinutes()
    // let minute=minutes < 10 ? '0'+minutes : minutes;
    let GMT = time >= 12 ? 'pm' : 'am'


    const deleteItems = e => {
        const newPost = [...data];
        newPost.splice(0, 1);
        setData(newPost);

    };


    let handleBtnClick = () => {
        let modal = document.getElementById("myModal");
        modal.style.display = 'block';
    }

    let handleSpan = () => {
        let modal = document.getElementById("myModal");
        modal.style.display = "none";
    }


    return (
        <div className="container">
            <div className="">
                <div className="row mt-5 d-flex justify-content-center">
                    {
                        sliceData.map((each, index) =>
                            <>
                                <div className="col-3 mx-3 bg-bozx m-3 card">

                                    <div className=""  onClick={() => handleBtnClick()}>
                                        <div className="d-flex justify-content-end" >
                                            <p onClick={() => deleteItems(index)} className=" text-danger tf">X</p>
                                        </div>
                                        <p className="text-center" style={{ fontWeight: "bold" }}>  {each.title}</p>
                                        <div className="border-top">
                                            <p>{each.body}</p>
                                        </div>
                                        <div className="tc">
                                            <small className="mx-1">{day}</small>
                                            <small>{date}</small>
                                            <small className="mx-1">{month}</small>
                                            <small className="m-1">{year}</small>
                                            <small>{time}:{minutes} {GMT}</small>
                                        </div>
                                    </div>

                                    {/* <!-- Modal --> */}
                                     <div className="">
                                    <div id="myModal" className="modal w-75 mx-5 px-5" >
                                        <div class=" my-5 bb">
                                            <span onClick={() => handleSpan()} className="m-2 text-danger tf close">&times;</span>
                                            <ModalNav></ModalNav>
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <Sidebar2></Sidebar2>
                                                </div>
                                                <div className="col-md-9">
                                                    <div className="mx-5">
                                                        <h4 className="h4 mt-2 text-success">Thank You First Community for Helping Team Cymru Reach a new Csirt Assistance Program Milestone</h4>
                                                        <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, quam. Eveniet, voluptas. Vero porro aliquam enim perspiciatis delectus illum accusamus nobis atque cupiditate, tenetur ducimus odio maxime quia doloribus eaque?</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                    {/* <!-- Modal --> */}
                                </div>

                            </>
                        )
                    }
                </div>
                {
                    sliceData &&
                    <div className="d-flex justify-content-center mt-3">
                        {
                            sliceData.length === 0 ? <h1>Data is Coming</h1> : <Pagination></Pagination>
                        }
                    </div>
                }
            </div>

        </div>
    );
};

export default HorizontalData;
