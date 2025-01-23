import React from "react";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/shoes");
  const data = await res.json();
  console.log("data", data);
  return (
    <div>
      <h1 className="text-4xl text-center">Welcome to next.js home page</h1>
      <div>
        {data?.map((item) => (
          <div key={item.id}>
            <div>
              <h1>{item.name}</h1>
              <h3>{item.band}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
