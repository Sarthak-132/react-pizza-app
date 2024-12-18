import pizzaData from "./pizzaData";

const cardStyle = {
    display: "flex",
    // boxShadow: " rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
    gap: "2rem",
    padding: "0.7rem 4rem",
    backgroundColor: "#F3F2E1",
};

const imgStyle = {
    height: "6.3rem",
    borderRadius: "5%",
};

const detailsStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    justifyContent: "center",
};

const PizzaDetails = {
    fontFamily: "Times New Roman",
    letterSpacing: "0.1rem",
};

function Pizza(props) {
    return (
        <div style={cardStyle}>
            <div>
                {/* <img
                    style={imgStyle}
                    src="../pizzas/focaccia.jpg"
                    alt="pizza01"
                /> */}
                <img
                    style={imgStyle}
                    src="../pizzas/focaccia.jpg"
                    alt="pizza01"
                />
            </div>
            <div style={detailsStyle}>
                <p>Fucaccia</p>
                <p style={PizzaDetails}>
                    Bread With italian olive oil and rosemary
                </p>
                <p>6 </p>
            </div>
        </div>
    );
}

export default Pizza;
