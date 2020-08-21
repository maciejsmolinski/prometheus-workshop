start: network node_exporter grafana prometheus

network:
	@docker network remove prometheus-workshop
	@docker network create prometheus-workshop

prometheus:
	@docker kill prometheus-1 || true
	@docker run --name prometheus-1 --rm -p 9090:9090 --network=prometheus-workshop -v $(PWD)/etc/prometheus.yml:/etc/prometheus/prometheus.yml prom/prometheus

node_exporter:
	@docker kill exporter-1 || true
	@docker run -d --name exporter-1 --rm -p 9100:9100 --network=prometheus-workshop bitnami/node-exporter:latest

grafana:
	@docker kill grafana-1 || true
	@docker run -d --name grafana-1 --rm -p 3000:3000 --network=prometheus-workshop grafana/grafana
