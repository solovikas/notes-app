import Header from "../components/Header"
import Main from "../components/Main"
import About from "../components/About/About"
import Menu from "../components/Menu"
import Footer from "../components/Footer"
const Home: React.FC = () => {
  return (
    <div
      className="min-sm:hidden flex flex-col w-full h-fit min-h-screen justify-start pr-[10vw] pl-[10vw] bg-[var(--primary-color) overflow-y-visible menu_clicked"
      style={{
        userSelect: "none",
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        msUserSelect: "none",
      }}
    >
      <Header />
      <Main />
      <Menu />
      <About />
      <Footer />
    </div>
  )
}

export default Home
