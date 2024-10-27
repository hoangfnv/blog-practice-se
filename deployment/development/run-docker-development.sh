docker-compose -f docker-compose.development.yml down
docker-compose -f docker-compose.development.yml build --no-cache
docker-compose -f docker-compose.development.yml -p blog-dev up
