import { useCallback, useState } from 'react'
import Drawer from 'react-bottom-drawer'
import { useNavigate } from 'react-router'
import { Box } from 'src/components/layout/Box'
import { mq, useIsMobile } from 'src/styles/mediaQueries'
import { Stylesheet } from 'src/styles/types'

export function NFTpaint() {
  const isMobile = useIsMobile()
  const navigate = useNavigate()
  const [isVisible, setIsVisible] = useState(true)
  const openDrawer = useCallback(() => setIsVisible(true), [])
  const closeDrawer = useCallback(() => setIsVisible(false), [])

  const onClose = useCallback(() => {
    setIsVisible(false)
  }, [])

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
      <div css={style.topPadding}></div>
      <Box direction="column" justify="center" align="center">
        <img src="../static/My-NFT-Paint.svg"></img>
      </Box>
      <button className="open-btn" onClick={openDrawer}>
        SHOW ME THE DIALOG!
      </button>
      <Drawer duration={250} hideScrollbars={true} onClose={closeDrawer} isVisible={isVisible}>
        <Box direction="row" justify="center" align="center">
          <div css={style.nftContainer}>
            {nfts.map((nft) => (
              <img key={nft.tokenId} src={nft.imageUrl} css={style.nfts} />
            ))}
          </div>
        </Box>
      </Drawer>
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
    height: '24pt',
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
