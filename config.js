//GHOST-MD code
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMElYaGhWZzdQTFlqcFpTL1hTeC80MHNpbklIaTZoRzNla2RzbmY4a0Vscz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRzZuak11Z1dHSlVKUHJtYTZjWVBaYVRvdHZJM3F2VGhDVmRnZ3lFMS9Tbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJSDMwVklidG1taEp3Y01HemFrY1d5RUY5VzdkMEVkOU8vV29TQVJROFZBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRRjZRZTJxMFJrb2NnL3M3R2dRQ3VHWGdmVFBSTW9DYlpKbTRQM1M2ZkZJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtLMFJ5SUVnV2FSSFAwRDlFU3hFN1l4WGU3cUhOekxWd3ZzWkxTVElnRVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpjR000L3VyK21lU3d4VVV0UkFRclFIL2FYekdDTHZFSHNDbmM5NlVQVUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUZUVGFVYjlSRkZOamRKN2xHczR6blk0V0dSejRlaGdxanNDajR5dUZHMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUXBZQlNVZXhaR0dZZDJOQnRzbWtDSnNtR215YUdzL3NVSXVIK21MWXpuZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZzVTRHVFlOREJaa3NEcDZPemZiMlU5aXZrYVBrQzZ2V280VDdYbVV4UzlVV0RKakRFcFV1UlRXeGdnY2JDaml6SFFUOXp6R05ZOEJrbzA2azdwRkN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE4LCJhZHZTZWNyZXRLZXkiOiJrSHdiWjJFRnNzL1dobDZNd2orTCtUSENKYldEbjlWUmF0VGZNNTZqNFIwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzQxMTQwNjIwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkUzNzY1QTRGMzMwNUY4QkZFMTM3REI4MzE3MkUzNkFGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzMwMzQ1MTh9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IldaZXRwMFBOU1l5eHhIcWxRWWl1d2ciLCJwaG9uZUlkIjoiYWE4OGY1YTEtNDg4OS00MmMzLWJlMmUtODRjYWY3ZGFmYWU5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlTbUNvNUxKMm1uZ1Aya280ZWszSS80c3NVcz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBZ05pVDdGcmVWaHVrMW04SnpSYzhTZjBCWU09In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRVZaTTlQVlkiLCJtZSI6eyJpZCI6Ijk0NzQxMTQwNjIwOjY1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkNZQkVSIEdIT1NUIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJV3FpOElCRUlXRXNMb0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIveGhDQit3ZXRaZ3pkeWhGK0JpWktheFV2WFRoS3NldVlBNTF3Ujl2UFVjPSIsImFjY291bnRTaWduYXR1cmUiOiJQNVBlQjBXNjBkRXRlRGFZWWtaNUpKcG95ejJzc25PMWJ1eklNR3RVeGlnRWs3RjhJSnlGT0w5UmFOcmJXM042QUswWEFtNm5DN0ZXTzhVdzFRNmRCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNU5oc0FDcS9YSzQzRDBKeEUrYjM3MFVTYXdRWHdFWXZpYTdKR01LRSs3Umlwb25GaU4zbmVhMUh4VzFoRG9zOVNUTy9PcEZManBiSjNrbk9mVy9wQ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc0MTE0MDYyMDo2NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmOFlRZ2ZzSHJXWU0zY29SZmdZbVNtc1ZMMTA0U3JIcm1BT2RjRWZiejFIIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMzMDM0NTE0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU5USyJ9";
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
