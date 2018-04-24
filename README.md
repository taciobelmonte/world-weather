# World Weather App

World Weather is an application specifically designed to display weather information from various cities around the world.

The release version only includes the exhibition of 5 European cities by default and a functionality to search any city in the world.
 
The architecture designed and developed for the project allows to scale and extend the resources of the application simply and quickly.

## Technologies

World Weather App was developed by using ReactJS. 

For CSS, this project utilizes SASS pre-processor with Bourbon and Neat.

To start the project, you can follow the instructions below.

## How to get started

Firstly, you need to install NPM in your machine. You can check more infos here (https://www.npmjs.com/).

After NPM installed and running, you will need to setup this app. See instructions below:

1 - Install all project dependencies with `npm install`

2 - Start the development server with `npm start`

It's done! You should have World Weather running straight way...

## Diving into project conception

Basically, the World Weather proposal contains 7 components in React. The detailed explanation of each component can be seen below.
In general, data is required in the App.js component and passed via props / states to the child components.

InIn addition, this project has utilized React Router in order to create two Routes:
 
 1 - The mains route (/)
 
 2 - The search route (/search)

App.js
-- 
Main component of the application. In it all API requests are made. The data is handled and then passed via state to the child components.

WorldWeather.js
--
Component of the WorldWeather application. Receive weather and forecast information for requested cities. (5 european cities choosed by default)

Search.js
--
Component of Search feature. Receive weather, forecast information and a search function to get city from API.

City.js
--
Component that renders city information.

CityDetails.js
--
Component that renders city details informations.

Header.js
--
Component to display Header html

Footer.js
--
Component to display Footer html


## Project Structure
```bash
├── README.md
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
    └── manifest.json
└── src
    ├── assets
        ├── app 
        │   ├── sass #Production files. File watchers and SCSS compiler from PHP storm were used. In css folder below, you can check the minified files produced from this file.
        │            # Human readable files inside this folder.
        ├── css 
            ├── index.css 
            ├── main.min.css #minified version
            ├── responsive.min.css #minified version
        ├── images 
        │   ├── add.svg
        │   ├── amsterdam.jpg
            ├── berlin.jpg
            ├── chart.jpg
            ├── chart2.jpg
            ├── close.svg
            ├── logo.svg
            ├── london.jpg
            ├── no-image.jpg
            ├── paris.jpg
            ├── rome.jpg
            ├── close.svg
            ├── waves.svg
    ├── components 
         ├── structure
             ├── Header.js
             ├── Footer.js
         ├── App.js
         └── City.js
         └── CityDetails.js
         └── Search.js
         └── WorldWeather.js
    ├── tests 
    ├── utils 
            ├── API.js 
    └── index.js
```

## Architecture
You can check in the image below how the components architecture was designed for this application.

The UI was separated by components, modularizing the html, avoiding repeated and unnecessary code. 

This model allows the application to be simple, yet scalable and powerful when developing new functionalities.

In addition to that it is understandable in terms of the semantics and logical structure of the project.
![alt text](http://taciobelmonte.com.br/world-weather/chart4.jpg)



## Limitations
1 - Images used for cities are currently being entered manually. It would be interesting in the future to pull these images automatically. Thus, it would only be necessary to inform the city and the whole system would draw the correct information, including the images. For this, it would be necessary to use other APIs or generate a registration format.

##Future applications

1 - The API returns many other data besides the sea level. It may in the future implement functionality that will expand weather information, passing clearer and more accurate information