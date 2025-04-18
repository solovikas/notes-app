// import styles from "./Footer.module.css"

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center items-center w-[100vw] h-[3vw] bg-[var(--blue)] self-center text-white font-mulish font-regular text-[1.4vw] max-2xl:text-[1.6vw] max-lg:text-[2vw] max-sm:text-[3.2vw] max-lg:h-[4vw] max-sm:h-[8vw]">
      &copy; 2025 All rights reserved.
      <span className="opacity-[30%]">&nbsp;Макет канала @figma2html</span>
    </footer>
  )
}

export default Footer
