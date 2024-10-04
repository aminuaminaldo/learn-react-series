import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/aminuaminaldo")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setData(data);
  //         console.log(data);
  //       });
  //   }, []);

  const data = useLoaderData();
  return (
    <div className="bg-gray-600 text-center text-white m-4 p-4 text-3xl">
      Github Pulic Repos:{data.public_repos}
      <img className="rounded-full" src={data.avatar_url} alt="" width={300} />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/aminuaminaldo");
  const data = response.json();
  return data;
};
