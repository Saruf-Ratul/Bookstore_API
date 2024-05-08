// azure-sso-config.js
const azureSsoConfig = {
    tenant: 'your-azure-tenant-id',
    clientId: 'your-azure-client-id',
    clientSecret: 'your-azure-client-secret',
    redirectUri: 'http://localhost:3000/auth/callback',
    scopes: ['openid', 'profile']
};

module.exports = azureSsoConfig;