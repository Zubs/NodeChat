const index = (req, res) => {
    res.render("index", { title: "NodeChat" });
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
