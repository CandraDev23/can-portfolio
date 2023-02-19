import Body from "../../templates/Body";
import Footer from "../../templates/Footer";
import './style.css';

export default function Home() {
    return (
        <div style={{ backgroundColor: "#EFFCFF", padding: "0px" }}>
            <Body />
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <Footer />
        </div>
    );
}