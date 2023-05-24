import Typewriter from "typewriter-effect";

const HeroTypewriter = () =>{
    return (
        <Typewriter
            onInit={(typewriter) => {
                typewriter
                  .changeDelay(50)
                  .pauseFor(1500)
                  .typeString("A Full Stack MERN Developer")
                  .pauseFor(1400)
                  .deleteAll(15)
                  .typeString("A Full Stack LAMP Developer")
                  .pauseFor(1400)
                  .deleteAll(15)
                  .typeString("A Robotics Enthusiast")
                  .pauseFor(1200)
                  .deleteAll(15)
                  .typeString("A Code Ninja")
                  .pauseFor(1200)
                  .deleteAll(15)
                  .typeString(
                    "A <strong>Full Stack <span style='color: #27ae60;'>LAMP</span> & <span style='color: #27ae60;'>MERN</span> Developer</strong> who lives to build performant, scalable apps."
                  )
                  .pauseFor(1000)
                  .start();
            }}
        />
    )
};

export default HeroTypewriter;
