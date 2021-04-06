import { useNavigate } from 'react-router-dom'
import { Button } from 'src/components/buttons/Button'
import check from 'src/components/icons/check.svg'
import { Box } from 'src/components/layout/Box'
import { Color } from 'src/styles/Color'
import { Font } from 'src/styles/fonts'
import { mq } from 'src/styles/mediaQueries'
import { Stylesheet } from 'src/styles/types'

export function HeaderSection() {
  const navigate = useNavigate()
  return (
    <Box direction="column" align='center'>
      <h1 css={style.header}>Mark-At!</h1>
      <Box direction="column" align='center'>

          <label css={[Font.body, Font.bold]}>Earn your special marks buying from local markets!</label>
          
        <Box direction="row" align="center" margin='2em 0 0 0'>
          <img src={check} css={style.icon} alt="Tip" />
          <p css={style.tip}>Buy stuffs that you want to buy with celo!</p>
        </Box>
        <Box direction="row" align="center">
          <img src={check} css={style.icon} alt="Tip" />
          <p css={style.tip}>Get any cool stuffs from flea market near your place!</p>
        </Box>
        <Box direction="row" align="center">
          <img src={check} css={style.icon} alt="Tip" />
          <p css={style.tip}>Get your footprint NFT buying from market!</p>
        </Box>
        <Box direction="row" align="center">
          <img src={check} css={style.icon} alt="Tip" />
          <p css={style.tip}>Create indigenous picture with your footprint NFTs!</p>
        </Box>
      </Box>
      <Box direction="row" align="center" margin="3em 0 0 0">
        <Button onClick={() => navigate('/wallet')}>Move to market close to you</Button>
      </Box>
    </Box>
  )
}

const style: Stylesheet = {
  header: {
    display: 'none',
    [mq[768]]: {
      display: 'block',
      ...Font.h1,
      margin: '0.2em 0 1.2em 0',
      color: Color.primaryGreen,
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

}
