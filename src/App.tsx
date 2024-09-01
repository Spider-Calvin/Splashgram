import { Routes, Route } from "react-router-dom";

import { Home } from "./root";
import SignIn from "./auth/forms/sign_in";
import SignUp from "./auth/forms/sign_up";
import AuthLayout from "./auth/auth_layout";

function App() {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>
        {/* Private routes */}

        <Route index element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
