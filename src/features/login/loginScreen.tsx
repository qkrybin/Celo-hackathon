import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { isSignerSet } from 'src/blockchain/signer'
import { ScreenContentFrame } from 'src/components/layout/ScreenContentFrame'
import { LoginForm } from 'src/features/login/loginForm'

export function LoginScreen(isLoggedIn:any, setIsLoggedIn:any) {
  //const [isLoggedIn, setIsLoggedIn] = useState(false);
  // @ts-ignore
  const navigate = useNavigate()
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
      {!isLoggedIn && <LoginForm {...{ setIsLoggedIn }} />}
    </ScreenContentFrame>
  )
}