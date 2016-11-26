Examen de ingreso a ML - fduran

Consideré que el examen es una oportunidad para aprender, por lo que decidí hacerlo empleando las siguientes tecnologías:

- NodeJS
- MongoDB
- Express

La API REST se encuentra deployada en Heroku.

#### Instalación

```
	git clone https://github.com/facundoduran/ml-galaxy.git
```

```
	npm install
```

#### Urls

###### Batch job que genera los datos
[https://ml-galaxy.herokuapp.com/api/seed]

###### Url obtiene la predicción para un día
[https://ml-galaxy.herokuapp.com/api/predict/day/50]

###### Url que obtiene la prediccion para los proximos N años:
[https://ml-galaxy.herokuapp.com/api/predict/years/5]

###### Url que obtiene la cantidad de periodos de sequia
[https://ml-galaxy.herokuapp.com/api/predict/getDroughtPeriods ]

###### Url que obtiene la cantidad de periodos de lluvia
[https://ml-galaxy.herokuapp.com/api/predict/getRainyPeriods]

###### Url que obtiene el día con el pico de lluvia
[https://ml-galaxy.herokuapp.com/api/predict/getMaxRainDay]

###### Url que obtiene la cantidad de periodos de condiciones optimas
[https://ml-galaxy.herokuapp.com/api/predict/getOptimalConditions]
