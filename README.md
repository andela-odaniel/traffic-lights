# Traffic-lights
Traffic lights intersection simulator using ReactJs

## The problem
Create 4 traffic lights that simulate an intersection.
The traffic lights only operate between 9am and 9:30am.
The traffic lights are designated (N, S) and (E, W) like a compass.
When the traffic lights are not in operation, no lights will appear on any traffic light
North and South lights will operate together
East and West lights will operate together.
When the North and South lights are green, the East and West lights will be red
When the East and South lights are green, the North and South lights will be red
When the lights switch from green to red, the yellow light must be displayed for 30 seconds.
When the lights switch from red to green, the yellow light must be displayed for 30 seconds.
Traffic light changes happen every 5 minutes.

### Running the App
```shell
yarn install or npm install
yarn start or npm start
```

### Testing the App
```shell
yarn test or npm test
```
