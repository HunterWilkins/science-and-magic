module.exports = function(app) {

    app.get("/", function(req, res) {
        res.render("about");
    });
    app.get("/about", function(req, res){
        res.render("about");
    });
    
    app.get("/artwork", function(req, res){
        res.render("gallery");
    });
    
    app.get("/code", function(req, res){
        res.render("code");
    });

    app.get("/commissions", function(req, res){
        res.render("commissions");
    });
}
