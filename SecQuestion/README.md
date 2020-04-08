### Сборка проекта
Соберите образ:
```bash
docker build -t test .
```
Создайте контейнер по только что построенному образу:
```bash
docker run -p <port>:7000 test:latest
```