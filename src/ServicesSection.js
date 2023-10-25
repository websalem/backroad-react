const ServicesSection = (props) => {
    return (
        <article class="service">
            <span class="service-icon"><i class={props.icon}></i></span>
            <div class="service-info">
                <h4 class="service-title">{props.title}</h4>
                <p class="service-text">
                    {props.content}
                </p>
            </div>
        </article>
    )
}
export default ServicesSection