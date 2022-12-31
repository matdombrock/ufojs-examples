export default {
	cmd: 'weather',
	help: 'weather <location> - Checks the weather',
	async script(args, ufo, tools){
		const {axios} = tools;
		const location = args[0] ? args.join(" ") : 'Munich';
		const format = '%l:+%c+%t+%h+%w+%p\n';//args[args.length - 1] || 3;
		const res = await axios.get('https://wttr.in/'+encodeURIComponent(location)+'?format='+format);
		if(res.status === 200){
			console.log(res.data);
		}
		else{
			console.log('Could not get response');
		}
	}
}