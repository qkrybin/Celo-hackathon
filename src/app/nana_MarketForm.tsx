import { useState } from 'react';
import { Box } from 'src/components/layout/Box';
import Uploading from "src/features/sellerprofile/utils/Uploading";
import { mq } from 'src/styles/mediaQueries';
import { Stylesheet } from 'src/styles/types';

type MarketFormProps = {
  onSubmit: (form: {
    name: string
    categ: string
    desc: string
    location: string
    period: string
    hour: string
    website: string
    mainpic: string,
    pic1: string,
    pic2: string,
    pic3: string,
  }) => void
}

export default function MarketForm({ onSubmit }: MarketFormProps) {
  const [form, setForm] = useState({
    name: 'Please fill out market name',
    categ: 'ex.#furniture, #kitchen',
    desc: 'Please fill out the introduction of your store',
    location: '',
    period: '',
    hour: '',
    website: '',
    mainpic:'',
    pic1: '',
    pic2: '',
    pic3: '',
  })

  const { name, categ, desc, location, period, hour, website,mainpic,pic1,pic2,pic3 } = form

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
      [categ]: value,
      [desc]: value,
      [location]: value,
      [period]: value,
      [hour]: value,
      [website]: value,
      [mainpic]: value,
      [pic1]: value,
      [pic2]: value,
      [pic3]: value,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(form)
    setForm({
      name: '',
      categ: '',
      desc: '',
      location: '',
      period: '',
      hour: '',
      website: '',
      mainpic:'',
      pic1: '',
      pic2: '',
      pic3: ''
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <Box direction="column" align="center" styles={style.inputContainer}>
      <h2>Add My Market</h2>
      <Box direction="row" align="center" >
        <Uploading opt="mainpic" {...{ setForm }}/>
        <span></span>
        <Uploading opt="pic1"{...{ setForm }}/>
        <span></span>
        <Uploading opt="pic2"{...{ setForm }}/>
        <span></span>
        <Uploading opt="pic3"{...{ setForm }}/>
      </Box>
      <Box direction="row" margin="2em 0 0 0">
      <span css={style.inputLabel}>market name</span>
      <input name="name" type="text" value={name} onChange={onChange} />
      </Box>
      <Box direction="row" margin="2em 0 0 0">
      <span css={style.inputLabel}>category</span>
      <input name="categ" type="text" value={categ} onChange={onChange} />
      </Box>
      <Box direction="row" margin="2em 0 0 0">
      <span css={style.inputLabel}>description</span>
      <input name="desc" type="text" value={desc} onChange={onChange} />
      </Box>
      <Box direction="row" margin="2em 0 0 0">
      <span css={style.inputLabel}>loaction</span>
      <input name="location" type="text" value={location} onChange={onChange} />
      </Box>
      <Box direction="row" margin="2em 0 0 0">
      <span css={style.inputLabel}>open period</span>
      <input name="period" type="text" value={period} onChange={onChange} />
      </Box>
      <Box direction="row" margin="2em 0 0 0">
      <span css={style.inputLabel}>open hour</span>
      <input name="hour" type="text" value={hour} onChange={onChange} />
      </Box>
      <Box direction="row" margin="2em 0 0 0">
      <span css={style.inputLabel}>website</span>
      <input name="website" type="text" value={website} onChange={onChange} />
      </Box>
      <button type="submit">Submit</button>
      </Box>
    </form>

  )
}


const style: Stylesheet = {
  formContent: {
    [mq[480]]: {
      marginLeft: '-1.3em',
    },
  },
  inputContainer: {
    marginTop: '1.5em',
    textAlign: 'right',
  },
  inputLabel: {
    textAlign: 'left',
    width: '6em',
    paddingRight: '1em',
    [mq[480]]: {
      width: '8em',
    },
  },
}
