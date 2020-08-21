start: network node_exporter prometheus

network:
	@docker network create prometheus-workshop || true

prometheus:
	@docker run --name prometheus-1 --rm -p 9090:9090 --network=prometheus-workshop -v $(PWD)/etc/prometheus.yml:/etc/prometheus/prometheus.yml prom/prometheus

node_exporter:
	@docker run -d --name exporter-1 --rm -p 9100:9100 --network=prometheus-workshop bitnami/node-exporter:latest
