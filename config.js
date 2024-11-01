//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348142909904";
global.sudo = process.env.SUDO || "234812909904";
global.owner = process.env.OWNER_NUMBER || "2348030985623";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk9xMURQMWtVdUVmZXlLWUdGc0VSditZd0RLeDRkKzl2THhlR3FSc2VrUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL2twd0RGTGFUYTJJM0pvekZ6aUhVSzBXTit2MGYyTk9qZTYyWWlIZjFuaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxRS9kRExYVVREUVI3RWZCdHRmblpJaVg1NHQ2YWNIWVpUQkw0bFk4ODNrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHbWtxY0ZpamU4TXdMOWpDbUNpMlVhcTBxU2JyaWdLWWdxZ25Dc1ZWSDBrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtGUmsyT0RpTldDazV2RjhtR3cwMVhpeXQrNTBVUm1sLzF3Tk4xMEZIMGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkgzTmkvdVJ6dm5WYXR6bUppSndvZDVOMHNka0ZwWFdET0hadUkycTFFWDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0pDdGMzc3c0TmlLSzE3RVFaWGJISmxTSUEva1A0Z2JXdFByTEIxUXEyTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib2VNYklQZmxOZ3doWHJ6L04yOXVVaVFGYklocmlMbUw0RU15MERrMENqcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlgzMy9YRWhEMjMrYUdOVWw2WTYzaHdUWlVNMVdTVjZDMlkxc05lN2Jwcm1HRFNZMlF0OWVNVWRHMzNKaDd1bm1wY0hoaE9aVUI0VEhiZnY5TDEvREJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUyLCJhZHZTZWNyZXRLZXkiOiJrSVJxUnVkNnVaQzZwdXdJL2gxRklGZnBSMzdacXRhODkxdm5aRFZNYmswPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgwMzA5ODU2MjNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0RCMTFDQjgwNzJFMzAxQ0U2QUI3ODcyRUNFQ0JCQTEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMDQ5NzgwOH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiN2hUYnJLVFhRZG1lY2JlMldnazhSQSIsInBob25lSWQiOiIzZjNjY2JmMy05MjdiLTRkMTMtYTBiNC0zODI0OTZjZDlhN2IiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEtIQ2lPQmUxOVdyR24rTk5LMGZia1dKZ0ZnPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5peTk1STdIb0dZMmhDbVJVVFpBM3V4aHZTZz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI1WDdXSjM3USIsIm1lIjp7ImlkIjoiMjM0ODAzMDk4NTYyMzoxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlVSRUtTT0xPUyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTk91NXJ3RkVQMlpsYmtHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQzI4L1lKU0VqNkhiSmFaamlycG16OWQvYjA3TXJKUVprczhpYTlhdCtrND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMUQ1RXJJbTlsSmNNMEdSSUdkREEzRmpwMDQ3ZVg0Qk1zdzhkNGZkZlBVY0k0YUNva0hvTFNYRmtNai9uNXRaMUNwVGkzdkpLQTJPcnQzRzdRak9lQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6InRkOGZRZWxhQThNYUhRbHpZWGpORWQ4VWp1Nk01c2VFRkNCdCtCeklvMDMyYU82dFl0ZEpHUWt2SjcranYxNm4vUHc4U0pPZ0N4L0pHN25TQ3hOdUNnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODAzMDk4NTYyMzoxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlF0dlAyQ1VoSStoMnlXbVk0cTZacy9YZjI5T3pLeVVHWkxQSW12V3JmcE8ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzA0OTc4MDMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTWk5In0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "RICHY_TECH",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
