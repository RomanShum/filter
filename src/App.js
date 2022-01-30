import logo from "./logo.svg";
import "./App.css";
import ServiceForm from "./components/ServiceForm";
import ServiceSearch from "./components/ServiceSearch";
import ServiceList from "./components/ServiceList";

function App() {
  return (
    <>
      <ServiceForm />
      <ServiceSearch />
      <ServiceList />
    </>
  );
}

export default App;
