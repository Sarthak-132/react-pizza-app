import Pizza from "./Pizza";

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
    marginBlock: "1.7rem",
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
                <Pizza />
                <Pizza />
                <Pizza />
                <Pizza />
                <Pizza />
                <Pizza />
            </div>
        </div>
    );
}

export default Menu;
