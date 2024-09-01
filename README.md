# meetup-DARVA-Cat-Next

L'objectif de ce meetup est de comparer deux solutions selon leurs performances :
* Une application React.js
* La "même" application en Next.js avec _React Server Components_

Les `.bat` et `.ps1` s'exécutent sur environnement Windows...

## Architecture des tests de performance en déployé

![archi déployée](./docs/meetup-DARVA-Cat-Next_server.drawio.png?raw=true)

## setup en local

### Selenium grid

* Java doit être installé sur le poste
* Télécharger les drivers (au minimum un driver, exemple geckodriver.exe). Ici les drivers sont téléchargés dans le répertoire `selenium/drivers`
* Télécharger la dernière version de selenium-server. Ici `selenium-server-4.23.1.jar`

Pour Selenium :
* python doit être installé sur le poste
Depuis le répertoire `selenium` :
* Exécuter `pip install -r requirements.txt`

#### Arborescence filesystem

![arbo filesystem](./docs/selenium_prerequis.png?raw=true)

#### Références

[https://www.selenium.dev/documentation/grid/getting_started/](https://www.selenium.dev/documentation/grid/getting_started/)

### Serveur de stats

* Dans le répertoire `simple-rest-api`, exécuter `npm install`

#### Références

[https://github.com/deviantony/docker-elk](https://github.com/deviantony/docker-elk)

### Application React

Depuis le répertoire `react-load-data`
* Exécuter `npm install`
* Exécuter `npm start`
* Requêter `http://localhost:3000`

Cette première requête crée un index dans ELK [http://localhost:    /react-load-data/_search](http://localhost:9200/react-load-data/_search)

### Application Next

Depuis le répertoire `next-rsc-cache`
* Exécuter `npm install`
* Exécuter `npm run dev`
* Requêter `http://localhost:3000`

Cette première requête crée un index dans ELK [http://localhost:9200/next-rsc-cache/_search](http://localhost:9200/next-rsc-cache/_search)

## run

### serveur de stats

* Dans le répertoire `simple-rest-api`, exécuter `node index.js`

### Selenium grid

* Démarrer Selenium Grid avec `start-selenium-server.bat`
* Consulter l'admin à l'URL [http://192.168.1.193:4444/ui/#](http://192.168.1.196:4444/ui/#)

### Application React | Next

* Démarrer l'application qu'on souhaite tester

### Selenium

* Démarrer la batterie de tests avec `selenium> .\start-selenium-tests.ps1`

### Résultats

* Consulter les performances de [Core Web Vitals](https://support.google.com/webmasters/answer/9205520?hl=fr) sur [http://localhost:3100/stats](http://localhost:3100/stats)

## Démo

[batch_1_30rq.webm](./docs/batch_1_30rq.webm?raw=true)

## Références Next.js

[https://nextjs.org/docs/app/building-your-application/data-fetching/fetching](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching)

[https://nextjs.org/docs/app/building-your-application/data-fetching/incremental-static-regeneration](https://nextjs.org/docs/app/building-your-application/data-fetching/incremental-static-regeneration)