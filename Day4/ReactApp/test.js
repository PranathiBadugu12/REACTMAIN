
const mariadb = require('mariadb/callback');
const conn = mariadb.createConnection({ host: 'localhost', user: 'root', password: 'root', database: 'CONFERENCEDEMO',port:'3307' });
if (conn)
    console.log("done")
else
    console.log("ERROR")

    
    conn.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO attendees VALUES (7, 'pranathi','badugu','TA','DBS','pranathi12399@gmail.com','7093841219')";
        conn.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
        });
      });
     


    // conn.query("SELECT 1 as val", (err, rows) => {
    //     console.log(rows); //[ {val: 1}, meta: ... ]
    //     conn.query(
    //         "INSERT INTO attendees(attendee_id,first_name,last_name,title,company,email,phone_number) VALUES (1, 'pranathi','badugu','TA','DBS','pranathi12399@gmail.com','7093841219')",
    //          (err, res) => {
    //         console.log("hello"+res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
    //         conn.end();
    //     });
    //     console.log("ERO")
    // });




    

      