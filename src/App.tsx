
import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/master/header";
import Layout from "./components/layouts";
function App() {
  return (
    <>
      <ThemeProvider>
        <Header />
        <Layout />
      </ThemeProvider>
    </>
  );
}
export default App;
