const footerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "2rem 0",
    fontFamily: "Times New Roman",
};

const orderBtn = {
    backgroundColor: "rgb(236, 182, 5)",
    padding: "0.6rem 1.8rem",
    border: "none",
    margin: "1.2rem 0rem",
    cursor: "pointer",
};

function Footer() {
    return (
        <div style={footerStyle}>
            <p>
                We&apos;r open until 20:00 Come visit us or order Online. open
                until 20:00 Come visit us or order Online.
            </p>
            <button style={orderBtn}>Order now</button>
        </div>
    );
}

export default Footer;
