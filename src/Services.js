import ServicesSection from "./ServicesSection"
import Title from "./Title"
const Services = () => {
    return (
        <section className="section services" id="services">
            <div className="section-title">
                <Title title="our" span="services" />
            </div>
            <div className="section-center services-center">
                <ServicesSection title="saving money" content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores, officia."  icon="fas fa-wallet fa-fw" />

                <ServicesSection title="endless hiking" content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores, officia."  icon="fas fa-tree fa-fw" />

                <ServicesSection title="amazing comfort" content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores, officia."  icon="ffas fa-socks fa-fw" />


            </div>
        </section>
    )
}
export default Services