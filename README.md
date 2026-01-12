# SaikatPublicRepo


receivers:
  otlp:
    protocols:
      grpc:
      http:

  hostmetrics:
    collection_interval: 10s
    scrapers:
      memory:
      disk:
      load:

processors:
  batch:

exporters:
  prometheus:
    endpoint: "0.0.0.0:9464"

service:
  extensions: [opamp]
  pipelines:
    metrics:
      receivers: [otlp, hostmetrics]
      processors: [batch]
      exporters: [prometheus]
