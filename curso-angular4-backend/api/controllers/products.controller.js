var mysql = require('../../config');
var connection = mysql();

exports.getProducts = function(req,res){
    connection.query("SELECT * FROM products", (err, rows) => {
        if (err) {
            return res.status(400).send({
				message: err
			});
        } else {
            res.json(rows);
        }
    });
};
