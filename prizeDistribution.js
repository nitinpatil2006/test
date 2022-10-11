<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>

      function prizeDistrubtion(award, results) {
      let currentWinningTeam = "";
      const scoreTracker = new Map();
      scoreTracker.set(currentWinningTeam, 0);

       for (const index in competitions) {
          const result = results[index];
        console.log(teamWhoWon)

      updateScores(teamWhoWon, 3, scoreTracker)

      console.log(scoreTracker)
    }
  return currentWinningTeam;
}

function updateScores(awardWon, points, scoreTracker) {
  if (!scoreTracker.has(teamWhoWon)) {
    scoreTracker.set(teamWhoWon, 0)
  } else {
    scoreTracker.set(teamWhoWon, )
  }
}

console.log(
  prizeDistrubtion(
  )
);
      };
    </script>
  </body>
</html>
