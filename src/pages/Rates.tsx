import Header from "../components/Header"
import RatesComponent from "../components/RatesComponent"
import Main from "../components/Main"
import Menu from "../components/Menu"
import Footer from "../components/Footer"
const Rates: React.FC = () => {
  return (
    <div
      className="flex flex-col w-full h-fit min-h-screen justify-start pr-[10vw] pl-[10vw] gap-[6vw] bg-[var(--primary-color)] overflow-y-visible"
      style={{
        userSelect: "none",
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        msUserSelect: "none",
      }}
    >
      <Header />
      <Menu />
      <RatesComponent />
      <Footer />
    </div>
  )
}

export default Rates
