import Theme from "./theme";

function navbar() {
  return (
    <>
      <div className="navbar bg-base-100 shadow">
        <div className="flex-1">
          <a className="btn disabled btn-ghost text-xl">GB</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Contact</a>
            </li>
            <li>
              <a>Download my cv</a>
            </li>
            <li>
              <Theme />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default navbar;
