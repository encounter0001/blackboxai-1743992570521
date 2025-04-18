# WYNO Anti-Cheat Dashboard

## Overview
The WYNO Anti-Cheat Dashboard is a web-based interface for monitoring and configuring the WYNO Anti-Cheat system. It provides real-time process monitoring, configuration management, activity logs, and system information.

## Features
- Responsive dashboard with status cards and active process list
- Configuration panel with Discord webhook, spoofing modes, scan interval, and toggles
- Logs page with filtering, pagination, and CSV export
- About page with system info, changelog, credits, and license
- Dark/light mode toggle with theme persistence
- Toast notifications and loading skeletons for enhanced UX

## Installation
1. Clone the repository.
2. Ensure Python 3 is installed.
3. Run the web server:
   ```bash
   python3 -m http.server 8000
   ```
4. Open your browser and navigate to `http://localhost:8000/index.html`.

## Usage
- Navigate between Dashboard, Configuration, Logs, and About pages using the top menu.
- Use the theme toggle button in the top-left to switch between dark and light modes.
- Configure anti-cheat settings in the Configuration page and save changes.
- View detection logs and export them as CSV in the Logs page.
- Review system information and changelog in the About page.

## Deployment
- The dashboard is a static website and can be hosted on any web server.
- Ensure the server serves the files with correct MIME types.
- For production, consider using HTTPS and securing the Discord webhook URL.

## Custom Discord Bot for Alerts

This project includes a Node.js backend server (`server.js`) that runs a Discord bot to send alert messages to a specified Discord channel.

### Setup

1. Create a Discord bot via the Discord Developer Portal and obtain its bot token.
2. Invite the bot to your server with permissions to send messages.
3. Create a `.env` file in the project root with the following content:

```
DISCORD_BOT_TOKEN=your_bot_token_here
PORT=3000
```

4. Install dependencies:

```bash
npm install express body-parser discord.js dotenv
```

5. Start the server:

```bash
node server.js
```

### Usage

- The backend exposes an API endpoint `/api/alert` that accepts POST requests with JSON body:

```json
{
  "channelId": "discord_channel_id",
  "message": "Alert message text"
}
```

- The bot will send the message to the specified Discord channel.

### Integration

- Update the frontend configuration or alert system to send alert requests to this backend API.

## Final Adjustments
- The dashboard is designed with Tailwind CSS and Font Awesome for modern styling.
- JavaScript handles interactivity, theme toggling, and form validation.
- The system is extensible for integration with backend APIs.

## License
This project is licensed under the GNU General Public License v3.0.

## Credits
- WYNO Security Team - Core development
- Open Source Community - Contributions & testing

