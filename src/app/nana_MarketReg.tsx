import MarketForm from 'src/app/nana_MarketForm'

function MarketReg() {
  const onSubmit = (form: {
    name: string
    categ: string
    desc: string
    location: string
    period: string
    hour: string
    website: string
    mainpic: string
    pic1: string
    pic2: string
    pic3: string
  }) => {
    console.log(form)
  }

  return (
    <div>
      <MarketForm onSubmit={onSubmit} />
    </div>
  )
}

export default MarketReg
