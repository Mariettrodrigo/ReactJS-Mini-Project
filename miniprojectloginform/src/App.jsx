const App = () => {
  return (
    <div className="login-constainer">
      <h2 className="form-title">Log in with</h2>
      <div className="social-login">
        <button className="social-button">
          <img src="google.png" height={50} width={50} alt="Google" className="social-icon" />
          Google
        </button>

        <button className="social-button">
          <img src="apple.png" height={90} width={90} alt="Apple" className="social-icon" />
          Apple
        </button>
      </div>

      <p className="seperator"><span>or</span></p>

      <form action="#"  className="login-form">
        <div className="input-wrapper">
          <input type="email" placeholder="Email address" 
          className="input-field" required />
        </div>
      </form>

    </div>
  )
}

export default App
