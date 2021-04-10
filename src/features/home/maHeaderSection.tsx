import { useNavigate } from 'react-router-dom'
import check from 'src/components/icons/check.svg'
import { Box } from 'src/components/layout/Box'
import { Font } from 'src/styles/fonts'
import { mq } from 'src/styles/mediaQueries'
import { Stylesheet } from 'src/styles/types'

export function HeaderSection() {
  const navigate = useNavigate()
  return (
    <Box direction="column" align='center'>
      <h1 css={style.header}>Mark-At!</h1>
      <Box direction="column" align='start'>
        <label css={[Font.body, Font.bold]}>Earn your special marks buying from local markets!</label>
          
        <Box direction="row" align="start" margin='2em 0 0 0'>
          <img src={check} css={style.icon} alt="Tip" />
          <p css={style.tip}>Buy stuffs that you want to buy with celo!</p>
        </Box>
        <Box direction="row" align="start">
          <img src={check} css={style.icon} alt="Tip" />
          <p css={style.tip}>Get any cool stuffs from flea market near your place!</p>
        </Box>
        <Box direction="row" align="start">
          <img src={check} css={style.icon} alt="Tip" />
          <p css={style.tip}>Get your footprint NFT buying from market!</p>
        </Box>
        <Box direction="row" align="start">
          <img src={check} css={style.icon} alt="Tip" />
          <p css={style.tip}>Create indigenous picture with your footprint NFTs!</p>
        </Box>
      </Box>
      <Box direction="row" align="center" margin="3em 0 0 0">
        <button style={style.btn} onClick={() => navigate('/market')}>Move to market close to you</button>
      </Box>
    </Box>
  )
}

const style: Stylesheet = {
  header: {
    [mq[768]]: {
      display: 'block',
      ...Font.h1,
      margin: '0.2em 0 1.2em 0',
    },
  },
  icon: {
    marginRight: '0.5em',
    height: '2em',
    width: '2em',
  },
  tip: {
    ...Font.body,
    lineHeight: '1.4em',
    margin: '1em 0 0 0',
  },
  btn: {
    width: '15em',
    height:'3em',
    marginTop: '1.5em',
    background: 'linear-gradient(0.25turn,rgba(247,214,55),rgba(47,207,87))',
    outline: 'none',
    border: 'none',
    borderRadius: 10,
    fontWeight: 500,
    color: 'rgba(255,255,255)',
    font: "Poppins-Medium"
  },


}
