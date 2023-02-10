import chalk from 'chalk';
// console.log(chalk.red('Olá mundo'));

function temperaturaPaciente(temperatura) {
  temperatura >= 37.5
    ? console.log(chalk.red('Paciente febril'))
    : console.log(chalk.green('Paciente não febril'))
};

temperaturaPaciente(39.4);
