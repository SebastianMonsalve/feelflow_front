import React from "react";
import Layout from "./Components/Layout.jsx";
import AppRouter from "./routes/AppRouter.jsx";

const App = () => {
  return (
    <Layout>
      <AppRouter />
    </Layout>
  );
};

export default App;
