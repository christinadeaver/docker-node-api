const test = require("node:test");
const assert = require("node:assert/strict");
const { getHealth } = require("../src/health");

test("health payload reports ok status", () => {
  const payload = getHealth();
  assert.equal(payload.status, "ok");
  assert.equal(typeof payload.uptimeSeconds, "number");
  assert.ok(payload.timestamp);
});
