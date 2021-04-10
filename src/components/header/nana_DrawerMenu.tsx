import { utils } from 'ethers'
import Drawer from 'rc-drawer'
import { useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState } from 'src/app/rootReducer'
import MarketIcon from 'src/components/icons/cart.svg'
import MarkIcon from 'src/components/icons/footprint.svg'
import HeartIcon from 'src/components/icons/heart.svg'
import MenuIcon from 'src/components/icons/menu.svg'
import CoinIcon from 'src/components/icons/tabler_coin.svg'
import { Identicon } from 'src/components/Identicon'
import { Box } from 'src/components/layout/Box'
import { Backdrop, backdropZIndex } from 'src/components/modal/Backdrop'
import { MoneyValue } from 'src/components/MoneyValue'
import { Currency } from 'src/currency'
import { useWalletAddress } from 'src/features/wallet/utils'
import { Color } from 'src/styles/Color'
import { mq, useIsMobile } from 'src/styles/mediaQueries'
import { Stylesheet } from 'src/styles/types'
import { logger } from 'src/utils/logger'
import { chunk } from 'src/utils/string'

export const DrawerMenu = () => {
  const [isOpen, setOpen] = useState(false)

  const onTouchEnd = () => {
    setOpen(false)
  }
  const onSwitch = () => {
    setOpen(!isOpen)
  }

  const isMobile = useIsMobile()
  const identiconSize = isMobile ? 66 : 72

  const balances = useSelector((s: RootState) => s.wallet.balances, shallowEqual)

  const address = useWalletAddress()
  const addressSections = chunk<string>(utils.getAddress(address).substring(2).toUpperCase(), 4)

  const navigate = useNavigate()
  const onItemClick = (key: string) => async () => {
    switch (key) {
      case 'market':
        navigate('/MarketMap')
        break
      case 'nftlist':
        navigate('/NFTpage')
        break
      case 'nftpaint':
        navigate('/NFTpaint')
        break
      case 'mypage':
        navigate('/MyPage')
        break
      default:
        logger.info('Unknown Menu Item Clicked: ', key)
        break
    }

    setOpen(false) //close the menu
  }

  return (
    <>
      <div css={style.container} onClick={() => setOpen(true)}>
        <Box styles={style.caretContainer} align="center">
          <img width="24pt" height="24pt" src={MenuIcon} />
        </Box>
      </div>
      {isOpen && (
        <>
          <Backdrop opacity={0.01} color={Color.primaryWhite} onClick={() => onSwitch()} />
          <Drawer
            width="20em"
            height="100vh"
            open={isOpen}
            placement="right"
            onClose={onTouchEnd}
            handler={false}
            level={null}
            css={style.menu}
          >
            <div css={style.userContainer}>
              <Identicon address={address} size={identiconSize} styles={style.identicon} />
              <div css={style.addressContainer}>
                <Box direction="row" align="center" justify="between">
                  {addressSections.slice(0, 5).map((chunk, index) => (
                    <span key={`address-chunk-${index}`}>{chunk}</span>
                  ))}
                </Box>
                <Box direction="row" align="center" justify="between">
                  {addressSections.slice(5).map((chunk, index) => (
                    <span key={`address-chunk-${index + 5}`}>{chunk}</span>
                  ))}
                </Box>
              </div>
              <div css={style.coinContainer}>
                <Box
                  direction="row"
                  align="center"
                  justify="start"
                  wrap={true}
                  css={style.balances}
                >
                  <img width="16pt" height="16pt" src={CoinIcon} />
                  <MoneyValue
                    hideSymbol={true}
                    amountInWei={balances.cUsd}
                    currency={Currency.cUSD}
                    roundDownIfSmall={true}
                    containerCss={style.balanceContainer}
                  />
                  <span>cUSD</span>
                  <MoneyValue
                    hideSymbol={true}
                    amountInWei={balances.celo}
                    roundDownIfSmall={true}
                    currency={Currency.CELO}
                    containerCss={style.balanceContainer}
                  />
                  <span>CELO</span>
                </Box>
              </div>
            </div>
            <div>
              <DrawerMenuItem
                key="market"
                label="Market"
                icon={MarketIcon}
                isIcon={true}
                iconWidth="24pt"
                onClick={onItemClick('market')}
              />
              <DrawerMenuItem
                key="nft"
                label="My NFT"
                icon={MarkIcon}
                isIcon={true}
                iconWidth="24pt"
                onClick={onItemClick('nftlist')}
              />
              <div css={style.submenu}>
                <DrawerMenuItem
                  key="nftlist"
                  label="My NFT list"
                  onClick={onItemClick('nftlist')}
                />
                <DrawerMenuItem
                  key="nftpaint"
                  label="My NFT paint"
                  onClick={onItemClick('nftpaint')}
                />
              </div>
              <DrawerMenuItem
                key="mypage"
                label="My Page"
                icon={HeartIcon}
                isIcon={true}
                iconWidth="24pt"
                onClick={onItemClick('mypage')}
              />
            </div>
          </Drawer>
        </>
      )}
    </>
  )
}

interface DrawerMenuItemProps {
  label: string
  icon?: string
  isIcon?: boolean
  iconWidth?: string
  iconHeight?: string
  onClick: () => void
}

const DrawerMenuItem = (props: DrawerMenuItemProps) => {
  const { label, icon, isIcon, iconWidth, iconHeight, onClick } = props

  return (
    <div css={style.menuItem} onClick={onClick}>
      {isIcon && <img src={icon} css={getIconStyle(iconWidth, iconHeight)} />}
      <span css={style.menuItemLabel}>{label}</span>
    </div>
  )
}

function getIconStyle(iconWidth?: string, iconHeight?: string) {
  return {
    height: iconHeight || '2em',
    width: iconWidth || '2em',
    padding: '0.25em 0.5em',
    marginRight: '1em',
  }
}

const style: Stylesheet = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    cursor: 'pointer',
    borderRadius: 22,
    background: Color.fillLighter,
    ':hover': {
      backgroundColor: Color.fillLight,
    },
  },
  addressContainer: {
    display: 'block',
    maxWidth: '12em',
    color: 'white',
    [mq[768]]: {
      display: 'inline',
      maxWidth: '14em',
    },
  },
  address: {
    fontSize: '1.3em',
    letterSpacing: '0.06em',
  },
  identicon: {
    marginBottom: '1em',
  },
  menu: {
    position: 'absolute',
    top: '0em',
    right: '0em',
    minWidth: '12em',
    zIndex: backdropZIndex + 1,
    background: Color.primaryWhite,
    boxShadow: '-5px 0px 10px #ccc',
  },
  userContainer: {
    padding: '2.75em 2em 2.5em 2em',
    background: 'linear-gradient(0.25turn,rgba(247,214,55),rgba(47,207,87))',
  },

  coinContainer: {
    padding: '0.5em 0em 0.5em 0em',
    color: 'white',
  },
  balances: {
    letterSpacing: '0.05em',
    marginTop: '1.5em',
  },
  balanceContainer: {
    margin: '0em 0.2em 0em 0.5em',
    fontSize: '1em',
    [mq[768]]: {
      margin: '0 1.6em',
    },
  },

  menuItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    minHeight: 40,
    borderBottom: `1px solid ${Color.borderLight}`,
    ':hover': {
      backgroundColor: `${Color.accentBlue}22`,
    },
    cursor: 'pointer',
    padding: '0.5em',
  },
  menuItemLabel: {
    fontSize: '1.2em',
    fontWeight: 400,
  },
  submenu: {
    paddingLeft: '5em',
    color: 'gray',
  },
}
