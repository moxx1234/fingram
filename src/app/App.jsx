import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";

import Main from "./pages/main/main";
import History from "./pages/history/history";
import Transaction from "./pages/transaction/transaction";
import User from "./pages/user/user";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />}></Route>
          <Route path="history" element={<History />} />
          <Route path="transaction" element={<Transaction />} />
          <Route path="user" element={<User />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
