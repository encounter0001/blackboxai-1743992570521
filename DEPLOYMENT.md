# WYNO Anti-Cheat Dashboard Deployment Instructions

## Overview
This document provides instructions for deploying the WYNO Anti-Cheat Dashboard on a web server.

## Prerequisites
- A web server capable of serving static files (e.g., Nginx, Apache, Caddy)
- Access to the server's file system or hosting control panel
- Optional: HTTPS certificate for secure connections

## Deployment Steps

### 1. Copy Files
- Upload all dashboard files and folders to the web server's document root or desired directory.
- Ensure the following files are included:
  - `index.html`
  - `config.html`
  - `logs.html`
  - `about.html`
  - `README.md`
  - `favicon.ico`
  - Any other assets (CSS, JS, images)

### 2. Configure Web Server
- Configure your web server to serve the files with correct MIME types.
- Set the document root to the directory containing the dashboard files.
- Enable directory listing if desired (optional).

### 3. Enable HTTPS (Recommended)
- Obtain an SSL/TLS certificate (e.g., via Let's Encrypt).
- Configure your web server to use HTTPS for secure communication.
- Redirect HTTP traffic to HTTPS.

### 4. Security Considerations
- Protect the Discord webhook URL; do not expose it publicly.
- Use firewall rules to restrict access if necessary.
- Regularly update the dashboard files with security patches.

### 5. Testing
- Access the dashboard URL in a browser.
- Verify all pages load correctly.
- Test theme toggling and configuration saving.
- Check logs and alerts functionality.

## Running Locally (Development)
- Use Python's built-in HTTP server for quick local testing:
  ```bash
  python3 -m http.server 8000
  ```
- Access via `http://localhost:8000/index.html`.

## Troubleshooting
- If pages do not load, check file permissions and web server logs.
- Ensure all dependencies (Font Awesome, Tailwind CDN) are accessible.
- Clear browser cache if changes are not reflected.

## Support
For issues or feature requests, please contact the WYNO Security Team.