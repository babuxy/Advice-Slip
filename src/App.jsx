import React, { useEffect, useState } from "react";
import Profile from './components/Profile'

const App = () => {
  const [advice, setAdvice] = useState(null);
  // const [count, setCount] = useState(0);
  const [changeUser, setChangeUser] = useState(true);
  useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
      .then(res => res.json())
      // .then ((json) => {console.log("Testing json" , json.slip.advice);})
      .then(data => setAdvice(data.slip.advice))
      .catch(err => console.log(err))

  }, [changeUser]);

  return (
    <>

      <button onClick={() => setChangeUser(!changeUser)}>Click Me</button>
      {advice && <Profile data={advice} />}

    </>
  );
};

export default App;