import * as React from 'react'
import { useNavigate } from 'react-router'
import { Box } from 'src/components/layout/Box'
import { ScreenContentFrame } from 'src/components/layout/ScreenContentFrame'
import { Font } from 'src/styles/fonts'
import { mq } from 'src/styles/mediaQueries'
import { Stylesheet } from 'src/styles/types'

interface ListProps {
  Id: any
  name: string
  img: string
  hashtag: string
  nft: any
}

export function MarketList() {
  const navigate = useNavigate()

  const onClickCreateNew = () => {
    navigate('/setup/NFTpaint')
  }

  const marketplace = 'Venice High Flea Market'

  const markets = [
    {
      Id: 1,
      name: 'Holliday House',
      img: '../static/nft/bigdog.png',
      hashtag: '#kitchen',
      nft: 1,
    },
    {
      Id: 2,
      name: 'Home Run Park',
      img: '../static/nft/puppy.png',
      hashtag: '#sporting',
      nft: 0,
    },
    {
      Id: 3,
      name: 'Radio&Camera ground',
      img: '../static/nft/cat.png',
      hashtag: '#electronics',
      nft: 2,
    },
  ]

  const ListComponent = (list: ListProps) => (
    <Box>
      <a href={`/product/${list.Id}`} >
      <h1 css={style.h1}>{list.name}</h1>
      <img src={list.img} />
      </a>
    </Box>
  )

  return (
    <ScreenContentFrame>
      <Box direction="column" justify="center">
        <Box direction="column" justify="start" align="start">
          <h1 css={style.h1}>{marketplace}</h1>
        </Box>
        <div>
          <Box css={style.listContainer}>
            {markets.map((market) => (
              <ListComponent key={market.Id} {...market} />
            ))}
          </Box>
        </div>
      </Box>
    </ScreenContentFrame>
  )
}

const style: Stylesheet = {
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
    margin: '0em 0.5em 0.5em 0.5em',
    textAlign: 'start',
    maxWidth: '95%',
    [mq[768]]: {
      fontSize: '1.5em',
      marginTop: '0.5em',
    },
  },
  listContainer: {
    marginTop: '1.5em',
    display: 'block',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listComponent: {
    width: '100vh',
  },
}
