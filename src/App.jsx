import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/auth/login";
import { Home } from "./pages/home";
import { Search } from "./pages/search";
import MainLayout from "./layout/main-layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/main" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="search" element={<Search />} />
      </Route>
      <Route path="*" element={<h1>Page Not found</h1>} />
    </Routes>
  );
}

export default App;
