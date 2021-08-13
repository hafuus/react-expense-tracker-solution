import "./App.css";
import Header from "./Components/Header";
import Add from "./Components/Add";
import Balance from "./Components/Balance";
import Expenses from "./Components/Expense";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div>
          <Balance />
          <Add />
          <Expenses />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
