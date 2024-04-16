import Button from '../../common/Buttons/Button'
import GoogleIcon from '../../../assets/icons/google.svg'

const Login = () => {
  const handleClick = () => {
    window.open('http://localhost:8080/api/auth/google', '_self')
  }

  const google_icon = <img width={32} src={GoogleIcon} alt="Google Icon" />
  return (
    <div className="w-full flex flex-col items-center mt-40">
      <div className="flex flex-col gap-6 items-center">
        <h3 className="max-w-[360px] text-center">Welcome to Bymate</h3>
        <p className="max-w-[600p] text-center leading-8">
          This is the login page for Bymate. <br />
          Please login with your Google account to continue.
        </p>
        <div>
          <Button icon={google_icon} border size="medium" onClick={handleClick}>
            Login with Google
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Login
