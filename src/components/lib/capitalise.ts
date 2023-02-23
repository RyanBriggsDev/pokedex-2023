const capitalise = (input: string) => {
  let lower = input.toLowerCase()
  let first = lower.charAt(0)
  let upper = first.toUpperCase()
  let remainer = lower.slice(1)
  let capResult = upper + remainer
  return capResult
}

export default capitalise
