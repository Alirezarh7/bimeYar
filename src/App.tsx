import "./App.css";
import MainLayout from "./component/layout/MainLayout.tsx";
import AlertProvider from "./provider/AlertProvider.tsx";

function App() {
  return (
    <AlertProvider>
      <MainLayout />
    </AlertProvider>
  );
}

export default App;
