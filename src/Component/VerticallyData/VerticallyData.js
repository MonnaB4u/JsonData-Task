import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import ModalNav from '../Modal/ModalNav';
import Pagination from '../Pagination/Pagination';
import Sidebar from '../Sidebar/Sidebar';
import Sidebar2 from '../Sidebar/Sidebar2';
import './VerticallyData.css'
const VerticallyData = () => {

    const [data, setData] = useState([])
    const allPost = data.slice(0, 5)
    // const allPost = [...sliceData]
    // console.log(data)
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
        <div>
            <div className="container ">
                {
                    allPost.map((each, index) =>
                        <>
                            <div className="row"  >

                                <div className="col-10" onClick={() => handleBtnClick()}>
                                    <div className="d-flex mt-5 border rounded bg-card">
                                        <div className="m-3">
                                            <p className="h4"> {each.title}</p>
                                            <p className="h6">{each.body}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-2 d-flex align-items-center text-center mt-5">
                                    <div onClick={() => deleteItems(each.id)} className="cross border mx-auto  d-flex align-items-center">
                                        <p className=" m-2 text-danger mx-auto tf">X</p>
                                    </div>
                                </div>

                                {/* <!-- Modal --> */}
                                <div className="">
                                    <div id="myModal" className="modal w-75 mx-5" >
                                        <div class=" my-5 bb">
                                            <span onClick={() => handleSpan()} className="m-2 text-danger tf close">&times;</span>
                                            <ModalNav></ModalNav>
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <Sidebar2></Sidebar2>
                                                </div>
                                                <div className="col-md-9">
                                                    <div className="mx-5">
                                                        <p className="h4 mt-2 text-success">Thank You First Community for Helping Team Cymru Reach a new Csirt Assistance Program Milestone</p>
                                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, quam. Eveniet, voluptas. Vero porro aliquam enim perspiciatis delectus illum accusamus nobis atque cupiditate, tenetur ducimus odio maxime quia doloribus eaque?</p>
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
            <div className="my-4 d-flex justify-content-center ">
                {
                    allPost.length === 0 ? <h1>Data is Coming</h1> : <Pagination></Pagination>
                }
            </div>
        </div>
    );
};

export default VerticallyData;

