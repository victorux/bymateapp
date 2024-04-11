import Button from '../../common/Buttons/Button'

const Login = () => {
  const handleClick = () => {
    window.open('http://localhost:8080/api/auth/google', '_self')
  }
  return (
    <div>
      <h1>Login:</h1>
      <Button color="primary" size="medium" onClick={handleClick}>
        Login with Google
      </Button>
    </div>
  )
}

export default Login
