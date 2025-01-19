import AppRoutes from "./AppRoutes/AppRoutes";
import Header from "./components/Header";
import "./App.css";
import { useSelector } from 'react-redux';
function App() {
  const toWatchList = useSelector((state) => state.watch.toWatch);
  console.log("To Watch List:", toWatchList);
  return (
    <div>
      <Header />
      <AppRoutes />
    </div>
  )
}

export default App
