// metrics.js
const {
  collectDefaultMetrics,
  Registry,
  Gauge,
  Counter,
  Summary,
} = require("prom-client");

const registry = new Registry();
collectDefaultMetrics({ register: registry });

// Métricas personalizadas (ejemplos)
const httpRequestDurationMicroseconds = new Summary({
  name: "http_request_duration_ms",
  help: "Duration of HTTP requests in ms",
  labelNames: ["method", "route", "code"],
  registers: [registry],
});

const activeRequests = new Gauge({
  name: "active_requests",
  help: "Number of active requests",
  registers: [registry],
});

const redisCommandsCounter = new Counter({
  name: "redis_commands_total",
  help: "Total number of Redis commands executed",
  labelNames: ["command"],
  registers: [registry],
});

module.exports = {
  registry,
  httpRequestDurationMicroseconds,
  activeRequests,
  redisCommandsCounter,
};
