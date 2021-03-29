import { shallowEqual, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { RootState } from 'src/app/rootReducer'
import { Button } from 'src/components/buttons/Button'
import ArrowBackIcon from 'src/components/icons/arrow_back.svg'
import { Box } from 'src/components/layout/Box'
import { ScreenContentFrame } from 'src/components/layout/ScreenContentFrame'
import { MoneyValue } from 'src/components/MoneyValue'
import { Currency } from 'src/currency'
import { WalletDetails } from 'src/features/wallet/WalletDetails'
import { Color } from 'src/styles/Color'
import { Font } from 'src/styles/fonts'
import { mq } from 'src/styles/mediaQueries'
import { Stylesheet } from 'src/styles/types'

export function WalletScreenTest() {
  const navigate = useNavigate()

  const onClickBack = () => {
    navigate(-1)
  }

  const balances = useSelector((s: RootState) => s.wallet.balances, shallowEqual)

  return (
    <ScreenContentFrame onClose={onClickBack}>
      <Box direction="column" align="center">
        <h2 css={style.header}>Your Celo Account</h2>
        <Box align="center" justify="between" styles={style.container}>
          <Box direction="row" align="center" justify="center" wrap={true} css={style.balances}>
            <MoneyValue
              amountInWei={balances.cUsd}
              currency={Currency.cUSD}
              roundDownIfSmall={true}
              baseFontSize={1.4}
              containerCss={style.balanceContainer}
            />
            <MoneyValue
              amountInWei={balances.celo}
              roundDownIfSmall={true}
              currency={Currency.CELO}
              containerCss={style.balanceContainer}
              baseFontSize={1.4}
            />
          </Box>
        </Box>
        <WalletDetails />
        <Button
          color={Color.altGrey}
          icon={ArrowBackIcon}
          onClick={onClickBack}
          margin="3em 0 1em 0"
          width="9em"
        >
          Back
        </Button>
      </Box>

    </ScreenContentFrame>
  )
}

const style: Stylesheet = {
  header: {
    ...Font.h2Green,
    margin: '0 0 1.4em 0',
    textAlign: 'center',
  },
  container: {
    borderBottom: `1px solid ${Color.borderLight}`,
    padding: '0.4em 0.5em 0.4em 0.2em',
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


