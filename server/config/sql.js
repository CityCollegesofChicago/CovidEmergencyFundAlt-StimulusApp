   var  sql = require("mssql"),
        env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
        config = require('./config.js')[env],
        mailService = require('./smtp-email.js');




exports.saveApplication = function(req, res) {
    var applicationData =  req.body.student;
    saveData(applicationData,res);
};
   var saveData = function(applicationData,  res) {
       new sql.ConnectionPool(config.sqlConfig).connect().then(function (pool) {
       console.log(applicationData.email);
           return pool.request()
               .input('studentId', sql.VarChar(10), applicationData.EmployeeNumber)
               .input('username', sql.VarChar(50), applicationData.username)
               .input('email', sql.VarChar(5000), applicationData.EmailAddress)
               .input('phone', sql.VarChar(5000), applicationData.phone)
               .input('name', sql.VarChar(5000), applicationData.DisplayName)
               .input('otherEmail', sql.VarChar(5000), applicationData.otherEmail)
               .execute('saveApplication')
       }).then(function (result) {
           sql.close();
           mailService.sendEmail(applicationData.EmailAddress);
           res.send(result);
       }).catch(function (err) {
           console.log("catch");
           res.status(400);
           console.log("error saving applicant data: " + err.toString());
           sql.close();
           return res.send({reason: err.toString()});
       });
       sql.on('error', function (err) {
           console.log("error");
           sql.close();
           res.status(400);
           console.log("error saving applicant data: " + err.toString());
           return res.send({reason: err.toString()});
       });
   };

