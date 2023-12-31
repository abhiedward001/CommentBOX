import { useState, useContext, useEffect } from 'react';
import CommentDisplay from './CommentDisplay';
import dummy from './seedData';

function Comment() {

    const val = useContext(dummy);
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [data, setData] = useState(val);


    // useEffect(() => {
    //     const {data:value} = localStorage.getItem("data");
    //     if (value) {
    //         console.log("djfoe"+value)
    //       setData(value);
    //     }
    //   }, []);

    const dataHandler = (e) => {
        e.preventDefault();

        data.push({
            id: Math.floor(Math.random() * 100) + Date.now(),
            Name: name,
            Comment: comment,
            date: new Date(),
            items: []
        })
        setData(data);
        setName("");
        setComment("");
        // localStorage.setItem("data", JSON.stringify({data}));

    }

    // debugger;

    { console.log(data) };
    var x = useContext(dummy);
    console.log(x);

    return (
        <>
            <div className='w-6/12 mx-auto bg-gray-400 shadow-lg my-4 p-4 rounded-md'>
                <h1 className='text-center text-2xl my-6 font-bold'>Nested Comment Box</h1>
                <div className='mx-auto border border-gray-300 my-3 w-[550px] bg-gray-200 rounded-lg'>

                    <div className='text-center my-4 '>

                        <label className="text-black py-2 text-xl font-semibold ">Comment</label>
                        <div className="px-2 my-6">
                            <input className="border border-black rounded-md w-[400px] py-2  px-2 text-gray-400" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}></input>
                        </div>
                        <div className='my-2 px-2'>
                            <input className="border border-black rounded-md w-[400px] py-2 my-2 px-2 text-gray-400" type="text" placeholder="Comment" value={comment} onChange={(e) => setComment(e.target.value)}></input>
                        </div>

                    </div>

                    <button className='bg-blue-200 w-16 my-4 p-2 rounded-md mx-6' onClick={dataHandler}>Post</button>
                </div>

                {data.length === 0 ? (<div></div>) :
                    data.map((item) => {
                        return (
                            <CommentDisplay key={item.id} comment={item} setData={(val) => setData(val)} > </CommentDisplay>
                        )
                    })
                }
            </div>

        </>

    )
}

export default Comment;