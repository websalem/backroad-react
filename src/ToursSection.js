const ToursSection = (props) => {
    return (
        <article className="tour-card">
            <div className="tour-img-container">
                <img src={props.img} className="tour-img" alt={props.title} />
                <p className="tour-date">{props.date}</p>
            </div>
            <div className="tour-info">
                <div className="tour-title">
                    <h4>{props.title}</h4>
                </div>
                <p>
                    {props.content}
                </p>
                <div className="tour-footer">
                    <p>
                        <span><i className="fas fa-map"></i></span> {props.destination}
                    </p>
                    <p>{props.duration}</p>
                    <p>{props.price}</p>
                </div>
            </div>
        </article>
    )
}
export default ToursSection