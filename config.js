//RCD code
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY08vTElUYTRsblJyZTJVRHM0YTU3ZW85aG9NOFk5ckhWRHJ1UWEwakRIST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVGpidzVVcGVPVWxxQ1Jra045ekhnZ09tZUlyNzRsU3JaWFE3elpuMnZFMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJRnErendFalUwOVZzNytTN3c2ODVUVExkbTFvdVlrU2ttNmpROXZUQjE0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxK2N3N3NmS2RCbC9mMUxjcWlIUzNUUFJFZldIbTU4QjBibkVkcXZUZ2tFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBKWk12UkxUalM0N1Rab2lYR203NmxJU0FrR3NVcGwraWdNVTNvU3RabEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpIdWZKeVZrLzVPd3VQeU1rT0g1MEkrWkNyQnFOV3o4Q2F4YmdsZlhpZ3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0oySXBiQjZUcVNJbXFGbTdhWUt1OUtmbjVGUW45R1pRYVdBZ29MZVVsRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0hNRUZ3LzkzVVN0NkVLMk5idTBHUTZyQU1Ta3lNSnhjU2RHZFZ4a0hCND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNrbnoydFY3Q2p2T2djaWx3N2ZPUVYvemhXeFhOR0VaL2RFQTdNQ2dDYXFSdWk0MkJaUEZMVmVDejRKcHFpZnJ5WDl6aHY2M0xhcWI0Qk85L2RmUkF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjcsImFkdlNlY3JldEtleSI6InhzWjk0WWE2Y21yTEVCWVJWQ01nbEpEemlqMm5aU1Q4dXdmUkpFZERBTEU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NDExNDA2MjBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRkJBNURDREZEOTU3M0Y0N0E2N0EyMzQ3RkE5QzYxNEQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMjg5Mzg5Mn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiVWpkcjRVcEFSa3FMVUQ2My16TzdqUSIsInBob25lSWQiOiJiMTQxMTA2Ni05Y2Q4LTRiNWYtYjFmOS04OWMxOTk3NGM4MDYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSGtxL0RYSTJSdERnTjRlbEhsbS83YjhDRUVrPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjMxNmJzOUlod01abWt5T1ZWZUVHNFk5dkFpZz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJFMkFQWFJSQiIsIm1lIjp7ImlkIjoiOTQ3NDExNDA2MjA6NjNAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0szRzNyMEJFTEM1cDdvR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ingrc1BQeUwwQnBJSU1CV3I4OVI3ZGxBSU94ckZ3MVVmNWw2eFRMVWJkbG89IiwiYWNjb3VudFNpZ25hdHVyZSI6ImE0ZTUvY3pVMlE0YWNhSytGQkJIKzJYUzAyakhnVU9rRUt4OXJRTkRxRm9wdithUGlUR0phUVVyMUVkbG12ekR6U2FPd010dVdBSmNRTEMrTjVBNEJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJjMTBWSC9vUkdtMGFBSTdDZGhORjA5eFpQUVJ4U2hBamx6Y05RYlM1S1krWnRVYUZUbXVMVzZ6aGpvbk9iV0k4Y3l3ZmpJdStaOTVKeDRlRmRqL0ZCdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzQxMTQwNjIwOjYzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNmckR6OGk5QWFTQ0RBVnEvUFVlM1pRQ0RzYXhjTlZIK1plc1V5MUczWmEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzI4OTM4ODd9";
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
