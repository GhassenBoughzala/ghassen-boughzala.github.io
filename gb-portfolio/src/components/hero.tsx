import logo from "../assets/me.png";
import Typer from "./typer";

function hero() {
  return (
    <>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={logo} className="max-w-sm rounded-lg w-48" />
          <div className="">
            {/* <h1 className="text-5xl font-bold">Hello !</h1> */}
            <h1 className="font-sans text-3xl font-bold">This is Ghassen Boughzala</h1>
            <Typer />
           
          </div>
        </div>
      </div>
    </>
  );
}

export default hero;
