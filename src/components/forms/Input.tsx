export default function Input({ handleChange, label }: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-semibold">{label}</label>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Ivysaur"
        className="bg-white px-2 py-1 shadow rounded w-full focus:outline-none active:border-slate-300 active:border focus:outline-gray-400"
      />
    </div>
  )
}

type InputProps = {
  handleChange: (e: any) => void
  label: string
}
