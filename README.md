# Prometheus Workshop

Learn [Prometheus](https://prometheus.io/) and PromQL by doing

# Setup

```
# Clone the repository
git clone git@github.com:maciejsmolinski/prometheus-workshop.git
cd prometheus-workshop

# To get things up and running, execute:
docker-compose up -d

# To shut everything down, execute:
docker-compose down

# To restart things after prometheus configuration change, execute:
docker-compose restart
```

# URLs

* Prometheus: http://localhost:9090
* Node.js Apps: http://localhost:3131/metrics, http://localhost:3232/metrics
* Grafana: http://localhost:3000 (login&password: admin/admin, data source: http://prometheus:9090)

# Sample Queries

```
requests_total
requests_total{instance="first_app:3131"}
requests_total[5m]
requests_total[5m] offset 1m
avg(request_total)
avg(requests_total) by (instance)
avg(requests_total) by (instance, job)
avg_over_time(requests_total[5m])
```
