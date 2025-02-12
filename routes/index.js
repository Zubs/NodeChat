const index = (req, res) => {
    res.cookie('IndexCookie', 'This was set from Index');

    res.render("index", {
        title: "HomePage",
        cookie: JSON.stringify(req.cookies),
        session: JSON.stringify(req.session)
    });
};

const login = (req, res) => {
    res.render("login", { title: "Login" });
};

const loginProcess = (req, res) => {
    res.redirect("/");
};

const chat = (req, res) => {
    res.render("chat", { title: "Chat" });
};

module.exports = {
    index,
    login,
    loginProcess,
    chat
};
