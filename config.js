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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_02_42_10_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDExLFxuICAgICAgICA4OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTcsXG4gICAgICAgIDUsXG4gICAgICAgIDYyLFxuICAgICAgICA0MixcbiAgICAgICAgMTI1LFxuICAgICAgICAyOCxcbiAgICAgICAgMjI5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTcxLFxuICAgICAgICA5NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjksXG4gICAgICAgIDU0LFxuICAgICAgICAxOTksXG4gICAgICAgIDg1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjI1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDYzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTgyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDU2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTk0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODIsXG4gICAgICAgIDEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTUzLFxuICAgICAgICA2NixcbiAgICAgICAgOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTczLFxuICAgICAgICAyNSxcbiAgICAgICAgMTkwLFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3LFxuICAgICAgICA2NSxcbiAgICAgICAgODIsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzksXG4gICAgICAgIDIwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDExLFxuICAgICAgICAxODcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTEyLFxuICAgICAgICA4MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjA2LFxuICAgICAgICA5LFxuICAgICAgICA4NixcbiAgICAgICAgMTk0LFxuICAgICAgICA2NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAyMzksXG4gICAgICAgIDMyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDkyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTksXG4gICAgICAgIDI2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTksXG4gICAgICAgIDExNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTI4LFxuICAgICAgICA5MixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTY2LFxuICAgICAgICA5NixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTksXG4gICAgICAgIDUwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDYyLFxuICAgICAgICAxODEsXG4gICAgICAgIDk4LFxuICAgICAgICAxLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzAsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTksXG4gICAgICAgIDUxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxODgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDQwLFxuICAgICAgICAyMzksXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDMyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMixcbiAgICAgICAgNTUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjI5LFxuICAgICAgICAxODUsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTE2LFxuICAgICAgICA1NixcbiAgICAgICAgOTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjE2LFxuICAgICAgICA1MixcbiAgICAgICAgMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjUwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjAxLFxuICAgICAgICA0NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTkxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiK2Y5Vk02YkZQcXhpTzVUN2gyQzhqSGUxZXBKMVljS0lEZmI4RjNMMWdxST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiLThQam8wckNUWWFxSVFzdlZsNGJsUVwiLFxuICBcInBob25lSWRcIjogXCJkMGEyZjI0NC1hMzNlLTQxYTQtOGVkZi1mNmQ0NjQxN2UzZTBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA1LFxuICAgICAgNjIsXG4gICAgICA2NyxcbiAgICAgIDYzLFxuICAgICAgNzYsXG4gICAgICAxNDIsXG4gICAgICAyOCxcbiAgICAgIDgyLFxuICAgICAgNjQsXG4gICAgICAxNTcsXG4gICAgICA3NCxcbiAgICAgIDIyLFxuICAgICAgNjEsXG4gICAgICAxOTQsXG4gICAgICAxODEsXG4gICAgICA4MyxcbiAgICAgIDE2NSxcbiAgICAgIDIzMyxcbiAgICAgIDMwLFxuICAgICAgMTY2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExOCxcbiAgICAgIDE2MSxcbiAgICAgIDEwNyxcbiAgICAgIDE5OCxcbiAgICAgIDEwMCxcbiAgICAgIDEyNCxcbiAgICAgIDExLFxuICAgICAgOSxcbiAgICAgIDIwOSxcbiAgICAgIDIyOSxcbiAgICAgIDMxLFxuICAgICAgMjIxLFxuICAgICAgMTUwLFxuICAgICAgNzIsXG4gICAgICAxNCxcbiAgICAgIDE0NixcbiAgICAgIDI0NSxcbiAgICAgIDk0LFxuICAgICAgNjIsXG4gICAgICAyMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiN042R1dZTjhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzI0ODE5NTM3NjozN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTA3OTI3ODY1OTU5OTU6MzdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUGY5LzlzQkVJTGMwYmdHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJTN1lWekNuSDRsa25FZVpJYk1qU2ViVk1CRUFOVVB6SnorV3kzM0QxN1IwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInNBZ1E3WDBSVkU2b2xIZDQxMnprSTdkbDY0RERCWXpKSHZ4cG5ITlkzNGxGWlhObHU4WndVQXovNjY3b09FVmVKNHpNZXBNdDJ0MGR5dzFnSXJDaUNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImFPTnBQZUpVQnZVVTJQNytlNkJMTlF1TkkxYzVGR25Ec1RWL09VTGt1amhpVWJUcVBNZ0s1cW9wd0R5MEZxZkVhRkdZK2tLT2JoZ3Bmb29ia1pwemhnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzI0ODE5NTM3NjozN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjkzOTIxMzVcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
