FROM ghcr.io/getzola/zola:v0.21.0 AS zola

ARG LAST_FM_API_KEY
ENV LAST_FM_API_KEY=$LAST_FM_API_KEY
COPY . /project
WORKDIR /project
RUN ["zola", "build"]

FROM ghcr.io/static-web-server/static-web-server:latest
WORKDIR /
COPY --from=zola /project/public /public
