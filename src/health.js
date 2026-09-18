function getHealth() {
  return {
    status: "ok",
    uptimeSeconds: Math.round(process.uptime()),
    timestamp: new Date().toISOString(),
  };
}

module.exports = { getHealth };
