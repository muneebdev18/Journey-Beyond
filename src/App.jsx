import { useEffect } from "react";
import {
  Routes,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import Home from "./pages/Home";
import ExoSystem from "./pages/ExoSystem";
import GuidedServices from "./pages/GuidedServices";
import Navbar from "./components/Navbar";
import DataPreprocessor from "./components/DataPreprocessor";

function App() {
  // const action = useNavigationType();
  // const location = useLocation();
  // const pathname = location.pathname;

  // useEffect(() => {
  //   if (action !== "POP") {
  //     window.scrollTo(0, 0);
  //   }
  // }, [action, pathname]);

  // useEffect(() => {
  //   let title = "";
  //   let metaDescription = "";

  //   switch (pathname) {
  //     case "/":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/exosystem":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/guided-services":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //   }

  //   if (title) {
  //     document.title = title;
  //   }

  //   if (metaDescription) {
  //     const metaDescriptionTag = document.querySelector(
  //       'head > meta[name="description"]'
  //     );
  //     if (metaDescriptionTag) {
  //       metaDescriptionTag.content = metaDescription;
  //     }
  //   }
  // }, [pathname]);

  return (
    // <Router>
      // <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exosystem" element={<ExoSystem />} />
        <Route path="/guided-services" element={<GuidedServices />} />
      </Routes>
      // <DataPreprocessor />
    // </Router>
  );
}
export default App;
