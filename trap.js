const sounder = new Sounder();
const SoundList = ['カンニング.mp3','いくぞー.wav','さあいこかみんな.wav','最後の勝負.wav']
SoundList.forEach((name,i)=>{
	sounder.addFile("random/"+name, i);
})
sounder.loadFile(()=>{	
	window.addEventListener('load',()=>{
		sounder.play(0)
	})
})