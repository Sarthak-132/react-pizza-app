const cardStyle = {
    display: "flex",
    boxShadow: " rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
    gap: "2rem",
    padding: "2rem",
    backgroundColor: "rgb(201, 226, 205)",
};

const imgStyle = {
    height: "9rem",
};

const detailsStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
};

function Pizza() {
    return (
        <div style={cardStyle}>
            <div>
                <img
                    style={imgStyle}
                    src="../pizzas/focaccia.jpg"
                    alt="pizza01"
                />
            </div>
            <div style={detailsStyle}>
                <p>PizzaName</p>
                <p>ing01, ing02, ing03</p>
                <p style={{ marginTop: "Auto" }}>0</p>
            </div>
        </div>
    );
}

export default Pizza;
