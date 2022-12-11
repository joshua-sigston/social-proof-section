const Card = (props) => {
    return (
        <div className="quote_container flex_column">
                <div className="profile flex_row">
                    <img src={props.image} alt="" className="profile_img"/>
                    <div className="profile_info flex_column">
                        <p className="name">{props.name}</p>
                        <p className="role">{props.title}</p>
                    </div>
                </div>
                <div className="quote">
                    <p>{props.quote}</p>
                </div>
            </div>
    )
}
export default Card