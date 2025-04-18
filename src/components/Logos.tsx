// import styles from "./Logos
// .module.css"

const Logos: React.FC = () => {
  return (
    <section className="w-[78vw] h-fit bg-[var(--primary-color)] flex flex-row justify-between max-xl:grid max-xl:grid-cols-2 max-xl:justify-items-center max-xl:gap-[6vh]">
      <img
        src="/notes-app/assets/logoipsum%201.svg"
        alt="logoipsum"
        className="h-[3vw] max-xl:h-[4vw] max-lg:h-[5vw] max-sm:h-[8vw]"
      />
      <img
        src="/notes-app/assets/logoipsum%202.svg"
        alt="logoipsum"
        className="h-[3vw] max-xl:h-[4vw] max-lg:h-[5vw] max-sm:h-[8vw]"
      />
      <img
        src="/notes-app/assets/logoipsum%204.svg"
        alt="logoipsum"
        className="h-[3vw] max-xl:h-[4vw] max-lg:h-[5vw] max-sm:h-[8vw]"
      />
      <img
        src="/notes-app/assets/logoipsum%205.svg"
        alt="logoipsum"
        className="h-[3vw] max-xl:h-[4vw] max-lg:h-[5vw] max-sm:h-[8vw]"
      />
      <img
        src="/notes-app/assets/logoipsum%203.svg"
        alt="logoipsum"
        className="h-[4vw] max-xl:h-[5vw] max-lg:h-[6vw] max-sm:h-[10vw] max-xl:col-span-2"
      />
    </section>
  )
}

export default Logos
