import React, { createElement as message, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  // return <h1>Hello React</h1>;

  return message("div", { className: "container" }, [
    message("h1", { className: "font-bold", key: 1 }, `Test JSX ${count}`),
    message(
      "button",
      {
        className: "py-2 px-4 border",
        key: 2,
        onClick: () => setCount(count + 1),
      },
      "Click me!"
    ),
  ]);
}

export default App;
