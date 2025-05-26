FROM ubuntu:latest

WORKDIR /app

COPY code.c /app

RUN apt update && \
    apt install -y build-essential && \
    gcc --version

CMD sh -c "gcc code.c 2>&1 > log.txt && ./a.out 2>&1 > log.txt"