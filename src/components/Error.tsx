export default function Error({ text }: ErrorProp) {
  return (
    <div className="bg-red-600 text-white rounded text-l p-3 w-fit">{text}</div>
  )
}

type ErrorProp = {
  text: string
}
;``
