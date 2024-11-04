import { ImStatsBars } from "react-icons/im";

function Nav() {
  return (
    <header className="container max-w-2xl px-6 py-6 mx-auto">
      <div className="flex items-center justify-between">
        {/* User information */}
        <div className="flex items-center gap-2">
          {/* img */}
          <div className="h-[80px] w-[80px] rounded-full overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s"
              alt="Profile image"
            />
          </div>

          {/* name */}
          <big className="font-bold">Hi, Stavros!</big>
        </div>

        {/* Right side of our navigation */}
        <nav className="flex items-center gap-4">
          <div>
            <ImStatsBars className="text-4xl" />
          </div>
          <div>
            <button className="btn btn-danger text-12xl">Sign out</button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
