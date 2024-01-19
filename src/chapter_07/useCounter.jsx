import React, {useState} from "react";

function useCounter(initialValue){
    const [count, setCount] = useState(initialValue);

    const increasCount = () => setCount((count) => count + 1);
    const decreaseCount = () => setCount((count) => Math.max(count - 1, 0));

    return [count, increasCount, decreaseCount]
}

export default useCounter;