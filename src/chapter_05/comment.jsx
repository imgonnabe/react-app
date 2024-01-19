import React from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16
    },
    imageContainer: {},
    image: {
        widht: 50,
        height: 50,
        borderRadius :25
    },
    contentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        juystifyContent: "center"
    },
    nameText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold"
    },
    commentText: {
        color: "black",
        fontSize: 16
    }
}

function Comment(props){
    return(
        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
                <img
                    src="C:\Users\qorlw\Pictures\배경화면\KakaoTalk_20240111_152438665_09.jpg"
                    style={styles.image}
                />
            </div>
            <div style={styles.contentContainer}>
                <span style={styles.nameText}>{props.name}</span>
                <span style={styles.commentText}>{props.comment}</span>
            </div>
        </div>
    )
}

export default Comment;