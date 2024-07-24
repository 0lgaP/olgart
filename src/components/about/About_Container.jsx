import "./About_Container.css";

const About_Container = ({ children }) => {

    return (
        <section id="about">
            <div className="about__content">
                {children}
            </div>
        </section>
    );
};

export default About_Container;
