module.exports = function(app) {

    app.get("/", function(req, res) {
        res.render("landing");
    });
    app.get("/home", function(req, res){
        res.render("landing");
    });
    
    app.get("/artwork", function(req, res){
        res.render("gallery");
    });
    
    app.get("/code", function(req, res){
        res.render("code");
    });
}
