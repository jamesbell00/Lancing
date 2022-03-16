const path = require('path');
   
export const handleHelloWorld = async (req, res) => {
    console.log("freelancer home page")
    return res.render("homepage.ejs",{
        user: req.user
    });
    // return res.sendFile(path.join(__dirname, '../../../', 'frontend/src/screens/home.js')), { 
    //     user: req.user
    // }
};

export const handleCompanyHome = async (req, res) => {
    console.log("company home page")
    return res.render("cohome.ejs",{
        user: req.user
    });
};

export const handleFreelancerRegister = async (req, res) => {
    console.log("freelancer register page")
    return res.render("frRegister.ejs",{
        user: req.user
    });
};

export const handleCompanyRegister = async (req, res) => {
    console.log("company register page")
    return res.render("coRegister.ejs", {
        user: req.user
    })
}
