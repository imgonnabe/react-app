import React from "react";

// 클래스 컴포넌트
class ConfirmButton2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isConfirmed: false,
        }

        // this.handleConfirm = this.handleConfirm.bind(this)// bind 코드      
    }

    // handleConfirm(){// bind 코드
    //     this.setState((prevState) => ({
    //         isConfirmed: !prevState.isConfirmed
    //     }))
    // }
    
    handleConfirm = () => {
        this.setState((prevState) => ({
            isConfirmed: !prevState.isConfirmed
        }))
    }

    render(){
        return(
            <button
                onClick={this.handleConfirm}
                disabled={this.state.isConfirmed}
            >
                {this.state.isConfirmed?"확인됨":"확인하기"}
            </button>
        )
    }
}

export default ConfirmButton2