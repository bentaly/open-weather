# open-weather

> Welcome to the Open Weather 5 day forcast.


## Hosted version of the app:

> https://open-weather-buildit.herokuapp.com

Allow the browser to get your location, and wait a second...

## How to run

To get this if you're looking at it on GitHub:

```bash
git clone https://github.com/bentaly/open-weather
cd open-weather
```

Go to the root of the project and run:

```bash
npm install
```

and 

```bash
bower install
```

then simply:

```bash
gulp
```

A tab should open with the app - please refresh if the styling is off - see below.
Note running this locally does not enable geolocation - see below.

## How to test

Simply run:

```bash
gulp test
```

### Notes from the Author

This is not the greatest UI design, this is more a showcase of some of the things I can do.

For example the background video could change depending on weather, but it wouldn't demonstrate any more of my abilities, just the fact I thought of it (see what I did there?).

If I had more time I'd work a lot on the UI. It is difficult to see the day forcast, so splitting the days up and using a clock for time and showing the way the weather changes on each day would've been nice.

I'd add some UI to let the user know the browser is getting thier location. As it is the user simply waits for a second or two after accepting.

I'd like to have added some more tests, end to end with something like protractor, but also coverage of the controllers and other modules.

I'd also bundle the node and gulp project together, for time sakes I used a sample node server - just to push this to heroku.

Sometimes on first build due to the asynchronous task running nature of my build system, some styling is off, which i could fix given more time by ensuring the tasks ran sychronously.

As Heroku serves on HTTPS, the fact that open weather api was served over http caused an issue. In later versions of Chrome (amongst others) you cannot serve http content over http.

So I decided to open an API endpoint on the node server. I've not used lots of node before so forgive if the implementation is a little crude.

I added the index-for-node.js which starts the node server to this project - just for you to see the implementation. 

I also had to allow the origin 0.0.0.0:3000 since my gulp server spins up at that address, and I wanted to be able to access the endpoint on the heroku server.

Serving everything over https meant I could utilise Geoloaction, which is also nice.

The extra couple of steps at the end - especially venturing into Node, meant I spent a little over the 4 hrs on this - probably.
