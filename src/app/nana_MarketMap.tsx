// import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
// import { useCallback, useState } from 'react'
// import { shallowEqual, useSelector } from 'react-redux'
// import { useNavigate } from 'react-router'
// import { RootState } from 'src/app/rootReducer'
// import { Button } from 'src/components/buttons/Button'
// import { Box } from 'src/components/layout/Box'
// import { ScreenContentFrame } from 'src/components/layout/ScreenContentFrame'
// import { MoneyValue } from 'src/components/MoneyValue'
// import { Currency } from 'src/currency'
// import { Font } from 'src/styles/fonts'
// import { mq, useIsMobile } from 'src/styles/mediaQueries'
// import { Stylesheet } from 'src/styles/types'

// const containerStyle = {
//   width: '400px',
//   height: '400px',
// }

// const center = {
//   lat: -3.745,
//   lng: -38.523,
// }

// export function MyComponent() {
//   const isMobile = useIsMobile()
//   const navigate = useNavigate()

//   const onClickSellerLogin = () => {
//     navigate('/seller-login')
//   }

//   const balances = useSelector((s: RootState) => s.wallet.balances, shallowEqual)

//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: 'AIzaSyBcalMGfbTYhGElntUWnHU7wIbx5PFYlIE',
//   })

//   const [map, setMap] = useState(null)

//   const onLoad = useCallback(function callback(map) {
//     const bounds = new window.google.maps.LatLngBounds()
//     map.fitBounds(bounds)
//     setMap(map)
//   }, [])

//   const onUnmount = useCallback(function callback(map) {
//     setMap(null)
//   }, [])

//   return isLoaded ? (
//     <ScreenContentFrame>
//       <Box direction="column" justify="center" align="center">
//         <h1 css={style.h1}>{`My ${isMobile ? '' : 'simple '}Page`}</h1>
//         <h2 css={style.h2}>Your Account Balance</h2>
//       </Box>
//       <Box direction="column" align="center" justify="center" wrap={true} css={style.balances}>
//         <MoneyValue
//           amountInWei={balances.cUsd}
//           currency={Currency.cUSD}
//           roundDownIfSmall={true}
//           baseFontSize={1.4}
//           containerCss={style.balanceContainer}
//         />
//         <MoneyValue
//           amountInWei={balances.celo}
//           roundDownIfSmall={true}
//           currency={Currency.CELO}
//           containerCss={style.balanceContainer}
//           baseFontSize={1.4}
//         />
//       </Box>
//       <div css={style.buttonContainer}>
//         <h2 css={style.h2}>Are you a seller?</h2>
//         <Button
//           size="s"
//           onClick={onClickSellerLogin}
//           margin="0.5em 1em"
//           styles={{ fontSize: '1.1em' }}
//         >
//           Seller Login
//         </Button>
//         <GoogleMap
//           mapContainerStyle={containerStyle}
//           center={center}
//           zoom={10}
//           onLoad={onLoad}
//           onUnmount={onUnmount}
//         >
//           {/* Child components, such as markers, info windows, etc. */}
//           <></>
//         </GoogleMap>
//       </div>
//     </ScreenContentFrame>
//   ) : (
//     <></>
//   )
// }

// const style: Stylesheet = {
//   h1: {
//     ...Font.h1,
//     ...Font.bold,
//     fontSize: '1.5em',
//     margin: '0.5em 0.5em 2em 0.5em',
//     textAlign: 'center',
//     maxWidth: '95%',
//     [mq[768]]: {
//       fontSize: '1.5em',
//       marginTop: '0.5em',
//     },
//   },
//   h2: {
//     ...Font.h2,
//     fontSize: '1.1em',
//     margin: 0,
//     opacity: 0.9,
//     textAlign: 'center',
//     maxWidth: '92%',
//     [mq[768]]: {
//       fontSize: '1.3em',
//     },
//   },
//   buttonContainer: {
//     marginTop: '1em',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     [mq[768]]: {
//       marginTop: '1.5em',
//       flexDirection: 'row',
//     },
//   },
//   balances: {
//     letterSpacing: '0.05em',
//     margin: '1.5em 0em',
//   },
//   balanceContainer: {
//     margin: '0.5em 0.5em',
//     fontSize: '0.9em',
//     [mq[480]]: {
//       fontSize: '1em',
//     },
//     [mq[768]]: {
//       margin: '0 1.6em',
//     },
//   },
// }
