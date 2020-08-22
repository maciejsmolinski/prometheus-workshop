const http = require('http');

function metrics() {
    const value = Math.round(Math.random() * 10);

    return `
# HELP app_login_failed Number of failed login attempts.
# TYPE app_login_failed gauge
app_login_failed ${value}
    `.trim();
}

http.createServer(function (_, res) {
    res.write(metrics());
    res.end();
}).listen(3131);
