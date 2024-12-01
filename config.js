//GHOST-MD code
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUpYVWhFYjVZcS9vdVVHa05Pc1ppZ1RMbkJzanBPRlVBQk5hcS92dW0zMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMXMvZEY1Z0JKSGNPa1ZkUThIWmp6NGRMZTVqSFNHb045VHJnNGlINlF4TT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwRVBJRFQ1RUhNanFoTllJVk9WcEo1ZkpPcUZ6dEszdkJNMnhMdER2dFZrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0TmVaNGtRY3F3bmhvVm5aUTZaRkQyd3grVmpDdEROVFQ5aSt2OGtleVJ3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1DSU1Tck43eVF2US9JN0R6U1JzTUx6OUFRcVhwWks2bkxydGlPRFc2R289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iis1R0dDcFBBTm1JajNFc0ZHbVVhQTRmVGFzR0hmdjFEUFdlTldDWTFQRDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUNhYXYzWGJnOTZlclNMdTBnVWE1OEc3TVJQR2sydzBkaHAvTm9EeUIxbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSkErN3REQjNSdmpnMTU3R0RxeDhVTmM4RFd6TjhyUnRiVmxLL0JBYlJoMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik05cTFCSTNSV0c4cjlZTjVqMFEwMUVPS05VamZIVlVBdkJWbG5uQWx5VzIreFFhTnV5YUpjRHlaS2tGWFlVMjJIeVNRQTNKYTgwSDRsa2RoSHVCUGpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzYsImFkdlNlY3JldEtleSI6IkphTkJ3NG5LL0xtZG5aUVFjWHJHZTdEbFB4ck12N1JvVnI4bHZMRXlFZjQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkdtbFdXYWpqUngtSjJkb3NZZW1rVUEiLCJwaG9uZUlkIjoiM2E3NDk4NGEtYjI4MS00N2U4LTg3YjgtY2VlOWQ3ZTM3YTQyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVnZFdCZm9vU0M2WGM0TTQ1OHZKczh2OWwzbz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqWlJlQ0YvVTdqS0FCR0lVQyt6YnJWT3hoK2M9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTFlOWDVHMzUiLCJtZSI6eyJpZCI6Ijk0NzIzMjA1ODEyOjg2QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKYUE5cUFIRUozSHNMb0dHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJYVWl6eUV0NWQ4c0t5cENpbEp2dXNzcFF6OEdpbE54dWx1cE9YbXhMWEFNPSIsImFjY291bnRTaWduYXR1cmUiOiJpVXBiT0xOcWRlblJ0RCt0ZEg3alZERVJWZEV3ZU91RUlkMk1TV0pLTzZNNmVwZEFZeUpDUW5jN2x5WW96VENMTEtVaC9TaFhPbGxBaUQ5RHV3T2hEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiM0tkWkFWQlpSdG5PUHdJMWp2MXRCR3Q3ekJBU2RsWnRLZExHSjMvZ2JxZkw1dUpOZjZJK0NoZTVBMy9YSElSam1ibkJDUzVMeEhGOElvRDdaeHBFaHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcyMzIwNTgxMjo4NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWMUlzOGhMZVhmTENzcVFvcFNiN3JMS1VNL0JvcFRjYnBicVRsNXNTMXdEIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMzMDQzMTE0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUU0bSJ9";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "94715898396";
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
global.read_status = process.env.AUTO_READ_STATUS || "true";
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
