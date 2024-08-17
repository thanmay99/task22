import React, { useState } from "react";
const App = () => {
  const [firstName, setFirstName] = useState("alina");
  const [age, setAge] = useState(20);
  const [isMarried, setisMarried] = useState(false);

  const [person, setPerson] = useState({
    name: "alex",
    designation: "developer",
  });

  const [arr, setArr] = useState([90, 39, 2, 3]);
  const [emp, setEmp] = useState([
    {
      id: 1,
      name: "harry",
      salary: 89099,
    },
    {
      id: 2,
      name: "alex",
      salary: 99099,
    },
    {
      id: 1,
      name: "alina",
      salary: 34599,
    },
  ]);
  const handleUpdate = () => {
    setFirstName("harry");
    setAge(22);
    setisMarried(true);
    setPerson({ ...person, designation: 'manager' });
    setArr([...arr, 100, 200]);

    const newArr = [...emp];
    newArr[2].salary = 90000;
    setEmp(newArr);
  };


  return (
    <div>
      <h4>Primitive</h4>
      <p>{firstName}</p>
      <p>{age}</p>

      <h4>non-Primitive</h4>
      <p>{person.name}</p>
      <p>{person.designation}</p>
      <p>
        {arr.map((x) => (
          <p>{x}</p>
        ))}
      </p>
      {emp.map((e) => {
        return (
          <p>
            {e.name}:{e.salary}
          </p>
        );
      })}
      <button onClick={handleUpdate}>update</button>
    </div>
  )
}



export default App;
