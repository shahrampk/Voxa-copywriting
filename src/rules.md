Each folder must have a single responsibility.
Each layer should solve only one type of problem.
Keep all components in components directory
Keep all pages in pages directory
Keep all services in services directory

Single services file can have multiple but related service
e.g auth.js file
    login service
    signup service
    reset password service

Component and pages files extension must be .jsx
Service and util files extension must be .js

Folder names must be lowercase
Folder names must be meaningful

Component file names = PascalCase
Non-component file names = camelCase
Add description for important files

Component names = PascalCase
1 component = 1 responsibility
Add description for components

Variables = camelCase
Variable names must be meaningful
Boolean variables = is / has / can / should

Function names must be verbs
1 function = 1 responsibility
Function names must be descriptive
Add description for function