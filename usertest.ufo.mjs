export default {
	cmd: 'ut',
	async script(args, ufo, tools){
		const {prompt} = tools;
		console.log('ut');
		const res = await prompt();
		console.log(res);
	}
}
