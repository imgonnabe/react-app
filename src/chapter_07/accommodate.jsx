import React, {useState, useEffect} from "react"
import useCounter from "./useCounter"

const MAX_CAPACITY = 10;

function Accommodate(props){
    const [isFull, setIsFull] = useState(false);
    const [count, increasCount, decreaseCount] = useCounter(0);

    useEffect(() => {
        console.log("====================")
        console.log("useEffect() is called")
          console.log(`isFull : ${isFull}`)
    })// 카운트 업데이트 될 때마다 호출

    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY)
        console.log(`Current count value : ${count}`)
    }, [count])// 카운트 값이 바뀔 때마다 호출

    return(
        <div style={{padding:16}}>
            <p>{`총 ${count}명 수용했습니다.`}</p>

            <button onClick={increasCount} disabled={isFull}>
                입장
            </button>
            <button onClick={decreaseCount}>퇴장</button>

            {isFull && <p style={{color:"red"}}>정원이 가득찼습니다.</p>}
        </div>
    )
}

export default Accommodate;