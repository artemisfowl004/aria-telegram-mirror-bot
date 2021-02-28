module.exports = Object.freeze({
  TOKEN: '1568517767:AAHCYtHr0Snv7Jphl-3QqBFcvdBKA7qgtbA',
  ARIA_SECRET: 'myaria2',
  ARIA_DOWNLOAD_LOCATION: '/home/user/path/to/download/dir',
  ARIA_DOWNLOAD_LOCATION_ROOT: '/', //The mountpoint that contains ARIA_DOWNLOAD_LOCATION
  ARIA_FILTERED_DOMAINS: [], // Prevent downloading from URLs containing these substrings
  ARIA_FILTERED_FILENAMES: [], // Files/top level directories with these substrings in the filename won't be downloaded
  ARIA_PORT: 8210, // Port for aria2c RPC server, if you change this here, make sure to update aria.sh as well
  GDRIVE_PARENT_DIR_ID: '0AFjX8c8S5_BFUk9PVA',
  OTHER_GDRIVE_DIR_IDS: [], // This is needed if u want to look for files in multiple dirs on list command
  SUDO_USERS: [1645049777, 1426433009], // Telegram user IDs. These users can use the bot in any chat.
  AUTHORIZED_CHATS: [678, 901], // Telegram chat IDs. Anyone in these chats can use the bot.
  STATUS_UPDATE_INTERVAL_MS: 5000, // A smaller number will update faster, but might cause rate limiting
  DRIVE_FILE_PRIVATE: {
    ENABLED: true,
    EMAILS: ['someMail@gmail.com', 'someOtherMail@gmail.com']
  },
  DOWNLOAD_NOTIFY_TARGET: {  // Information about the web service to notify on download completion.
    enabled: false,   // Set this to true to use the notify functionality
    host: 'hostname.domain',
    port: 80,
    path: '/botNotify'
  },
  COMMANDS_USE_BOT_NAME: {
    ENABLED: false,  // If true, all commands except '/list' has to have the bot username after the command
    NAME: "@nameOf_bot"
  },
  IS_TEAM_DRIVE: true,
  USE_SERVICE_ACCOUNT: false,
  INDEX_DOMAIN: "https://mirrorbot007.mirrorbot007.workers.dev/0:/",
  TELEGRAPH_TOKEN: '9ea6cfb5ef856e7c8fb3fec675ec10f67d8fbe15d44ea178c1abc0ac249c' // Telegraph token, if you want to show search results in telegra$
});
