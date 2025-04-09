export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-50 ">
      <nav className="flex p-1 rounded-full shadow-sm border bg-white/10 backdrop-blur border-gray-200 gap-1 ">
        <a href="#" className="nav-item">
          Home
        </a>
        <a href="#" className="nav-item">
          Project
        </a>
        <a href="#" className="nav-item">
          About
        </a>
        <a
          href="#"
          className="nav-item bg-gray-900 hover:bg-gray-700 text-white"
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
