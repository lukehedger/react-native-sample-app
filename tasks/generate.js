import gulp from 'gulp';
import template from 'gulp-template';
import rename from 'gulp-rename';
import inquirer from 'inquirer';
import path from 'path';

const questions = [
  {
    name: 'module',
    message: 'Module\'s name?',
    validate: isEmpty
  },
  {
    name: 'templates',
    message: 'Which templates do you want to generate for this module?',
    type: 'checkbox',
    choices: [
      'action',
      'component',
      'container',
      'reducer',
      'saga'
    ]
  },
  {
    name: 'moveon',
    message: 'Go?',
    type: 'confirm'
  }
];

const templates = {
  action: 'actions/*',
  component: 'components/*',
  container: 'containers/*',
  reducer: 'reducers/*',
  saga: 'sagas/*',
  test: 'test/*'
}

function isEmpty (answer) {

  return answer.replace(/ /g, '') !== '';

}

function addTest (module, t) {

  let src = path.join(__dirname, 'templates', templates['test']);

  gulp.src(src)
    .pipe(rename({
      basename: module
    }))
    .pipe(gulp.dest('./test/' + `${t}s`))

}

export default (done) => {

  inquirer.prompt(questions, function (answers) {

    if (!answers.moveon) return done();

    let module = answers.module.toLowerCase();

    answers.templates.map(t => {

      let src = path.join(__dirname, 'templates', templates[t]);

      gulp.src(src)
        .pipe(template(answers))
        .on('error', console.error.bind(console))
        .pipe(rename( file => {
          file.basename = t === 'container' ? module.charAt(0).toUpperCase() + module.slice(1) : module;
          return file;
        }))
        .pipe(gulp.dest('./app/' + `${t}s`))

      addTest(module, t)

    });

  });

}
