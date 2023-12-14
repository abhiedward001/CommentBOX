import React from 'react'
import { useState } from 'react';
import Reply from './Reply';

function CommentDisplay({ comment,setData}) {


    const [visible, setVisible] = useState(false);
   
    return (
        <div className='w-9/12 mx-auto'>
            <div className='border border-gray-400 bg-gray-200 w-[500px] mx-4 px-4 my-6 py-4 rounded-lg'>
                <div className='flex flex-wrap justify-between'>
                    <h3 className='my-3 font-medium'>{comment.Name}</h3>
                    <h2 className='text-gray-500'>{comment?.date?.toLocaleString()}</h2>
                </div>

                <p className='text-gray-700 my-2'>{comment.Comment}</p>

                <button className='bg-indigo-200 w-15 my-4 rounded-md mx-4 p-2 ' onClick={()=>setVisible(true)}>Reply</button>
                <button className='bg-gray-700 text-white w-15 my-4 rounded-md mx-4 p-2'>Edit</button>
            </div>

           <div >
           {visible && <Reply  setData={setData} replyId={comment.id} toggle={visible} setToggle={(val)=>setVisible(val) } ></Reply>}
            </div> 

            <div className='mx-4'>
                {comment?.items?.map((elem) => <CommentDisplay key={elem.id} comment={elem}  setData={setData}  >  </CommentDisplay>)}
            </div>
        </div>
    )
}

export default CommentDisplay;