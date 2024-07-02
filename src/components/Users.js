let Users = (props) => {
    return (
        <div className="user">
            <div className="icon">
                <img src={props.Uimg} alt="User" />
            </div>
            <div className="name">
                <p>{props.Uname}</p>
                <p>{props.Umessage}</p>
            </div>
            <div className="time">
                <p>{props.Utime}</p>
                <p>{props.Urating}</p>
            </div>
        </div>
    )
}
export default Users;
