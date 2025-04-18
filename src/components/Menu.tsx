import { NavLink } from "react-router-dom"
import { MdClose } from "react-icons/md"

const Menu: React.FC = () => {
  const handleMenuClose = () => {
    const menu = document.getElementById("menu")
    const sidebar = document.getElementById("sidebar")

    if (sidebar) {
      sidebar.style.transform = "translateX(-100%)"
    }

    if (menu) {
      setTimeout(() => {
        menu.style.display = ""
      }, 300)
    }

    document.documentElement.style.overflow = "visible"
  }

  const handleLinkSwitch = () => {
    const menu = document.getElementById("menu")
    const sidebar = document.getElementById("sidebar")

    if (sidebar) {
      sidebar.style.transform = "translateX(-100%)"
    }

    if (menu) {
      setTimeout(() => {
        menu.style.display = ""
      }, 300)
    }

    document.documentElement.style.overflow = "visible"
  }
  return (
    <div
      id="menu"
      className="lg:hidden hidden w-screen h-screen bg-[var(--transparent-white)] backdrop-blur-sm absolute z-10 top-0 left-[0]"
    >
      <div
        id="sidebar"
        className="lg:hidden flex flex-col justify-center items-center w-[66%] max-sm:w-[54%] h-screen bg-[var(--blue)] text-[var(--white)] absolute z-10 top-0 left-[0] transform transition duration-300 ease-out translate-x-[-100%] text-[6vw] text-center gap-[4vw] font-bold font-mulish"
      >
        <MdClose
          id="closeButton"
          className="absolute top-[1rem] right-[1rem] h-[2rem] w-auto aspect-square text-[var(--primary-color)]"
          onClick={handleMenuClose}
        />
        <NavLink
          id="navlink"
          className={({ isActive }) =>
            `lg:hover:text-[var(--blue)] cursor-pointer ${
              isActive ? "text-[var(--orange)]" : "text-[var(--primary-color)]"
            }`
          }
          to="/"
          onClick={handleLinkSwitch}
        >
          Главная
        </NavLink>
        <NavLink
          id="navlink"
          className={({ isActive }) =>
            `lg:hover:text-[var(--blue)] cursor-pointer ${
              isActive ? "text-[var(--orange)]" : "text-[var(--primary-color)]"
            }`
          }
          to="/rates"
          onClick={handleLinkSwitch}
        >
          Тарифы
        </NavLink>
        <NavLink
          id="navlink"
          className={({ isActive }) =>
            `lg:hover:text-[var(--blue)] cursor-pointer ${
              isActive
                ? "text-[var(--orange)]"
                : "text-[var(--primary-color)]"
            }`
          }
          to="/notes"
          onClick={handleLinkSwitch}
        >
          Заметки
        </NavLink>
      </div>
    </div>
  )
}

export default Menu
