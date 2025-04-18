import about2 from "../../../../assets/about2.png"
const Analytics: React.FC = () => {
  return (
    <section className="w-full h-fit bg-[var(--primary-color)] flex flex-row-reverse justify-between items-center gap-[2vw] max-sm:gap-[0] pr-[4vw] max-sm:pr-[0] mb-[14vh] max-sm:mb-[5vh]">
      <img src={about2} alt="about" className="w-[30%]" />
      <article className="w-[54%] flex flex-col justify-center items-start gap-[2vw]">
        <h2 className="w-full h-auto font-bold text-[var(--black)] text-[4vw] font-montserrat">
          Глубокая аналитика
        </h2>
        <p className="w-full h-auto font-regular font-mulish text-[var(--dark-grey)] text-[1.4vw] max-2xl:text-[1.6vw] max-lg:text-[2vw] max-sm:text-[3.6vw] whitespace-pre-wrap">
          Точные отчёты в реальном времени прямо у вас под рукой. Получать
          данные стало проще простого.
        </p>
        <p className="w-full h-auto font-bold font-montserrat text-[var(--blue)] text-[1.4vw] max-2xl:text-[1.6vw] max-lg:text-[2vw] max-sm:text-[3.6vw] cursor-pointer">
          Узнать больше
        </p>
      </article>
    </section>
  )
}

export default Analytics
