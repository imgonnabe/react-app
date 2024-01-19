import React, { useState } from "react"

// 함수 컴포넌트
function ConfirmButton(props) {
    const [isConfirmed, setIsConfirmed] = useState(false)// 초기값 false

    const handleConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed)// 현재 상태 반전
    }

    return (
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    )
}

export default ConfirmButton