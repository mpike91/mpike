import { useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <h1>Project Sandbox</h1>
      {loggedIn ? (
        <MainMenu setLoggedIn={setLoggedIn} />
      ) : (
        <Login setLoggedIn={setLoggedIn} />
      )}
    </>
  );
}

function Login({ setLoggedIn }) {
  return (
    <>
      <h3> Please login, or continue as guest.</h3>
      <div>
        <button>Login</button>
      </div>
      <div>
        <button onClick={() => setLoggedIn((log) => !log)}>
          Continue as Guest
        </button>
      </div>
    </>
  );
}

function MainMenu({ setLoggedIn }) {
  return (
    <>
      <h3>Main Menu</h3>
      <button onClick={() => setLoggedIn((log) => !log)}>Logout</button>
    </>
  );
}

export default App;
