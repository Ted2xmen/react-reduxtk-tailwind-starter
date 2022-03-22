import "./App.css";
import Counter from "./components/Counter";
import Link from "./components/Link";

function App() {
  return (
    <div className="mx-24 min-h-screen items-center justify-center pt-24 ">
      <div className="gradient title m-6 p-12 ">
        React, Redux Toolkit, Router v6, Tailwind
      </div>
      <div className="gradient mx-6 p-6">
        <Counter />
      </div>
      <Link />
    </div>
  );
}

export default App;
