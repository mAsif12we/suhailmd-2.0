const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/0ouxgf.jpeg" || "https://files.catbox.moe/0ouxgf.jpeg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://files.catbox.moe/0ouxgf.jpeg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_01_42_11_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDExNSxcbiAgICAgICAgODksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDY1LFxuICAgICAgICA5MixcbiAgICAgICAgMjI1LFxuICAgICAgICA4NixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjM0LFxuICAgICAgICAzNCxcbiAgICAgICAgODAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTAzLFxuICAgICAgICA3MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjUwLFxuICAgICAgICA1NCxcbiAgICAgICAgODQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDk1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTc1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTksXG4gICAgICAgIDQwLFxuICAgICAgICA1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU5LFxuICAgICAgICA5LFxuICAgICAgICAxODYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTksXG4gICAgICAgIDYyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDExMixcbiAgICAgICAgNTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDkwLFxuICAgICAgICAyOSxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDc1LFxuICAgICAgICAxNixcbiAgICAgICAgNTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTY0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDMxLFxuICAgICAgICA5OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDksXG4gICAgICAgIDgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDQsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDksXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTU0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDUyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTMyLFxuICAgICAgICA4NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTExLFxuICAgICAgICAyNTAsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMyxcbiAgICAgICAgODYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDU2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTEwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDQ1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTksXG4gICAgICAgIDU2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjAzLFxuICAgICAgICA4LFxuICAgICAgICAxMzksXG4gICAgICAgIDIzMixcbiAgICAgICAgODUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgODQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMixcbiAgICAgICAgMTUxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTU1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM5LFxuICAgICAgICA0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODMsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDUxLFxuICAgICAgICAxODQsXG4gICAgICAgIDc4LFxuICAgICAgICA4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVTBqdGlUV09lZUhwT0JHUWxNcDZOWEpKZzZqN0Ixai9MdVR0NDk3aG90UT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwMzc0ODQxNjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjc0NDM0MjVDRUUyMTgyQ0EwODk1OTEyNTE5NDYwQjQ5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMDY4NDUyMlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJlb3U5Y2E2cFRhT1NXVkNHZXRhR2h3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjllZWY4OTZhLTIwMDUtNDk2Zi05NjhlLTg5NTNmYTUyZDFiN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOCxcbiAgICAgIDg5LFxuICAgICAgMTMsXG4gICAgICAyMTAsXG4gICAgICAyNTMsXG4gICAgICAxLFxuICAgICAgMTI3LFxuICAgICAgMTUsXG4gICAgICAxMSxcbiAgICAgIDQyLFxuICAgICAgNjQsXG4gICAgICAxNjksXG4gICAgICAxMjUsXG4gICAgICAyMzIsXG4gICAgICAxNzgsXG4gICAgICA1OSxcbiAgICAgIDg5LFxuICAgICAgMTE5LFxuICAgICAgMTEwLFxuICAgICAgMTcyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NyxcbiAgICAgIDE2MyxcbiAgICAgIDE3MixcbiAgICAgIDI3LFxuICAgICAgMTk1LFxuICAgICAgMjYsXG4gICAgICA0NyxcbiAgICAgIDI0MixcbiAgICAgIDE0NixcbiAgICAgIDc1LFxuICAgICAgMTExLFxuICAgICAgMTk2LFxuICAgICAgNjksXG4gICAgICAxNzEsXG4gICAgICA1NyxcbiAgICAgIDEyOSxcbiAgICAgIDEzOSxcbiAgICAgIDExMixcbiAgICAgIDE2OCxcbiAgICAgIDEwN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQUlNGSzc2RVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDM3NDg0MTY3OjU5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI5MDk1OTI1MzY0NzM4Mzo1OUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJGYWlzYWwgVWRhc1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0p5V3ljQUVFT0xNb0xrR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwib1ZQbk1TZ0twSkhXMEFmNW5ab1JXY3NBZ1ZNSllVTmdVWFFvVW9uK0gyOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJwUGEyRk1INit4dTZZbVJnNFM1U2tLL3J2cUFkRFAvTzF2cUtDVVJiOXFnN3NXNCt6RnprRXhQejZ1UDBSSVhmOFgwMHJxR2pkL20yTSs2M2R5bWxDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIwbnhKZ0VNNFZRQ0dKSTFKanl1aFExV0FJVjRzODk4V0lyUm5DdWJ0MHNLRHB4SEtnUW9CWWo4OVR5dEhGNit6Qm5iSVR0MWFjQUZ6KytwZHpEQWtpUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwMzc0ODQxNjc6NTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwNjg0NTE3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQjlQXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCOVAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJZclh5WDlCY2ZoWnRLa2g0bGhFTmQ3L1Z4T0pHRVZyRHM1ZldyQkNGanN3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyMDkxNTg0MjcsXCJjdXJyZW50SW5kZXhcIjo3LFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzA0MDI4ODk4MjdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Faisal-XMD",
  ownername:process.env.OWNER_NAME|| "faisal",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
