import Image from "next/image";
import Home from '../app/home/page';
import Navbar from '../app/home/navbar'
export default function Main() {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
}
