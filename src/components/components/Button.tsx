export interface IButtonProps {
  text: string
  color: string
  width: string
  height: string
  textSize: string
  id: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<IButtonProps> = props => {
  const { text, color, width, height, textSize, id, onClick } = props
  return (
    <button
      className={`text-white bg-[${color}] font-bold w-[18vw] h-[5vw] text-[1.8vw] rounded-[0.6vw] font-mulish max-lg:w-[20vw] max-lg:h-[6vw] max-lg:text-[2vw] max-sm:text-[${textSize}] max-sm:w-[${width}] max-sm:h-[${height}] cursor-pointer transition-transform hover:scale-[1.01] ease-out duration-300`}
      id={`${id}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
