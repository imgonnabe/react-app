import React from "react";
import Comment from "./comment";

const comments = [
    {
        name: "홍길동",
        comment: "안녕하세요"
    },
    {
        name: "김길동",
        comment: "리액트 재밌어요."
    },
    {
        name: "박길동",
        comment: "우왕"
    },
];

function CommentList(props){
    return(
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name = {comment.name} comment = {comment.comment}/>
                )
            })}           
        </div>
    )
}

export default CommentList;