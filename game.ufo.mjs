const rooms = {
	'room 0':{
		text:'Welcome to the game.',
		branches: ['door 1','door 2']
	},
	'door 1':{
		text:'Welcome to door 1.',
		branches: ['room 0','open door 1']
	},
	'open door 1':{
		text:'The door wont open.',
		branches: ['room 0','try door 1 again']
	},
	'try door 1 again':{
		text:'It opens this time.',
		branches: ['room 0','room 1']
	},
	'room 1':{
		text:'Welcome to room 1.',
		branches: ['exit','exit']
	},
	'door 2':{
		text:'Welcome to door 2.',
		branches: ['room 0','open door 2']
	},
	'open door 2':{
		text:'The door opens.',
		branches: ['room 0','room 2']
	},
	'room 2':{
		text:'Welcome to room 1.',
		branches: ['exit','exit']
	},
}


export default {
	cmd: 'game',
	async script(args, ufo, tools){
		const {prompt} = tools;
		let loop = true;
		let roomId = "room 0";
		while(loop){
			console.clear();
			const room = rooms[roomId];
			console.log();
			console.log(room.text);
			console.log('.......');
			console.log('1: '+room.branches[0]);
			console.log('2: '+room.branches[1]);
			let res = await prompt("<1|2|q> ");
			//res = res.toLowerCase();
			let selected = -1;
			if(res.includes("1")){
				console.log("1");
				selected = 0;
			}
			else if(res.includes("2")){
				console.log("2");
				selected = 1;
			}
			else if(res.toLowerCase() === "q"){
				loop = false;
			}
			if(selected !== -1){
				if(room.branches[selected] === "exit"){
					loop = false;
				}
				if(rooms[room.branches[selected]]){
					roomId = room.branches[selected];
				}
				else{
					console.log('The end...');
					loop = false;
				}
			}

		}
		console.clear();
	}

}
