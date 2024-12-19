import Pizza from "./Pizza";
import data from "../data/data.js";

const menuStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2 , 1fr)",
};

const styleMenu = {
    fontWeight: "400",
};

const lineStyle = {
    width: "9rem",
    height: "0.1rem",
    backgroundColor: "black",
};

const ourMenu = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBlock: "0.8rem",
    letterSpacing: "0.2rem",
};

const menuContent = {
    width: "55%",
    textAlign: "center",
    margin: "0 auto",
    lineHeight: "1.6rem",
    marginBottom: "1rem",
};

function Menu() {
    return (
        <div>
            <div style={ourMenu}>
                <div style={lineStyle}></div>
                <h2 style={styleMenu}>OUR MENU</h2>
                <div style={lineStyle}></div>
            </div>
            <p style={menuContent}>
                Authenctic italian cuisine, 6 creative dishes to choose from.
                All from our stone oven, All our organic , all dellicious.
            </p>
            <div style={menuStyle}>
                {data.map(function (pizzaData) {
                    return <Pizza pizzaData={pizzaData} key={pizzaData.name} />;
                })}

                {/* <Pizza
                    name="Focaccia"
                    img="pizzas/focaccia.jpg"
                    prices={6}
                    ingredients="Bread With italian olive oil and rosemary"
                />
                <Pizza
                    name="Pizza Margherita"
                    img="pizzas/margherita.jpg"
                    prices={10}
                    ingredients="Tomato and mozarella"
                />
                <Pizza
                    name="Pizza Spinaci"
                    img="pizzas/spinaci.jpg"
                    prices={12}
                    ingredients="Tomato, mozarella, spinach, and ricotta cheese"
                />
                <Pizza
                    name="Pizza Funghi"
                    img="pizzas/funghi.jpg"
                    prices={12}
                    ingredients="Tomato, mozarella, mushrooms, and onion"
                />
                <Pizza
                    name="Pizza Salamino"
                    img="pizzas/salamino.jpg"
                    prices={"SOLD OUT"}
                    ingredients="Tomato, mozarella, and pepperoni"
                />
                <Pizza
                    name="Pizza Prosciutto"
                    img="pizzas/prosciutto.jpg"
                    prices={18}
                    ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
                /> */}
            </div>
        </div>
    );
}

export default Menu;
