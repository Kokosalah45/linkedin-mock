import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/protectedroute/ProtectedRoute";
import Overlay from "./components/overlay/Overlay";
function App() {
  return (
    <div className="App h-screen bg-[#e9e5df]">
      <Header />

      <Routes>
        <Route
          path="/"
          element={<ProtectedRoute isProtectedByAuth={false} to={"/feed"} />}
        >
          <Route index element={<div>default page !</div>} />
          <Route path="home" element={<div>default page !</div>} />
          <Route path="signup" element={<div>Sign up ! </div>} />
          <Route path="signin" index element={<div>Sign in ! </div>} />
        </Route>
        <Route path="/" element={<ProtectedRoute to={"/signup"} />}>
          <Route path="feed" element={<div>HI ! </div>} />
          <Route path="network" element={<div>network !</div>} />
        </Route>
      </Routes>
    </div>
  );
}
// interval 30mins
//
export default App;
