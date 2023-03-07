import "./App.css";
import Footer from "./components/Footer";
import InteractiveRating from "./components/InteractiveRating";

export default function App() {
  return (
    <>
      <main className="min-h-screen flex flex-col justify-center">
        <InteractiveRating />
      </main>
      <Footer />
    </>
  );
}
