module.exports = {
    errorHelper: function(res, status, message) {
        return res
                .status(status)
                .json({status,message})
    },

    succesHelper: function(res, status, data) {
        return res
                .status(status)
                .json({status,data})
    },
}