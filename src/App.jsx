import "./global.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

const appStyle = {
    padding: "0 9rem",
    backgroundColor: "#F3F2E1",
};

function App() {
    // 1. Header
    // 2. Menu
    //    2.a. PizzaCard
    // 3. Footer
    return (
        <div style={appStyle}>
            <Header></Header>
            <Menu></Menu>
            <Footer />
        </div>
    );
}

export default App;
