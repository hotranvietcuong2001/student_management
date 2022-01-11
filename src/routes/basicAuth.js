function authUser(req,res,next){
    if(req.user == null){
        res.status(403);
        return res.json({ error: "404 page not found" });
    }

    next();
}

module.exports = {
    authUser
}