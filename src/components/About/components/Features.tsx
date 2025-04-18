const Features: React.FC = () => {
  return (
    <section className=" w-full h-fit flex flex-row justify-between items-start gap-[3vw] max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:gap-[10vh] mb-[14vh] max-sm:mb-[10vh]">
      <div className="w-fit h-fit flex flex-col justify-center items-center text-center gap-[1vw]">
        <img
          src="/notes-app/assets/icon 001.png"
          alt="icon 1"
          className="w-auto h-[40%] max-sm:w-[40%] transition-transform hover:translate-y-[-2%] ease-out duration-300"
        />
        <h3 className="w-full h-auto font-bold text-[var(--black)] text-[2.6vw] font-montserrat max-sm:text-[3.6vw]">
          Анализ использования
        </h3>
        <p className="w-full h-auto font-regular font-mulish text-[var(--dark-grey)] text-[1.4vw] max-2xl:text-[1.6vw] max-lg:text-[2vw] max-sm:text-[3.6vw] whitespace-pre-wrap">
          Оценка эффективности использования приложения для записи заметок и
          планирования задач.
        </p>
      </div>
      <div className="w-fit h-fit flex flex-col justify-center items-center text-center gap-[1vw]">
        <img
          src="/notes-app/assets/icon 002.png"
          alt="icon 2"
          className="w-auto h-[40%] max-sm:w-[40%] transition-transform hover:translate-y-[-2%] ease-out duration-300"
        />
        <h3 className="w-full h-auto font-bold text-[var(--black)] text-[2.6vw] font-montserrat max-sm:text-[3.6vw]">
          Оптимизация ценовой стратегии
        </h3>
        <p className="full h-auto font-regular font-mulish text-[var(--dark-grey)] text-[1.4vw] max-2xl:text-[1.6vw] max-lg:text-[2vw] max-sm:text-[3.6vw] whitespace-pre-wrap">
          Проверьте, как ваш подход к ценообразованию может быть улучшен для
          повышения эффективности.
        </p>
      </div>
      <div className="w-fit h-fit flex flex-col justify-center items-center text-center gap-[1vw]">
        <img
          src="/notes-app/assets/icon 003.png"
          alt="icon 3"
          className="w-auto h-[40%] max-sm:w-[40%] transition-transform hover:translate-y-[-2%] ease-out duration-300"
        />
        <h3 className="w-full h-auto font-bold text-[var(--black)] text-[2.6vw] font-montserrat max-sm:text-[3.6vw]">
          Улучшение удержания идей
        </h3>
        <p className="w-full h-auto bg-[var(--primary-color)] font-regular font-mulish text-[var(--dark-grey)] text-[1.4vw] max-2xl:text-[1.6vw] max-lg:text-[2vw] max-sm:text-[3.6vw] whitespace-pre-wrap">
          Выявите возможности для оптимизации процесса записи, чтобы не терять
          важные мысли и идеи.
        </p>
      </div>
    </section>
  )
}

export default Features
