# AwesomeComponents Form
https://openclassrooms.com/fr/courses/7471281-perfectionnez-vous-sur-angular/7718041-creez-votre-propre-validator

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

### Angular Usage
- Lazy Loading Structure
- Angular Material
- Resolvers
- Reusable components
- Custom Pipes
- Directives
- Angular Animations

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

- ng g c shared/components/comments --export
Le flag  --export  ajoute automatiquement CommentsComponent aux exports de SharedModule. Pratique, non ?

#### Structure
core-module content global elements (header, comments, ...) = `src > app > core`
- components ex: header
- models

feature-module content features (form, list, ...) = `src > app > feature-module-name`
- components
- models
- resolvers
- services

shared-module content shared = `src > app > shared`
- animations
- components
- directives
- pipes
- modules ex: material


#### Ressources
Background image: `https://s3.eu-west-1.amazonaws.com/course.oc-static.com/courses/7471281/blurred-bg.jpeg`

#### Memo Animation
- Utilisez `query` pour cibler les différents enfants de l'élément animé.
- Déclenchez des animations en parallèle avec `group` , ou en série avec `sequence`.
- Étalez des animations de liste avec `stagger`.
- Déclenchez l'animation d'un élément enfant avec `animateChild`.
- Rendez vos animations réutilisables avec `animation`, et utilisez-les avec `useAnimation`.
- Ajoutez des paramètres à vos animations avec la string interpolation, et passez des arguments pour ces paramètres via un objet de configuration passé à `useAnimation`.

#### Voc
Les resolvers font partie du routing d'une application Angular. Quand un utilisateur navigue vers une route qui a besoin de récupérer des données, le resolver effectue la requête, et la navigation ne se termine que lorsque les données sont arrivées.

- Un resolver est un outil de routing qui est appelé lorsqu'un utilisateur cherche à accéder à la route où il est placé.
- Le resolver récupère des données avant d'afficher la route souhaitée via sa méthode  resolve() .
- Cette méthode retourne les données sous forme soit d'Observable, soit de Promise, ou "en vrac".
- Le resolver est enregistré au niveau de la configuration de routing, et est associé à une clé d'objet.
- Le component cible de la route utilise ensuite l'Observable data de ActivatedRoute pour récupérer les données via cette même clé.

### MEMO - Create New Lazy Features Module
- https://openclassrooms.com/fr/courses/7471281-perfectionnez-vous-sur-angular/7718026-preparez-le-module
Un nouveau feature module ComplexFormModule ;
il doit être lazy-loaded ;
il n'aura qu'une seule route et un seul component : `ComplexFormComponent` ;
il faut pouvoir y accéder par un lien dans le header ;
ce nouveau module aura besoin de deux nouveaux components Material : `MatCheckbox` et `MatRadio` ;

1 - Create new module 
> `ng g m complex-form --routing`
2 - Create new `path` in `AppRoutingModule` for lazy loading 
> `{ path: 'complex-form', loadChildren: () => import('./complex-form/complex-form.module').then(m => m.ComplexFormModule) },`
3 - Create new link in `Header`
> <li><a routerLink="/complex-form">Complex Form</a></li>
4 - Create new component 
> `ng g c complex-form/components/complex-form`
5 - Assign component to the empty route of `ComplexFormModule` in `ComplexFormRoutingModule`
> `const routes: Routes = [
  { path: '', component: ComplexFormComponent }
];`
6 - Import `SharedModule` in `ComplexFormModule` to use export shared module
7 - Add service in `ComplexFormModule` providers


### Tricks Emmet
`mat-card.main-form`
`mat-card.form-card*5>mat-card-title`






