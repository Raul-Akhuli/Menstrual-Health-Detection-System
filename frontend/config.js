/**
 * Configuration Manager for Blood Health Advisor
 * Handles environment-specific API base URLs
 */

// ─── ENVIRONMENT DETECTION ──────────────────────
const ENVIRONMENT = {
    LOCAL: {
        name: "local",
        baseUrl: "http://127.0.0.1:8022",
        description: "Local development server"
    },
    PRODUCTION: {
        name: "production",
        baseUrl: "https://server.uemcseaiml.org/blood",
        description: "UEM Server (Production) via nginx proxy"
    }
};

// ─── ACTIVE CONFIGURATION ───────────────────────
// AUTO-DETECT: If you're on localhost, use local server.
// If accessed from any other domain (production), use the production server.
const isLocal = ["localhost", "127.0.0.1"].includes(window.location.hostname);
const ACTIVE_ENV = isLocal ? ENVIRONMENT.LOCAL : ENVIRONMENT.PRODUCTION;
// ─────────────────────────────────────────────────

// ─── DERIVED CONFIGURATION ──────────────────────
const BASE_URL = ACTIVE_ENV.baseUrl;

// Debug logging (remove in production if needed)
console.log(`🔗 Backend Environment: ${ACTIVE_ENV.name.toUpperCase()} (${ACTIVE_ENV.description})`);
console.log(`📍 Base URL: ${BASE_URL}`);
