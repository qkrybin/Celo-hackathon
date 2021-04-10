import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { RootState } from 'src/app/rootReducer'
import { HrDivider } from 'src/components/HrDivider'
import brush1 from 'src/components/icons/brush1.svg'
import brush2 from 'src/components/icons/brush2.svg'
import brush3 from 'src/components/icons/brush3.svg'
import { Box } from 'src/components/layout/Box'
import { ScreenContentFrame } from 'src/components/layout/ScreenContentFrame'
import { useModal } from 'src/components/modal/useModal'
import { useNavHintModal } from 'src/components/modal/useNavHintModal'
import { config } from 'src/config'
import { HeaderSection } from 'src/features/home/maHeaderSection'
import { toggleHomeHeaderDismissed } from 'src/features/settings/settingsSlice'
import { StakeActionType } from 'src/features/validators/types'
import { dismissActivatableReminder } from 'src/features/validators/validatorsSlice'
import { useAreBalancesEmpty } from 'src/features/wallet/utils'
import { Color } from 'src/styles/Color'
import { Font } from 'src/styles/fonts'
import { mq, useIsMobile } from 'src/styles/mediaQueries'
import { Stylesheet } from 'src/styles/types'
import { logger } from 'src/utils/logger'



export function HomeScreen() {
  const isMobile = useIsMobile()
  const isWalletEmpty = useAreBalancesEmpty()
  const showGraph = !isMobile || isWalletEmpty

  const isDismissed = useSelector((state: RootState) => state.settings.homeHeaderDismissed)
  const dispatch = useDispatch()
  const onClickDismiss = () => {
    dispatch(toggleHomeHeaderDismissed())
  }
  const onClose = isMobile && !isWalletEmpty ? onClickDismiss : undefined

  // START PIN MIGRATION
  // TODO remove in a few months when all accounts have been migrated to passwords
  const { showModalAsync, closeModal } = useModal()
  const navigate = useNavigate()
  const { secretType, type } = useSelector((s: RootState) => s.wallet)
  useEffect(() => {
    if (secretType === 'password' || config.defaultAccount || type === 'ledger') return
    showModalAsync(
      'Please Change Your Pin',
      'For better security, pincodes are being replaced with passwords. Please change your pin to a new password now. Sorry for the inconvenience!',
      { key: 'change', label: 'Change Pin' },
      null,
      's',
      null,
      false
    )
      .then(() => {
        navigate('/change-pin')
        closeModal()
      })
      .catch((reason) => {
        logger.error('Failed to show modal', reason)
        closeModal()
      })
  }, [])
  // END PIN MIGRATION

  // Detect if user has unactivated staking votes
  const hasActivatable = useSelector((state: RootState) => state.validators.hasActivatable)
  const showActivateModal =
    hasActivatable.status &&
    hasActivatable.groupAddresses.length &&
    !hasActivatable.reminderDismissed
  useNavHintModal(
    showActivateModal,
    'Activate Your Votes!',
    'You have pending validator votes that are ready to be activated. They must be activated to start earning staking rewards.',
    'Activate',
    '/stake',
    { groupAddress: hasActivatable.groupAddresses[0], action: StakeActionType.Activate },
    () => {
      dispatch(dismissActivatableReminder())
    }
  )

  if (isDismissed) return null

  return (
    <ScreenContentFrame onClose={onClose} hideCloseButton={!onClose}>
      <div css={style.container}>
        <HeaderSection />
            <HrDivider styles={style.divider} />

            <Box direction="column" align="center" margin="3em 0 0 0">
              <Box direction="row" align="center">
                <img src={brush1} css={style.icon} alt="Tip" />
                <img src={brush2} css={style.icon} alt="Tip" />
                <img src={brush3} css={style.icon} alt="Tip" />
              </Box>
              <h1 css={style.header}>What is Footprint NFT?</h1>
              <Box direction="column" align="start">
                <p css={style.tip}>Footprint NFT is a NFT you can earn from buying stuffs at offline flea market near you.</p>
                <p css={style.tip}>It doesn't matter whether you are elsewhere in Europe, America or even Asia.</p>
                <p css={style.tip}>You just have to buy anything from any market shown on Mark-at! to get these attractive footprint NFTs, also albe to create your indigenous with them. </p>
              </Box>
            </Box>
      </div>
      <div css={style.container} >


      </div>
    </ScreenContentFrame>
  )
}

const style: Stylesheet = {
  container: {
    maxWidth: '55rem',
    
  },
  icon: {
    marginRight: '0.5em',
    height: '76pt',
    width: '76pt',
  },
  divider: {
    margin: '2.2em 0',
    backgroundColor: Color.altGrey,
    color: Color.altGrey, //for IE
  },
  celoPriceLabel: {
    ...Font.body,
    ...Font.bold,
    paddingBottom: '0.2em',
  },
  header: {
    [mq[768]]: {
      display: 'block',
      ...Font.h1,
      ...Font.bold,
      margin: '0.2em 0 1.2em 0',
      color: Color.primaryBlack,
    },
  },
  tip: {
    ...Font.body,
    lineHeight: '1.4em',
    margin: '1em 0 0 0',
  },
}
