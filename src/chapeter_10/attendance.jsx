import React from "react";

const students = [
    {
        id: 1,
        name: "Steve"
    },
    {
        id: 2,
        name: "Charlie"
    },
    {
        id: 3,
        name: "Jeff"
    },
    {
        id: 4,
        name: "Mark"
    }
]

function Attendance(props){
    return(
        <ul>
            {students.map((student) => {
                return <li key={`student-id-${student.id}`}>{student.name}
                {console.log(`student-id-${student.id}`)}</li>// 키 값을 빼먹지 않고 넣어줘야 함
            })}
        </ul>
    )
}

export default Attendance;