# AwesomeComponents

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.7.

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

### Documentation
https://openclassrooms.com/fr/courses/7471281-perfectionnez-vous-sur-angular/7471288-preparez-les-fondations

### Command Usage To Init
`ng new awesome-components --style=scss --skip-tests=true --routing`
- AppName `awesome-components`
- Style SCSS
- Don't generate test
- Generate Automaticly routing file

ng `ng add @angular/material`
- Add @angular/material at project with configuration : 
- `Deep Purple/Amber` theme 
- Angular Material typography styles
- Include and enable animations

### Command Usage for structure
CoreModule et SharedModule (pour une architecture propre)
- ng g m core
- ng g m shared

SocialMediaModule will be first feature module (lazy-loaded)
- ng g m social-media --routing

HeaderComponent (global header app), in CoreModule
- ng g c core/components/header

#### Ressources
Background image: `https://s3.eu-west-1.amazonaws.com/course.oc-static.com/courses/7471281/blurred-bg.jpeg`

#### Architecture
core -> 

#### Voc
Les resolvers font partie du routing d'une application Angular. Quand un utilisateur navigue vers une route qui a besoin de récupérer des données, le resolver effectue la requête, et la navigation ne se termine que lorsque les données sont arrivées.

- Un resolver est un outil de routing qui est appelé lorsqu'un utilisateur cherche à accéder à la route où il est placé.
- Le resolver récupère des données avant d'afficher la route souhaitée via sa méthode  resolve() .
- Cette méthode retourne les données sous forme soit d'Observable, soit de Promise, ou "en vrac".
- Le resolver est enregistré au niveau de la configuration de routing, et est associé à une clé d'objet.
- Le component cible de la route utilise ensuite l'Observable data de ActivatedRoute pour récupérer les données via cette même clé.



