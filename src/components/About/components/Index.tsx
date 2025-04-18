import about1 from "../../../../assets/about1.png"
const Index: React.FC = () => {
  return (
    <section className="w-full h-fit bg-[var(--primary-color)] flex flex-row justify-between items-center gap-[2vw] pr-[4vw] max-sm:gap-[0] max-sm:pr-[0] mb-[14vh] max-sm:mb-[5vh]">
      <img src={about1} alt="about" className="w-[30%]" />
      <article className="w-[54%] flex flex-col justify-center items-start gap-[2vw]">
        <h2 className="w-full h-auto font-bold text-[var(--black)] text-[4vw] font-montserrat">
          Индекс заметок
        </h2>
        <p className="w-full h-auto font-regular font-mulish text-[var(--dark-grey)] text-[1.4vw] max-2xl:text-[1.6vw] max-lg:text-[2vw] max-sm:text-[3.6vw] whitespace-pre-wrap">
          Ежедневные обновления, которые помогут вам использовать новейшие
          инструменты, которые оптимизируют процесс планирования и организации
          идей.
        </p>
        <p className="w-full h-auto font-bold font-montserrat text-[var(--blue)] text-[1.4vw] max-2xl:text-[1.6vw] max-lg:text-[2vw] max-sm:text-[3.6vw] cursor-pointer">
          Узнать больше
        </p>
      </article>
    </section>
  )
}

export default Index
