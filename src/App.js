import logo from './logo.svg';
import './App.css';
import { useState } from "react"
function App() {

  const [firstname, setFirtsname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordagain, setPasswordagain] = useState("")
  const [error, setError] = useState("")

  function inputfirstnameHandler(e) {
    setFirtsname(e.target.value)
  }
  function inputlastnameHandler(e) {
    setLastname(e.target.value)
  }
  function inputemailHandler(e) {
    setEmail(e.target.value)
  }
  function inputpasswordHandler(e) {
    setPassword(e.target.value)
  }
  function inputpasswordagainHandler(e) {
    setPasswordagain(e.target.value)
  }

  function submitHandler(e) {
    e.preventDefault();

    if (password.length < 6) {
      setError("Parol en az 6 sifre olmalidir")
    }
    else {
      if (password != passwordagain) {
        setError("Yeniden,parolu duzgun daxil edin!")
      }
    }
  }
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <fieldset>
          <legend>CREATE ACCOUNT</legend>
          <div>
            <div>
              <label>FirstName:</label>
            </div>
            <input required onChange={inputfirstnameHandler}
              value={firstname}
              type="firstname"
              placeholder="ad daxil edin.." />
          </div>

          <div>
            <div>
              <label>LastName:</label>
            </div>
            <input required onChange={inputlastnameHandler}
              value={lastname}
              type="lastname"
              placeholder="soyad daxil edin.." />
          </div>

          <div>
            <div>
              <label>Email:</label>
            </div>
            <input required onChange={inputemailHandler}
              value={email}
              type="email"
              placeholder="email daxil edin.." />
          </div>

          <div>
            <div>
              <label>Password (6 char.min):</label>
            </div>
            <input required onChange={inputpasswordHandler}

              value={password}
              type="password"
              placeholder="parol daxil edin.." />
          </div>

          <div>
            <div>
              <label>Password Again:</label>
            </div>
            <input required onChange={inputpasswordagainHandler}
              value={passwordagain}
              type="password"
              placeholder="parolu yeniden daxil edin.." />
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>
          {
            error ? <h3>{error}</h3> : null
          }
        </fieldset>
      </form>
    </div>
  );
}

export default App;
