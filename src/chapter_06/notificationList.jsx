import React from "react";
import Notification from "./notification";

const reserveNotifications = [
    {
        id: 1,
        message: "안녕하세요."
    },
    {
        id: 2,
        message: "퇴근 시간입니다."
    },
    {
        id: 3,
        message: "빨리 가세요."
    },
]

var timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notifications: []
        }
    }

    componentDidMount() {
        const { notifications } = this.state;
        timer = setInterval(() => {
            if (notifications.length < reserveNotifications.length) {
                const index = notifications.length;
                notifications.push(reserveNotifications[index])
                this.setState({
                    notifications: notifications
                })
            } else {
                clearInterval(timer)
            }
        }, 1000)
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return <Notification key={notification.id} id={notification.id} message={notification.message} />
                })}
            </div>
        )
    }
}

export default NotificationList;