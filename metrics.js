const http = require('http');


/**
 * RESPONSE TEMPLATE
 * placeholders will get substituted with real values
 */
const template = trimmed`

  # HELP requests_total Number of requests to the application
  # TYPE requests_total counter
  requests_total <REQUESTS_TOTAL>

  # HELP app_login_count Number of failed login attempts.
  # TYPE app_login_count gauge
  app_login_count{type="failure"} <LOGIN_FAILURES>
  app_login_count{type="success"} <LOGIN_SUCCESSES>

`

/**
 * IN-MEMORY COUNTER
 */
let counter = 0

/**
 * HTTP SERVER
 * Serves metrics under localhost:3131/metrics
 */
http.createServer((request, response) => {
    if (request.url !== '/metrics') {
        return response.end();
    }

    response.end(
        template
            .replace('<REQUESTS_TOTAL>', counter)
            .replace('<LOGIN_FAILURES>', random(10))
            .replace('<LOGIN_SUCCESSES>', random(10))
    )
    counter++
}).listen(3131)



/**
 * HELPER FUNCTIONS
 */
function random(max) {
    return Math.round(Math.random() * max)
}
function trimmed([text]) {
    return text.trim().split('\n').map(line => line.trim()).join('\n')
}
