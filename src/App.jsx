import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { CgWebsite } from "@react-icons/all-files/cg/CgWebsite";
import { ImMobile } from "@react-icons/all-files/im/ImMobile";
import { MdDeveloperBoard } from "@react-icons/all-files/md/MdDeveloperBoard";
import { CgIfDesign } from "@react-icons/all-files/cg/CgIfDesign";
import Footer from "./components/Footer";

function App() {
  const data = [
    {
      title: "UI & UX",
      text: "Designing interfaces that are intuitive, efficient, and enjoyable to use.",
      icon: <CgWebsite className="card-icon" />,
    },
    {
      title: "Web And Mobile App",
      text: "Transforming ideas into exceptional web and mobile app experiences.",
      icon: <ImMobile className="card-icon" />,
    },
    {
      title: "Design & Creative",
      text: "Crafting visually stunning designs that connect with your audience.",
      icon: <CgIfDesign className="card-icon" />,
    },
    {
      title: "Development",
      text: "Bringing your vision to life with the latest technology and design trends.",
      icon: <MdDeveloperBoard className="card-icon" />,
    },
  ];
  return (
    <>
      <Navbar />
      <Home data={data} />
      <Footer />
    </>
  );
}

export default App;
