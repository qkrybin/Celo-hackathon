import { useNavigate } from 'react-router'
import { getContract } from 'src/blockchain/contracts'
import { Button } from 'src/components/buttons/Button'
import ArrowBackIcon from 'src/components/icons/arrow_back.svg'
import { Box } from 'src/components/layout/Box'
import { ScreenContentFrame } from 'src/components/layout/ScreenContentFrame'
import { CeloContract } from 'src/config'
import { useWalletAddress } from 'src/features/wallet/utils'
import { WalletDetails } from 'src/features/wallet/WalletDetails'
import { Color } from 'src/styles/Color'
import { Font } from 'src/styles/fonts'
import { Stylesheet } from 'src/styles/types'

export function ViewWalletScreen() {
  const navigate = useNavigate()
  const address = useWalletAddress()

  const onClickBack = () => {
    navigate(-1)
  }
  const handleOnClick = () => {
    const test = getContract(CeloContract.MarkAtToken)
    const log = test.awardItem(
      address,
      'https://ipfs.io/ipfs/QmZBvndhGwA4QVMt8RkwdF1ex5SRLyXPbrB1U1ErNR1JvL?filename=footprint.json'
    )
    console.log('balance: ', test.balanceOf(address))
    console.log('list', test.tokenOfOwnerByIndex(address, 1))
  }

  return (
    <ScreenContentFrame onClose={onClickBack}>
      <Box direction="column" align="center">
        <h2 css={style.header}>Your Celo Account</h2>
        <WalletDetails />

        <Button
          color={Color.altGrey}
          icon={ArrowBackIcon}
          onClick={handleOnClick}
          margin="3em 0 1em 0"
          width="9em"
        >
          GetResponse
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
}
