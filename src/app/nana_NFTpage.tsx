import { useNavigate } from 'react-router'
import { Button } from 'src/components/buttons/Button'
import { Box } from 'src/components/layout/Box'
import { Font } from 'src/styles/fonts'
import { mq, useIsMobile } from 'src/styles/mediaQueries'
import { Stylesheet } from 'src/styles/types'

export function NFTpage() {
  const isMobile = useIsMobile()
  const navigate = useNavigate()

  const onClickCreateNew = () => {
    navigate('/setup/NFTpaint')
  }

  const nfts = [
    {
      tokenId: 1,
      imageUrl: '../static/nft/bigdog.png',
    },
    {
      tokenId: 2,
      imageUrl: '../static/nft/puppy.png',
    },
    {
      tokenId: 3,
      imageUrl: '../static/nft/cat.png',
    },
  ]

  return (
    <Box direction="column" justify="start" styles={style.frame}>
      <Box direction="column" justify="start" align="start">
        <h1 css={style.h1}>{`My ${isMobile ? '' : 'simple '}NFT`}</h1>
        <div css={style.buttonContainer}>
          <Button
            size="s"
            onClick={onClickCreateNew}
            margin="0.5em 1em"
            styles={{ fontSize: '1.1em' }}
          >
            Mark Paint
          </Button>
        </div>
      </Box>
      <Box direction="row" justify="center" align="center">
        <div css={style.nftContainer}>
          {nfts.map((nft) => (
            <img key={nft.tokenId} src={nft.imageUrl} css={style.nfts} />
          ))}
        </div>
      </Box>
    </Box>
  )
}

const style: Stylesheet = {
  frame: {
    minHeight: '100vh',
    backgorund: 'blue',
    backgroundImage: `url("static/celo-hero.jpg")`,
  },
  topPadding: {
    height: '3em',
    [mq[768]]: {
      height: '3em',
    },
  },
  logo: {
    maxWidth: '75%',
  },
  h1: {
    ...Font.h1,
    ...Font.bold,
    fontSize: '1.5em',
    margin: '0.5em 0.5em 0.5em 0.5em',
    textAlign: 'start',
    maxWidth: '95%',
    [mq[768]]: {
      fontSize: '1.5em',
      marginTop: '0.5em',
    },
  },
  buttonContainer: {
    marginTop: '1em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'start',
    [mq[768]]: {
      marginTop: '1.5em',
      flexDirection: 'row',
    },
  },
  nftContainer: {
    marginTop: '1.5em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [mq[768]]: {
      marginTop: '2.5em',
      flexDirection: 'row',
    },
  },
  nfts: {
    margin: '0.5em 0.5em 0.5em 0.5em',
    width: '400',
  },
}
