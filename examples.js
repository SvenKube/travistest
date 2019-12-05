console.log(process.env.TEST);

if(process.env.FAIL_EXAMPLES)
	process.exit(-1)

process.exit(0);
