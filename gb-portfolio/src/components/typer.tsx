import { TypeAnimation } from "react-type-animation";

function typer() {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed once, initially
        "We produce food for Mice",
        1000,
        "We produce food for Hamsters",
        1000,
        "We produce food for Guinea Pigs",
        1000,
        "We produce food for Chinchillas",
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
