import "./App.css";
import Counter from "./components/Counter";
import Links from "./components/Links";

function App() {
  return (
    <div className="sm:w-full sm:h-full md:h-full md:w-full mx-auto items-center justify-center pt-24 lg:mx-12 xl:mx-24">
      <div className="gradient title p-12 m-4">
        React, Redux Toolkit, TailwindCSS
      </div>
      <div className="gradient p-12 m-4">
        <Counter />
      </div>
      <Links />
    </div>
  )
}

export default App;
