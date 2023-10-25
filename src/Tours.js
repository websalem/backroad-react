import { tours } from "./data";
import ToursSection from "./ToursSection";
import Title from "./Title"

const Tours = () => {
    return (
        <section className="section" id="tours">
            <div className="section-title">
                <Title title="featured" span="tours" />
            </div>

            <div className="section-center featured-center">

                {tours.map(tour => {
                    return (
                        <ToursSection
                            key={tour.id}
                            img={tour.img}
                            date={tour.date}
                            title={tour.title}
                            content={tour.content}
                            icon={tour.icon}
                            destination={tour.destination}
                            duration={tour.duration}
                            price={tour.price}
                        />
                    )
                })}


            </div>
        </section>
    )
}
export default Tours