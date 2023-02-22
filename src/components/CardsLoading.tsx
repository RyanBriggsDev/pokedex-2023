import Card from './cards/Card'

export default function CardsLoading() {
  const blue = 'h-10 w-10 animate-spin rounded-xl bg-poke-blue'
  const yellow = 'h-5 w-10 animate-spin rounded-xl bg-poke-yellow'

  return (
    <Card>
      <div className="flex gap-2 items-center justify-center">
        <div className={blue}></div>
        <div className={yellow}></div>
        <div className={blue}></div>
        <div className={yellow}></div>
        <div className={blue}></div>
      </div>
      {`Loading em' All`}
    </Card>
  )
}
