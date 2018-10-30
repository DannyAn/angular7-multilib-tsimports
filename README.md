# Angular 7 multi library project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.3.

## Project structure:
We have a big angular project with multiple apps and multiple libraries.
Some libraries depend on other libraries and so on. 
Most important feature for our development team is typescript import using aliases
set in paths object inside root tsconfig.json configuration file.

## Problem:
Passing from vscode to WebStorm we have noticed that typescript imports
autocomplete won't work as we expected.
Precisely, auto-import always suggests tsconfig alias which is correct
when we need imports from another lib but when we need relative import
inside lib, ex. import class from one directory to another using index.ts barrel,
WebStorm autocomplete won't give us that relative path as a suggestion.
Vscode autocomplete give us multiple possibilities in a popup and we were
able to choose the correct import.
It's really hard to correct all imports manually during development. If we
leave alias import internally we will have 'circular dependency error'
during the build process.

We have tsconfig.json with paths configuration as follow:
```json
 "paths": {
      "lib-utils": [
        "dist/lib-utils",
        "projects/lib-utils/src/public_api"
      ],
      "lib-utils/*": [
        "dist/lib-utils/*"
      ],
      "lib-shared": [
        "dist/lib-shared",
        "projects/lib-shared/src/public_api"
      ],
      "lib-shared/*": [
        "dist/lib-shared/*"
      ]
    }
```
Angular cli generates libraries and add relative paths to dist folder.
This is a limitation for typescript imports inside WebStorm, as far as we know.
We add the second element in lib-utils and lib-shared arrays that points to the public_api.ts.
That resolve all imports during development but unfortunately override relative path import, when needed.

## How to reproduce the problem
1) Open project with WebStorm
2) Remove import from class UserConverter in projects/lib-utils/src/lib/converters/UserConverter.ts
3) Try to import using auto import ( keyboard shortcut Alt+Return )

## How to run the application
```shell
ng serve
```
