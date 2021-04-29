# Projet microservices

## Dossier serviceToken
Application **expressjs** permettant d'obtenir un token et de vérifier si un token existe  
Lancement du service:
```
cd project-microservices/solution/serviceToken
npm i
node index.js
```
[Vidéo](https://opusidea-training.s3.eu-west-3.amazonaws.com/projet-microservices/serviceToken.webm)  


## Dossier serviceStudent
Application **sailjs** permettant d'obtenir la liste des ids des étudiants enregistrés en base  
ainsi que le détail d'un étudiant à partir de son id  
Lancement du service: 
```
cd project-microservices/solution/serviceStudent
npm i -g sails
npm i
sails lift
```
[Vidéo](https://opusidea-training.s3.eu-west-3.amazonaws.com/projet-microservices/serviceStudent.webm)


## Dossier spa
Application **html/vanillajs** permettant de tester la communication avec les 2 microservices  
Lancement de l'application:
```
cd project-microservices/solution/spa
npm i -g serve
serve
```
[Vidéo](https://opusidea-training.s3.eu-west-3.amazonaws.com/projet-microservices/spa.webm)