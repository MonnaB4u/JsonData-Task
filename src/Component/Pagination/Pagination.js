import React, { useEffect, useState } from 'react';
import './Pagination.css'

const Pagination = () => {

 const [data, setData] = useState([])
    const allPost = data.slice(0, 5)

    // console.log(data)

    useEffect(() => {
        const url = ('https://jsonplaceholder.typicode.com/posts')
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))

    }, [])

    return (
        <div className="">
            <nav aria-label="...">
                <ul class="pagination">
                    <li class=""><a class="roundeds" href="#">1</a></li>
                    <li class=" mx-2 ">
                        <a class="roundeds" href="#">2 <span class="sr-only"></span></a>
                    </li>

                    <li class="page-item"><a class="roundeds" href="#">3</a></li>

                    <li class="page-item">
                        <a class="roundeds mx-2" href="#"> <span>>></span> </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
