const http = require('http');

function metrics() {
    const value = Math.round(Math.random() * 10);
    const { user, system } = process.cpuUsage()
    const { heapTotal, heapUsed } = process.memoryUsage()

    return `
# HELP app_login_failed Number of failed login attempts.
# TYPE app_login_failed gauge
app_login_failed ${value}
# HELP app_cpu_usage CPU usage
# TYPE app_cpu_usage gauge
app_cpu_usage{mode="user"} ${user}
app_cpu_usage{mode="system"} ${system}
# HELP app_mem_usage Memory Usage
app_mem_usage{type="heapTotal"} ${heapTotal}
app_mem_usage{type="heapUsed"} ${heapUsed}
    `.trim();
}

http.createServer(function (_, res) {
    res.write(metrics());
    res.end();
}).listen(3131);
