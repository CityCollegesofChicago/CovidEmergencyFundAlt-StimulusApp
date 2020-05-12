var nodemailer = require("nodemailer"),
    fs = require('fs'),
    transporter = null,
    env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
    config = require('./config.js')[env];













var mailOptions = {
    from: "covid19@ccc.edu",
    subject: "City Colleges of Chicago COVID-19 CCC Alternate Student Emergency Fund",
    html: '<h4>Thank you for your response.  A City Colleges representative will be reaching out to you in the coming weeks.</h4></br>' +

        '' + '<p>  A representative from our non-profit partner, All Chicago, will reach out to you in the coming days.</p>' +
        '' + '<p>We appreciate your patience as we work to get back to many students.  In this challenging time, please know that we are committed to your success and want to ensure you can continue to reach your academic goals. </p>' +
        '<br/>'
};


function transport(cfg) {
    var transp = nodemailer.createTransport({
        host: cfg.emailConfig.host,
        port: cfg.emailConfig.port,
        secure: false,
        tls:{rejectUnauthorized: false}
    });
    return transp;
}

function checkTransporter(){
    if (transporter == null) {
        transporter = transport(config);
    }
}


exports.sendEmail = function (toEmailAddress) {
    // if(!!toEmailAddress)
    // {
    //     mailOptions.to = toEmailAddress;
    //     mailOptionsES.to = toEmailAddress;
    //     mailOptionsPOL.to = toEmailAddress;
    //
    // }
    //var mOptions = lang === 'ES' ? mailOptionsES :  (lang === 'POL' ?  mailOptionsPOL : mailOptions);

    checkTransporter();
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log("error in email: " + error);
            return error;
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
        return info;
    });
};
