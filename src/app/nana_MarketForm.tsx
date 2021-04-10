import { useState } from 'react'

type MarketFormProps = {
  onSubmit: (form: {
    name: string
    category: string
    intro: string
    address: string
    period: string
    hour: string
    website: string
  }) => void
}

export default function MarketForm({ onSubmit }: MarketFormProps) {
  const [form, setForm] = useState({
    name: 'Please fill out market name',
    category: 'ex.#furniture, #kitchen',
    intro: 'Please fill out the introduction of your store',
    address: '',
    period: '',
    hour: '',
    website: '',
  })

  const { name, category, intro, address, period, hour, website } = form

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
      [category]: value,
      [intro]: value,
      [address]: value,
      [period]: value,
      [hour]: value,
      [website]: value,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(form)
    setForm({
      name: '',
      category: '',
      intro: '',
      address: '',
      period: '',
      hour: '',
      website: '',
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={name} onChange={onChange} />
      <input name="category" value={category} onChange={onChange} />
      <input name="intro" value={intro} onChange={onChange} />
      <input name="address" value={address} onChange={onChange} />
      <input name="period" value={period} onChange={onChange} />
      <input name="hour" value={hour} onChange={onChange} />
      <input name="website" value={website} onChange={onChange} />
      <button type="submit">Submit</button>
    </form>
  )
}
