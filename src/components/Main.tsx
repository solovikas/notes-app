import Button from "./components/Button"
import "../App.css"
import Logos from "./Logos"
import arrowDown from "../../assets/arrow down.svg"
import hero3D from "../../assets/hero 3D.png"

const Main: React.FC = () => {
  return (
    <main
      id="main"
      className={`flex flex-row w-full bg-[var(--primary-color)] justify-between items-start max-sm:flex-col-reverse max-sm:justify-end max-sm:items-center max-sm:gap-[0] mb-[14vh] max-sm:mb-[10vh] relative overflow-y-hidden`}
    >
      <section className="w-[54%] h-inherit flex flex-col justify-center items-start max-sm:items-center max-sm:w-[100%] max-sm:h-auto gap-[16vh] max-2xl:gap-[12vh] max-lg:gap-[10vh] max-sm:gap-[7vh] overflow-visible">
        <article className="w-fit flex flex-col justify-center items-start gap-[4vh] max-sm:items-center max-sm:gap-[2vh]">
          <h1 className="font-bold text-[var(--black)] text-[4.6vw] font-montserrat max-sm:text-center max-sm:text-[6.6vw]">
            Создавай заметки
            <br />
            онлайн бесплатно
          </h1>
          <p className="font-regular font-mulish text-[var(--dark-grey)] text-[1.4vw] max-2xl:text-[1.6vw] max-lg:text-[2vw] max-sm:text-[3.6vw] max-sm:text-center whitespace-pre-wrap">
            Планируй день эффективно, управляй временем и сохраняй важные идеи
            вместе с нами. Быстрый онлайн-редактор персональных заметок создан
            для повышения продуктивности, позволяя сосредоточиться на том, что
            действительно важно, и достигать своих целей с легкостью и
            удовольствием!
          </p>
        </article>
        <div className="flex flex-row justify-start items-center gap-[2vw] max-lg:gap-[4vw] max-sm:gap-[6vw] mb-[2vh] overflow-visible">
          <Button
            text="Начать"
            color="var(--blue)"
            width="56vw"
            height="12vw"
            textSize="3.6vw"
            id="startButton"
          />
          <img
            src={arrowDown}
            alt="arrow down"
            className="h-[5vw] max-lg:h-[6vw] max-sm:h-[12vw]"
          />
        </div>
        <Logos />
      </section>
      <img
        src={hero3D}
        alt="main"
        className="w-[66vh] h-auto max-sm:w-auto max-sm:h-[34vh]"
      />
    </main>
  )
}

export default Main
