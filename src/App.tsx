import { Header } from "./components/header";
import { About } from "./components/about";
import { Galery } from "./components/galery";
import { Footer } from "./components/footer";

function App() {
  return (
    <main className="flex flex-col">
      <Header />
      <About />
      <Galery />
      <Footer />
    </main>
  );
}

export default App;
