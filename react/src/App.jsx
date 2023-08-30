import { useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <h1>Project Sandbox</h1>
      {loggedIn ? (
        <MainMenu setLoggedIn={setLoggedIn} />
      ) : (
        <Login setLoggedIn={setLoggedIn} />
      )}
    </div>
  );
}

function Login({ setLoggedIn }) {
  return (
    <div>
      <h3> Please login, or continue as guest.</h3>
      <div>
        <button>Login</button>
      </div>
      <div>
        <button onClick={() => setLoggedIn((log) => !log)}>
          Continue as Guest
        </button>
      </div>
    </div>
  );
}

function MainMenu({ setLoggedIn }) {
  return (
    <div>
      <h3>Main Menu</h3>
      <div>
        <button onClick={() => setLoggedIn((log) => !log)}>Logout</button>
      </div>
    </div>
  );
}

export default App;
