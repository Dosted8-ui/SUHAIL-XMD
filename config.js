const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233248195376";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_08_11_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzksXG4gICAgICAgIDksXG4gICAgICAgIDc3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjU1LFxuICAgICAgICA5NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDksXG4gICAgICAgIDU0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDk0LFxuICAgICAgICAxODcsXG4gICAgICAgIDExLFxuICAgICAgICA2NCxcbiAgICAgICAgMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDMyLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTIzLFxuICAgICAgICA0MixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODMsXG4gICAgICAgIDksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOCxcbiAgICAgICAgNixcbiAgICAgICAgMTA1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQzLFxuICAgICAgICA4NixcbiAgICAgICAgNDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgNDEsXG4gICAgICAgIDgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQwLFxuICAgICAgICA4NixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNixcbiAgICAgICAgMTIxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAzNCxcbiAgICAgICAgNzksXG4gICAgICAgIDE1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTE1LFxuICAgICAgICA3MyxcbiAgICAgICAgMjMzLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OCxcbiAgICAgICAgMTUwLFxuICAgICAgICA3MixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDMsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDM1LFxuICAgICAgICAyOCxcbiAgICAgICAgMjAyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTQxLFxuICAgICAgICA0MixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMixcbiAgICAgICAgNDcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzLFxuICAgICAgICA0LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAzOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjEzLFxuICAgICAgICA2MixcbiAgICAgICAgMTM0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODksXG4gICAgICAgIDUwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzksXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTgsXG4gICAgICAgIDg0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjMxLFxuICAgICAgICA5LFxuICAgICAgICAxODksXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTcsXG4gICAgICAgIDU1LFxuICAgICAgICA4OSxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA0OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjE5LFxuICAgICAgICA5LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDMwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDczLFxuICAgICAgICA0NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNyxcbiAgICAgICAgMjAwLFxuICAgICAgICA2MixcbiAgICAgICAgMTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzksXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTcwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDc3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTMxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNUM3RjBYQ1BwTUF2WDJEbXdGemQrdG0zbmFsaEtrdWRUSFpSM2xCSS85cz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMyLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMyLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNTZPM1FRQXhSVXUtMVNzbk5ITUpyZ1wiLFxuICBcInBob25lSWRcIjogXCI0NjBlNTBhOC1mNzBjLTQ5NGUtYjY2NS1kMzRhMTQ2NWMzNWNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzQsXG4gICAgICAxNDMsXG4gICAgICAyMjgsXG4gICAgICAxMzAsXG4gICAgICAyMDEsXG4gICAgICAyNDEsXG4gICAgICAxMDcsXG4gICAgICAxMjAsXG4gICAgICAxMixcbiAgICAgIDE4NCxcbiAgICAgIDE1MCxcbiAgICAgIDE0MixcbiAgICAgIDUwLFxuICAgICAgMTY3LFxuICAgICAgNjIsXG4gICAgICA0NixcbiAgICAgIDExMCxcbiAgICAgIDI1MSxcbiAgICAgIDE3MyxcbiAgICAgIDIzMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDgsXG4gICAgICAxMjksXG4gICAgICA1MyxcbiAgICAgIDc5LFxuICAgICAgODQsXG4gICAgICA4OSxcbiAgICAgIDE0NCxcbiAgICAgIDY3LFxuICAgICAgNjAsXG4gICAgICAxLFxuICAgICAgMTcwLFxuICAgICAgODgsXG4gICAgICA3MSxcbiAgICAgIDE5MyxcbiAgICAgIDEwNyxcbiAgICAgIDI0MCxcbiAgICAgIDcyLFxuICAgICAgMjUzLFxuICAgICAgOTAsXG4gICAgICAyNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiR1FLMVgzNDlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzI0ODE5NTM3Njo0NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTA3OTI3ODY1OTU5OTU6NDRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUDM5LzlzQkVPT2twN2tHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJTN1lWekNuSDRsa25FZVpJYk1qU2ViVk1CRUFOVVB6SnorV3kzM0QxN1IwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImtuTEkwK3hxV3VUYU52Vmx2SkxlQkllK3JQenZHMmxuODUxNk5kU0FFelBKeXorZWJMREhEbVVhRGJ5NTV3eW4xT0JRdDZsTlpBN2NTRzQ1UzhkZUF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkxiQnpFVjlpUzZ4bVBBM25IQjJTdktsNjZvUTEwS0VSejVCS29EcEp5Z081ODBqdlF6bi81UVF2OGJNWWRCNENHcW03ejgrMENKUXo2b0hIK2ZlMGpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzI0ODE5NTM3Njo0NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzA3OTQwODdcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Dosted-MD",
  ownername:process.env.OWNER_NAME|| "Dosted💥💥",


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
