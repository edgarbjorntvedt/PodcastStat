module.exports = function(route){
    return function(req, res, next){
        try{
            let result = route(req, res, next)

            if(result && result.catch){
                result.catch(next)
            }
        }catch(err){
            next(err)
        }
    }
}