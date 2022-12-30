export default {
	cmd: 'sun',
	help: 'sun <location> - Checks the sun rise/set',
	async script(args, env, tools){
		const {axios} = tools;
		const location = args[0] ? args.join(" ") : 'Munich';
		const format = '%l:+%S+%s\n';//args[args.length - 1] || 3;
		const res = await axios.get('https://wttr.in/'+encodeURIComponent(location)+'?format='+format);
		if(res.status === 200){
			console.log(res.data);
		}
		else{
			console.log('Could not get response');
		}
	}
}