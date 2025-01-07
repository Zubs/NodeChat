const index = (req, res) => {
    res.send("Index Page");
};

const login = (req, res) => {
    res.send("Login Page");
};

const loginProcess = (req, res) => {
    res.redirect("/");
};

const chat = (req, res) => {
    res.send("Chat Page");
};

module.exports = {
    index,
    login,
    loginProcess,
    chat
};
