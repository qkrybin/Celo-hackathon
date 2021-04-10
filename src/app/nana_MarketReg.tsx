import MarketForm from 'src/app/nana_MarketForm'

function MarketReg() {
  const onSubmit = (form: {
    name: string
    category: string
    intro: string
    address: string
    period: string
    hour: string
    website: string
  }) => {
    console.log(form)
  }

  return (
    <div>
      <h2>Add My Market</h2>
      <MarketForm onSubmit={onSubmit} />
    </div>
  )
}

export default MarketReg
