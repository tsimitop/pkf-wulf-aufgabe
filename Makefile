# Default port
MONGO_PORT=27017

# Docker Compose file
COMPOSE_FILE=docker-compose.yml

# --------------------------------------------------
# Run application
# --------------------------------------------------
all: install
	$(MAKE) dev-backend &
	$(MAKE) dev-frontend &
	wait

# --------------------------------------------------
# Local dependency installation
# --------------------------------------------------
install: install-backend install-frontend

install-backend:
	cd backend && npm install

install-frontend:
	cd frontend && npm install

# --------------------------------------------------
# Local development
# --------------------------------------------------
dev-backend:
	cd backend && npm run dev

dev-frontend:
	cd frontend && npm run dev

# --------------------------------------------------
# MongoDB (local, if installed)
# --------------------------------------------------
mongo:
	mongod --dbpath ./data/db --port $(MONGO_PORT)

# --------------------------------------------------
# Docker Compose
# --------------------------------------------------
up:
	docker-compose -f $(COMPOSE_FILE) up -d --build

down:
	docker-compose -f $(COMPOSE_FILE) down

logs:
	docker-compose -f $(COMPOSE_FILE) logs -f

# --------------------------------------------------
# Cleanup
# --------------------------------------------------
clean:
	rm -rf backend/node_modules frontend/node_modules
	docker volume prune -f

# --------------------------------------------------
# General commands
# --------------------------------------------------

.PHONY: help all clean up down logs mongo
help:
	@echo "Available commands:"
	@echo "  make					- Start application"
	@echo "  make install-backend   - Install backend dependencies"
	@echo "  make install-frontend  - Install frontend dependencies"
	@echo "  make dev-backend       - Start backend locally"
	@echo "  make dev-frontend      - Start frontend locally"
	@echo "  make mongo             - Start local MongoDB (if installed)"
	@echo "  make up                - Start everything with Docker Compose"
	@echo "  make down              - Stop Docker Compose services"
	@echo "  make logs              - Tail logs from Docker Compose"
	@echo "  make clean             - Remove node_modules and Docker volumes"
