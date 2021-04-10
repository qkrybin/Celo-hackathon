import { shallowEqual, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from 'src/app/rootReducer'
import { DrawerMenu } from 'src/components/header/nana_DrawerMenu'
import Logo from 'src/components/icons/Mark-at_logo.svg'
import { Box } from 'src/components/layout/Box'
import { Color } from 'src/styles/Color'
import { Stylesheet } from 'src/styles/types'

export function Header() {
  const balances = useSelector((s: RootState) => s.wallet.balances, shallowEqual)
  return (
    <Box align="center" justify="between" styles={style.container}>
      <Link to={'/'}>
        <img width="104em" height="32em" src={Logo} alt="Mark-at Logo" css={style.logo} />
      </Link>
      <DrawerMenu />
    </Box>
  )
}

const style: Stylesheet = {
  container: {
    borderBottom: `1px solid ${Color.borderLight}`,
    padding: '1em 1.6em 1em 1.6em',
  },
  logo: {
    maxWidth: '40vw',
  },
}
