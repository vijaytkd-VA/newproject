const login = async (req, res) => {
    res.json({
        success: true,
        message: "Login API"
    })
};

module.exports = {
    login,
    register,
    logout
}

const logout = (req, res) => {
    res.json({
        success: true,
        message: "Logout API"
    })
};