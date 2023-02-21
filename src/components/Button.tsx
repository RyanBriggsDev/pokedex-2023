export default function Button({ handleClick, text, type }: ButtonProps) {
  return (
    <button
      className={`px-2 py-1 flex bg w-fit text-lg rounded
      ${
        type === 'yellow'
          ? 'bg-poke-yellow text-black'
          : 'bg-poke-blue text-white'
      }`}
      onClick={handleClick}
    >
      {text}
    </button>
  )
}

type ButtonProps = {
  handleClick: () => void
  text: string
  type?: string | boolean
}
