// Bimsillah
import "./App.css";
import Header from "./components/Main/Header";
import Category from "./context/Category";
import LoginPopup from "./components/Popups/LoginPopup";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainBody from "./components/Main/MainBody";
import ProdectDetails from "./components/Main/ProdectDetails";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./components/Main/Footer";

function App() {
  const [logPop, setLogPop] = useState(false);

  return (
    <Router>
      <Category>
        <Header setLogPop={setLogPop} />
        <AnimatePresence>
          <Routes>
            <Route
              exact
              path="/"
              element={<MainBody setLogPop={setLogPop} />}
            />

            <Route
              path="/product/:id"
              element={
                <motion.div
                  initial={{ opacity: 0, y: "10vh" }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                >
                  {" "}
                  <ProdectDetails setLogPop={setLogPop} />{" "}
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
        <Footer />
        {<LoginPopup logPop={logPop} setLogPop={setLogPop} />}
      </Category>
    </Router>
  );
}

export default App;
