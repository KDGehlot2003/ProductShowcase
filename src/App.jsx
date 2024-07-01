import { Card } from "@nextui-org/react";
import Test from "./components/Test";
import MyCard from './components/MyCard';

function App() {


  return (
    <>
    <Test />
    <div className="grid grid-cols-4">
    <MyCard />
    <MyCard />
    </div>
    </>
  )
}

export default App
