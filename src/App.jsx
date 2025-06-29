import React, { useState } from "react";
import { USERS } from "./users";
import UserCard from "./components/UserCard";

function App() {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <UserCard user={USERS[index]} />
      <button onClick={() => setIndex((index + 1) % USERS.length)}>
      Preveous </button>

<button onClick={() => setIndex((index - 1 + USERS.length) % USERS.length)}>
Next </button>


    </div>
  );
}

export default App;

