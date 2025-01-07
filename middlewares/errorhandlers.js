const notFound = (req, res, next) => {
    res.send("You seem lost. You must have taken a wrong turn back there.");
};

const errorHandler = (err, req, res, next) => {
    console.error(err);
    res.status(500).send("Something broke. What did you do?");
};

module.exports = {
    notFound,
    errorHandler
};
