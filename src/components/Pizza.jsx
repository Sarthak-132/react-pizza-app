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
    gap: "0.5rem",
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
                <img style={imgStyle} src={props.img} />
            </div>
            <div style={detailsStyle}>
                <p>{props.name}</p>
                <p style={PizzaDetails}>{props.ingredients}</p>
                <p>{props.prices}</p>
            </div>
        </div>
    );
}

export default Pizza;
