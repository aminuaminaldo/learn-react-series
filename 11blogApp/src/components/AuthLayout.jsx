import React from "react";

function Protected({ children, authentication = true }) {
  return (
    <div>
      <h1>Protected</h1>
      {children}
    </div>
  );
}

export default Protected;
