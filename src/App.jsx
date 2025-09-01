import Heading from "./Heading";
import Content from "./Content";
import Clock from "./Clock";
import Footer from "./Footer";
import "./App.css"; // CSS को अलग फाइल में डालेंगे

function App() {
  return (
    <div className="container">
      <Heading />
      <Content />
      <Clock />
      <Footer />
    </div>
  );
}

export default App;
