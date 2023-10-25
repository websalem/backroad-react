import Title from './Title';
import img from './images/about.jpeg';
const About = () => {
    return (
        <section className="section" id="about">
            <div className="section-title">
                <Title title="about" span="us" />
            </div>

            <div className="section-center about-center">
                <div className="about-img">
                    <img
                        src={img}
                        className="about-photo"
                        alt="awesome beach"
                    />
                </div>
                <article className="about-info">
                    <h3>explore the difference</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
                        quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
                        unde dolor?
                    </p>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
                        quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
                        unde dolor?
                    </p>
                    <a href="#about" rel="noreferrer" className="btn">read more</a>
                </article>
            </div>
        </section>
    )
}
export default About