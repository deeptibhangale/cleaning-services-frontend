import { useState, useEffect } from "react";

export default function Professionals() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/clients", {
      method: "GET",
    })
      .then((response) => response.json())

      //if (response.ok) return JSON.stringify(response.json);
      //else throw new Error("something went wrong!!");

      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("problem in fetching!!");
      });
  }, []);
  function handleClick() {
    return (
      <h1>
        {data && (
          <ul>
            {data.map((item) => (
              <li key={item.id}> {item.name}</li>
            ))}
          </ul>
        )}
      </h1>
    );
  }
  return (
    <>
      <button className="bg-lime-200 text-purple-400" onClick={handleClick}>
        Professionals
      </button>
    </>
  );
}
