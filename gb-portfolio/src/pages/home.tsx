import Hero from "../components/hero";

function home() {
  return (
    <>
      <Hero />
      <div className="hero bg-base-100">
        <div className="max-w-sm hero-content flex-col lg:flex-row">
          <h1 className="font-sans text-4xl font-bold">ABOUT ME</h1>
          <p>Hi</p>
        </div>
      </div>
    </>
  );
}

export default home;
