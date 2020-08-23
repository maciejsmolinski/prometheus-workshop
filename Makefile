start:
	@docker-compose up

stop:
	@docker-compose down

load-test:
	@wrk -t24 -c500 -d10s http://localhost:3131
