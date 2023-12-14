import React from 'react'
import { useState } from 'react';
import Reply from './Reply';

function CommentDisplay({ comment,setData}) {


    const [visible, setVisible] = useState(false);
    // console.log(comment.id);
    // console.log(comment);
    // const confused = setData;

    // debugger;

    return (
        <div className='w-9/12 mx-auto'>
            <div className='border border-gray-400 bg-gray-200 w-[500px] mx-4 px-4 my-6' key={Math.random()}>
                <div className='flex flex-wrap justify-between'>
                    <h3>{comment.Name}</h3>
                    {/* <h2>{comment.date.toLocaleString()}</h2> */}
                </div>

                <p>{comment.Comment}</p>
                <button className='bg-blue-300 w-16 my-4 ' onClick={()=>setVisible(true)}>Reply</button>
                <button className='bg-blue-300 w-16 my-4 mx-5' >Edit</button>
            </div>

            {visible && <Reply  setData={setData} replyId={comment.id} toggle={visible} setToggle={(val)=>setVisible(val) } ></Reply>}

            <div className='mx-4'>
                {comment?.items?.map((elem) => <CommentDisplay key={elem.id} comment={elem}  setData={setData}  >  </CommentDisplay>)}
            </div>
        </div>
    )
}

export default CommentDisplay