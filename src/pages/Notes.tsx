import Header from "../components/Header"
import Main from "../components/Main"
import Menu from "../components/Menu"
import Footer from "../components/Footer"
import { NotesComponent } from "../components/Notes/index"
const Notes: React.FC = () => {
  return (
    <div
      className="flex flex-col w-full h-fit min-h-screen justify-start pr-[10vw] pl-[10vw] bg-[var(--primary-color)] overflow-y-visible"
      style={{
        userSelect: "none",
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        msUserSelect: "none",
      }}
    >
      <Header />
      <Menu />
      <NotesComponent />
      <Footer />
    </div>
  )
}

export default Notes
