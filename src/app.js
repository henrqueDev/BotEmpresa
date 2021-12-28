const Discord = require('discord.js');
const bot = new Discord.Client();
const {bot_discord} = require('./controle-lista-musicas/bot_recursivo.js');
const ytdl = require('ytdl-core');
verify = false;

const executar_bot = () => {bot_discord();};

/*
const executar_bot = async() => {
  fila = [];
bot.login("");
bot.once('ready',() => {
  console.log(`Bot online: ${bot.user.tag}!!`)
});


 
bot.on('message', async (message) =>{
  try{
  if (message.content.slice(0,5) === '!play'){
    
      const voiceChannel = message.member.voice.channel;
      const connection = await voiceChannel.join();
  
      console.log(message.content);
      
      if(verify === false){
        message.channel.send(`Adicionado pra fila!`);
        fila.push(message.content.slice(6));
        bot_recursivo(connection,message.content,fila,verify);
      
        }else{
          message.channel.send(`Adicionado pra fila!`);
          fila.push(message.content.slice(6)); 
      }}else if(message.content == '!skip'){
        const voiceChannel = message.member.voice.channel;
        const connection = await voiceChannel.join();
  
        bot_recursivo(connection,message.content,fila,verify);
      }else{
        console.log("...");
      }}catch(Excepetion){
        console.log(Excepetion);
      }
  });
}*/

module.exports = {
  executar_bot
}
