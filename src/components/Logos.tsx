// import styles from "./Logos
// .module.css"

const Logos: React.FC = () => {
  return (
    <section className="w-[78vw] h-fit bg-[var(--primary-color)] flex flex-row justify-between max-xl:grid max-xl:grid-cols-2 max-xl:justify-items-center max-xl:gap-[6vh]">
      <img
        src="./assets/logoipsum 1.svg"
        alt="logoipsum"
        className="h-[3vw] max-xl:h-[4vw] max-lg:h-[5vw] max-sm:h-[8vw]"
      />
      <img
        src="./assets/logoipsum 2.svg"
        alt="logoipsum"
        className="h-[3vw] max-xl:h-[4vw] max-lg:h-[5vw] max-sm:h-[8vw]"
      />
      <img
        src="./assets/logoipsum 4.svg"
        alt="logoipsum"
        className="h-[3vw] max-xl:h-[4vw] max-lg:h-[5vw] max-sm:h-[8vw]"
      />
      <img
        src="./assets/logoipsum 5.svg"
        alt="logoipsum"
        className="h-[3vw] max-xl:h-[4vw] max-lg:h-[5vw] max-sm:h-[8vw]"
      />
      <img
        src="./assets/logoipsum 3.svg"
        alt="logoipsum"
        className="h-[4vw] max-xl:h-[5vw] max-lg:h-[6vw] max-sm:h-[10vw] max-xl:col-span-2"
      />
    </section>
  )
}

export default Logos
