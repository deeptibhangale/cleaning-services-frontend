import Professionals from "./components/Professionals";
import Clients from "./components/Clients";

function App() {
  return (
    <div className="bg-stone-600 ">
      <h2 className="bg-pink-400 text-gray-500 text-center text-xl">
        Welcome to Cleaning Services
      </h2>

      <div className="text-lg">
        <Professionals />
      </div>
      <Clients />
    </div>
  );
}

export default App;
