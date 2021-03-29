import { Link } from 'react-router-dom'
import { AccountMenu } from 'src/components/header/AccountMenu'
import Logo from 'src/components/icons/logo.svg'
import { Box } from 'src/components/layout/Box'
import { Color } from 'src/styles/Color'
import { mq } from 'src/styles/mediaQueries'
import { Stylesheet } from 'src/styles/types'

export function Header() {
  return (
    <Box align="center" justify="between" styles={style.container}>
      <Link to={'/'}>
        <img width="130em" height="46.05em" src={Logo} alt="Celo Logo" css={style.logo} />
      </Link>
      <AccountMenu />
    </Box>
  )
}

const style: Stylesheet = {
  container: {
    borderBottom: `1px solid ${Color.borderLight}`,
    padding: '0.4em 0.5em 0.4em 0.2em',
  },
  logo: {
    maxWidth: '20vw',
  },
  balances: {
    letterSpacing: '0.05em',
  },
  balanceContainer: {
    margin: '0 0.5em',
    fontSize: '0.9em',
    [mq[480]]: {
      fontSize: '1em',
    },
    [mq[768]]: {
      margin: '0 1.6em',
    },
  },
}
