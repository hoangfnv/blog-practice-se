docker-compose -f docker-compose.testing.yml down
docker-compose -f docker-compose.testing.yml build --no-cache
docker-compose -f docker-compose.testing.yml -p blog-testing up --force-recreate
