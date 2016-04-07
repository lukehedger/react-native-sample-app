# Tasks

## Generate templates

Templates can be generated for all Redux modules to reduce boilerplate repetition. Run the command below and choose which templates to generate:

```bash
npm run generate
```

## New generators

Simply create a new folder and file in the `tasks/templates/` directory and then register it in the `tasks/generate.js` file. It'll need a prompt choice and a template file path - that's it.

The generator uses Gulp to run the task and [`gulp-template`](https://github.com/sindresorhus/gulp-template) to pass data to the templates.
