import Professionals from "./components/Professionals";
function App() {
  return (
    <div className="bg-stone-600 ">
      <h2 className="bg-pink-400 text-gray-500 text-center text-xl">
        Welcome to Cleaning Services
      </h2>
      <menu>
        <div className="text-lg">
          <Professionals />
        </div>
        <p>users</p>
      </menu>
    </div>
  );
}

export default App;
