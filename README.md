# Myweatherapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.0.
Key tasks: 1. Fetch country list and display selection.
           2. Call weather API to get data for selected country. 
           3. Pass APPID in weather API call.
           4. Display Summary, temperature, humidity, description(cloudy) for selection.

To run the application run the following commands after cloning:
   1). npm install (for installing node modules).
   2). npm install -g @angular/cli (to setup cli environment for angular, node version should be 18 or above)
   3). npm install ng serve 
   4). npm serve -o  (for running the website locally)


There  is some error i was facing to show the output according to city, although the api works fine. I think time should be extended a little bit more.
You can change the city by going to src->weather.component.ts -> city (variable)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
