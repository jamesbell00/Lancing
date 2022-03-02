
   
export const handleHelloWorld = async (req, res) => {
    console.log("freelancer home page")
    return res.render("homepage.ejs",{
        user: req.user
    });
};

export const handleCompanyHome = async (req, res) => {
    console.log("company home page")
    return res.render("cohome.ejs",{
        user: req.user
    });
};
