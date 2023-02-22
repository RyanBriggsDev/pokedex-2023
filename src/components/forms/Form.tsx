import Input from './Input'
import Button from '../Button'

export default function Form({
  handleChange,
  handleSubmit,
  button,
  label,
}: FormProps) {
  return (
    <form autoComplete={'off'} className="w-full flex gap-2 flex-col">
      <Input handleChange={handleChange} label={label} />
      {button && <Button text="Search" handleClick={handleSubmit} />}
    </form>
  )
}

type FormProps = {
  handleChange: () => void
  handleSubmit: () => void
  label: string
  button: undefined | boolean
}
