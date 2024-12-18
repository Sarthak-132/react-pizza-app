const HeadingDiv = {
    display: "flex",
    justifyContent: "center",
    paddingTop: "2rem ",
};

const headstyle = {
    color: "rgb(148,126,56)",
};

function Header() {
    return (
        <div style={HeadingDiv}>
            <h1 style={headstyle}>- Fast React Pizza co. -</h1>
        </div>
    );
}

export default Header;
