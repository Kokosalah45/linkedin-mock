import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/protectedroute/ProtectedRoute";
import Modal from "./components/modal/Modal";
import { AnimatePresence } from "framer-motion";
function App() {
  return (
    <div className="App h-screen bg-[#e9e5df] pt-[58px]">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute isProtectedByAuth={false} redirectTo={"/feed"} />
          }
        >
          <Route index element={<div>default page !</div>} />
          <Route path="home" element={<div>default page !</div>} />
          <Route path="signup" element={<div>Sign up ! </div>} />
          <Route path="signin" index element={<div>Sign in ! </div>} />
        </Route>
        <Route path="/" element={<ProtectedRoute redirectTo={"/signup"} />}>
          <Route path="feed" element={<div>HI ! </div>} />
          <Route path="mynetwork" element={<div>network !</div>} />
          <Route path="jobs" element={<div>jobs !</div>} />
          <Route path="messaging" element={<div>message !</div>} />
          <Route path="notifications" element={<div>notfis !</div>} />
        </Route>
      </Routes>
      <AnimatePresence>
        <Modal
          zIndex={30}
          handlerName="work-modal"
          className="fixed w-[300px] bottom-0 rounded-md overflow-hidden shadow-md  h-navbargap z-50 bg-white"
        >
          {() => <div>HI</div>}
        </Modal>
      </AnimatePresence>
    </div>
  );
}
// interval 30mins
//
export default App;
