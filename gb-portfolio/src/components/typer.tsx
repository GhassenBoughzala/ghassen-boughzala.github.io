import { TypeAnimation } from "react-type-animation";

function typer() {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed once, initially
        "Software Engineer",
        1500,
        "Backend Developer",
        1500,
        "Full Stack Developer",
        1500,
        "Java & Spring Boot Specialist",
        1500,
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      className="text-primary font-semibold text-2xl md:text-3xl"
    />
  );
}

export default typer;
