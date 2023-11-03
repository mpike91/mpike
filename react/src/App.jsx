import { useState } from "react";

function App() {
  return (
    <div className="app">
      <AppList />
    </div>
  );
}

function AppList({ handleLogin }) {
  return (
    <>
      <h1>App List</h1>
      <div className="app-list">
        <button>Tic Tac Toe</button>
        <button>Theocracy</button>

        {/* <button className="logout" onClick={handleLogin}>
          Log Out
        </button> */}
      </div>
    </>
  );
}

// function MainMenu() {
//   const [loggedIn, setLoggedIn] = useState(false);

//   function handleLogin() {
//     setLoggedIn((log) => !log);
//   }

//   return (
//     <div className="main">
//       {loggedIn ? (
//         <AppList handleLogin={handleLogin} />
//       ) : (
//         <LoginForm handleLogin={handleLogin} />
//       )}
//     </div>
//   );
// }

// function LoginForm({ handleLogin }) {
//   return (
//     <>
//       <h1>Project Sandbox</h1>
//       <form className="login">
//         <input placeholder="Username"></input>
//         <input placeholder="Password"></input>
//         <button onClick={(e) => e.preventDefault()}>Login</button>
//       </form>

//       <button onClick={handleLogin}>Continue As Guest</button>
//     </>
//   );
// }

export default App;
