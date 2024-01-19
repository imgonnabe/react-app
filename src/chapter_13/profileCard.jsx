import Card from "./card";

function ProfileCard(props){
    return(
        <Card title="제목" backgroundColor="green">
            <p>안녕하세요.</p>
            <p>리액트 공부</p>
        </Card>// <p>가 children
    )
}

export default ProfileCard