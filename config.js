//RCD code
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0JsWUgzQmZ4RjdvWS9NYnI5a0tkUlV3YlhlNFJhbWNaREJob0RmZnkycz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaXFDbVQvKzAxdk8zUWhES3VpZ2d6WGY4NlUzR3QvZnppK01OcXl3V0pscz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhQThLV09QWTI0dXZUR1dDWFM0Y1RzY0IvYVVTUkduVUNocFUwQUt2UjNZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2QzVkazlZNmIzanJLdjBjMzFYVHZ4bzByRnhWKzFzZkw4UWpmRkRHbzBBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlLSVBSVzFFTlJ0YThGWnI0K3htVXFMYWI4bjZDaStob3RNZVEyaXoxMFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFKRFF5amgwZmNCQzB4OTJ3cGE3SGQwYWgxYldYcGZPQmpId01rOFMyQWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0hWZHhvUXpDQkFHODlHUTdEb05lbjFZcHVocW1QcjhhZmlRellxM05sOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidG5WRUN5TkU1LzdydEFjUTVRandYUXZnS21QR0licDRWV1lsUUVVY254MD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndHVHoyZzZuZGtvenhqMmpuSjhNMU4rZEwxaHkycTdEOWpxcEwyNGMwblRVeFZKTkgxU2Uzb3lyTDhiTnJpK09vNmN5NUpBNmhsOWV1ZDNsRENaVUJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzgsImFkdlNlY3JldEtleSI6InhiRnZyUEVZYUp2TkJtVDdOclNhdEpTTkp1WXRHZkwrUlF3cExSbkExdFU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkZ4RVJNOXpwU2VXR2NfbmMxSGx3WFEiLCJwaG9uZUlkIjoiM2QyMDdkZTYtZmU4My00MGRlLWFhYjMtMjNkMTMxNzE0MGU4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVZUFNHd01uaWZMdmdWTCs3Rkp6ZUFub1Jwcz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvVmVFQjd6OVZkWlpJN3Q2RjNTb2JaK1Z3TTA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQTI4NURDTUoiLCJtZSI6eyJpZCI6Ijk0Nzg3NDM4OTI5OjU5QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOdjk3SzhCRUtQZnBMb0dHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJxMUhRcHJFbDVOWmZpeHVBSE1pdldCUDhZVzFCcUMwV21nSUd4OXJ5NlFZPSIsImFjY291bnRTaWduYXR1cmUiOiJCQUVCVHJ0SXNxM0Z3ZFkvblJjZHRsR3ZTSjd4U3NRZjhNWVp3RzBIc21XSysrQzdQM3BBTFRBMGl3ck1LVjNqcW1TVnlNNVByeWRXY3FDYlhJRklDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVGs4VFRwYWRPSXA5V0xkaTBVOFZnbnk5V0E4Rzd2K0w5aVkwV3kvVHQyeWk1enJ5R2cxUW1LSE1RdmpyRlpxclB4dnlHcDJuMDVQMEdUTnBkQ2NMQXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc4NzQzODkyOTo1OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhdFIwS2F4SmVUV1g0c2JnQnpJcjFnVC9HRnRRYWd0RnBvQ0JzZmE4dWtHIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMyODQ5NTg0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU96RiJ9";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "94789958225";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://files.catbox.moe/41sdu1.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://files.catbox.moe/41sdu1.jpg";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`GHOST-MD`",
  author: process.env.PACK_AUTHER || "GHOST-MD",
  packname: process.env.PACK_NAME || "GHOST",
  botname: process.env.BOT_NAME || "GHOST-MD",
  ownername: process.env.OWNER_NAME || "GHOST",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/KIND-GHOST/GHOST-MD-V3.git";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaobbRhG8l5Mmhh2IA3O";
global.website = process.env.GURL || "https://chat.whatsapp.com/DhCdan60qzH0yoIxmybU3i";
global.devs = "94741140620";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "null";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
