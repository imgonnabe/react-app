function Card(props){
    const {title, backgroundColor, children} = props

    return(
        <div
            style={{
                margin:8,
                padding:8,
                borderRadius: 8,
                boxShadow: "0px 0px 4px grey",
                backgroundColor: backgroundColor || "white",
                // 첫 번째로 참인 피연산자를 반환 / props.backgroundColor가 참이면 backgroundColor가 값, 거짓이면 white
            }}// title, background 사용한 부분: specialization
        >
            {title && <h1>{title}</h1>}
            {children}
        </div>// children 사용한 부분: containment
    )
}

export default Card
