import { TypeAnimation } from "react-type-animation";

function typer() {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed once, initially
        "I am a Software Engineer",
        1000,
        "I am a Full Stack Developer",
        1000,
        "I am a Frontend Developer",
        1000,
        "I am a Backend Developer",
        1000,
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{
        width: "600px",
        display: "block",
        fontSize: "2em",
      }}
    />
  );
}

export default typer;
