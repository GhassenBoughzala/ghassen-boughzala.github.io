import logo from "../assets/me.png";
function hero() {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src={logo} className="max-w-sm rounded-lg " />
          <div>
            <h1 className="text-5xl font-bold">Hello !</h1>
            <p className="py-5">
              I am Ghassen Boughzala
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default hero;
