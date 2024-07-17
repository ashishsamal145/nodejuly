import chalk from "chalk";

console.log(chalk.blue("Hello World"));
console.log(chalk.red("Hello World"));
console.log(chalk.green("hello World"));
console.log(chalk.blue.bgRed.bold('Hello world!'));
console.log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));
console.log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);