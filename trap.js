const sounder = new Sounder();
const SoundList = [
	'カンニング.mp3',
	'いくぞー.wav',
	'さあいこかみんな.wav',
	'最後の勝負.wav',
	'はじまったぞ.wav',
	'ほらきたぞ.wav',
	'みてるか.wav',
	'奇跡.wav',
	'どうだよ.wav',
	'ほらな.wav'
	];
const MAX_TIME = 1000*60*2;
var counter = MAX_TIME;
SoundList.forEach((name,i)=>{
	sounder.addFile("random/"+name, i);
})
sounder.loadFile(function(){
	(function(){
		sounder.playSound(Math.floor(Math.random()*SoundList.length),false,()=>{
			arguments.callee()
		});
	})()
})
window.sounder = sounder