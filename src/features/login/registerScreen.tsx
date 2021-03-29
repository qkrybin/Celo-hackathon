import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { isSignerSet } from 'src/blockchain/signer'
import { ScreenContentFrame } from 'src/components/layout/ScreenContentFrame'
import { RegisterForm } from 'src/features/login/registerForm'
import { Font } from 'src/styles/fonts'

export function RegisterScreen() {
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
      <h1 css={Font.h1Green}>Register as Seller</h1>
      {!isLoggedIn && <RegisterForm {...{ setIsLoggedIn }} />}
    </ScreenContentFrame>
  )
}