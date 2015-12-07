# Quiz Team

A browser-based trivia game for mobile device users. 

## Table of Contents

1. [Team](#team)
2. [Usage](#Usage)
3. [Requirements](#requirements)
4. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    2. [Setting Up Environment](#setting-up-environment)
5. [Roadmap](#roadmap)

## Team

  - __Development Team Members__: Alex Castle, Adam Ellsworth, Kenneth Ho, Max Ince, Nate Meier

## Usage

Users join a lobby from the selection screen.
When all players select ready at the same time, a game begins.
Players are given six answers and one question.
The question may be answered by an answer on another user's answer board.
At the end of each round, correct answers are tallied.
The objective of the game is to cooperatively answer correctly all questions.

## Requirements

Refer to `package.json` and `bower.json`.

## Development

### Installing Dependencies

1. `npm install` from `quiz-team/` directory
2. `bower install` from `quiz-team/client/` directory
3. `cp .env.example .env` from `quiz-team/` directory
4. `gulp prodBuild` from `quiz-team/` directory
5. `node server/server.js`

### Setting Up Environment  
In the root folder of the project:

```sh
cp .env.example .env
```

Open the .env file and fill out the environment variables for development as needed.