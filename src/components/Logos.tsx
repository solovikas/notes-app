import logoipsum1 from "../../assets/logoipsum 1.svg"
import logoipsum2 from "../../assets/logoipsum 2.svg"
import logoipsum3 from "../../assets/logoipsum 3.svg"
import logoipsum4 from "../../assets/logoipsum 4.svg"
import logoipsum5 from "../../assets/logoipsum 5.svg"

const Logos: React.FC = () => {
  return (
    <section className="w-[78vw] h-fit bg-[var(--primary-color)] flex flex-row justify-between max-xl:grid max-xl:grid-cols-2 max-xl:justify-items-center max-xl:gap-[6vh]">
      <img
        src={logoipsum1}
        alt="logoipsum"
        className="h-[3vw] max-xl:h-[4vw] max-lg:h-[5vw] max-sm:h-[8vw]"
      />
      <img
        src={logoipsum2}
        alt="logoipsum"
        className="h-[3vw] max-xl:h-[4vw] max-lg:h-[5vw] max-sm:h-[8vw]"
      />
      <img
        src={logoipsum4}
        alt="logoipsum"
        className="h-[3vw] max-xl:h-[4vw] max-lg:h-[5vw] max-sm:h-[8vw]"
      />
      <img
        src={logoipsum5}
        alt="logoipsum"
        className="h-[3vw] max-xl:h-[4vw] max-lg:h-[5vw] max-sm:h-[8vw]"
      />
      <img
        src={logoipsum3}
        alt="logoipsum"
        className="h-[4vw] max-xl:h-[5vw] max-lg:h-[6vw] max-sm:h-[10vw] max-xl:col-span-2"
      />
    </section>
  )
}

export default Logos
