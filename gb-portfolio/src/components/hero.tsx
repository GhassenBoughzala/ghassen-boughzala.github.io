import logo from "../assets/me.png";
import Typer from "./typer";
function hero() {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src={logo} className="max-w-sm rounded-lg w-48" />
          <div className="">
            {/* <h1 className="text-5xl font-bold">Hello !</h1> */}
            <Typer />
            <p className="py-5">I am Ghassen Boughzala</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default hero;
