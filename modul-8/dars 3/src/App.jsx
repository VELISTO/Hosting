import { useEffect, useState, useLayoutEffect } from 'react'

export default function App() {
  const [date, setDate] = useState("")
  const [name, setItem] = useState("")

  useEffect(() => {
    const uname = prompt('Your name');
    setItem(uname);

    const curdate = new Date();
    setDate(curdate.toLocaleDateString());
  }, []);

  const edate = new Date().getHours();

  if (edate >= 6 && edate <= 23) {
    document.body.classList.remove("dark");
  }
  else {
    document.body.classList.add("dark");
  }

  return (
    <>
      <div className='con'>
        <h2>Hello my name is: <span>{name}</span></h2>
        <h2>This is the day: <span>{date}</span></h2>
        <h2>A random number from 0 to 100:</h2>
        <h1>{Math.floor(Math.random() * 100) + 1}</h1>
      </div>

    </>
  )
}
