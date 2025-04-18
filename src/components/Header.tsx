import Button from "./components/Button"
import { FaBars } from "react-icons/fa6"
import { NavLink } from "react-router-dom"
import mainLogoipsum from "../../assets/main-logoipsum.svg"

const Header: React.FC = () => {
  const handleMenuOpen = () => {
    const menu = document.getElementById("menu")
    const sidebar = document.getElementById("sidebar")

    if (menu) {
      menu.style.display = "flex"
    }

    if (sidebar) {
      setTimeout(() => {
        sidebar.style.transform = "translateX(100%)"
      }, 300)
    }

    document.documentElement.style.overflow = "hidden"
  }

  return (
    <header className="flex w-full h-[12vw] flex-row justify-between items-center bg-[var(--primary-color)] font-bold font-mulish max-sm:h-[16vw] mb-[14vh] max-sm:mb-[5vh] overflow-x-visible">
      <img
        src={mainLogoipsum}
        alt="logoipsum"
        className="h-[4vw] max-lg:h-[6vw]"
      />
      <nav className="flex flex-row w-fit h-fit justify-center gap-[3vw] text-[var(--dark-grey)] text-[2vw] max-lg:hidden mr-[-6%] overflow-hidden">
        <NavLink
          className={({ isActive }) =>
            `hover:text-[var(--blue)] transition-transform hover:scale-[1.01] focus:text-[var(--blue)] cursor-pointer ${
              isActive ? "text-[var(--blue)]" : ""
            }`
          }
          to="/"
        >
          Главная
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `hover:text-[var(--blue)] transition-transform hover:scale-[1.01] focus:text-[var(--blue)] cursor-pointer ${
              isActive ? "text-[var(--blue)]" : ""
            }`
          }
          to="/rates"
        >
          Тарифы
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `hover:text-[var(--blue)] transition-transform hover:scale-[1.01] focus:text-[var(--blue)] cursor-pointer ${
              isActive ? "text-[var(--blue)]" : ""
            }`
          }
          to="/notes"
        >
          Заметки
        </NavLink>
      </nav>
      <FaBars
        className="lg:hidden w-auto fill-[var(--blue)] cursor-pointer max-lg:mr-[-24%] h-[4vw] max-sm:mr-[-6%] max-sm:h-[5vw]"
        onClick={handleMenuOpen}
      />
      <Button
        text="Аккаунт"
        color="var(--orange)"
        width="32vw"
        height="8vw"
        textSize="3vw"
        id="accountButton"
      />
    </header>
  )
}

export default Header
