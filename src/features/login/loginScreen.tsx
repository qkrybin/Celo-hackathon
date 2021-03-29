import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { isSignerSet } from 'src/blockchain/signer'
import { ScreenContentFrame } from 'src/components/layout/ScreenContentFrame'
import { LoginForm } from 'src/features/login/loginForm'
import { Font } from 'src/styles/fonts'

export function LoginScreen() {
  // @ts-ignore
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    // Wallet must have been created or imported before reaching here
    if (!isSignerSet()) {
      navigate('/setup', { replace: true })
    }
  }, [])

  const onClickBack = () => {
    navigate(-1)
  }
  return (
    <ScreenContentFrame onClose={onClickBack}>
      <h1 css={Font.h1Green}>Seller Login</h1>
      {!isLoggedIn && <LoginForm {...{ setIsLoggedIn }} />}
    </ScreenContentFrame>
  )
}