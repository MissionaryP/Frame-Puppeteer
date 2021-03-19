// Get the mysql service
var mysql = require('mysql');

//const db = new myDb(host,user,password,database);

class myDb {
    constructor(host, user, password, db) {
      this.host = host;
      this.user = user;
      this.password = password;
      this.db = db;
    }

    // Method
    executeQuery(query) {
        var response;
      // Add the credentials to access your database
        var connection = mysql.createConnection({
            host     : this.host,
            user     : this.user,
            password : this.password,
            database : this.db
        });

        // connect to mysql
        connection.connect(function(err) {
            try{
                return response = connection.query(query, function(err, rows) {
                // And done with the connection.
                connection.release();
                });
            }catch (error) {
                console.error(error);
            }
        });
    }
}
