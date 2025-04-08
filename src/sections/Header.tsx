export const Header = () => {
  return (
    <div className="flex justify-center items-center relative top-3  ">
      <nav className="flex p-1 rounded-full shadow-md border border-gray-100 gap-1 ">
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
