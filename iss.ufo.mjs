export default {
	cmd: 'iss',
	help: 'iss - Checks the location of the international space station',
	async script(args, ufo, tools){
		const {axios} = tools;
		const res = await axios.get('http://api.open-notify.org/iss-now.json');
		if(res.status === 200){
			console.log(res.data);
		}
		else{
			console.log('Could not get response');
		}
	}
}