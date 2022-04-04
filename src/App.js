import React from "react";

// reference solution: https://codesandbox.io/s/leaderboard-reference-solution-6yxm4

const TOURNAMENT_DATA = {
  members: [
    {
      id: 1,
      name: "Mary",

      // 1 is a win, 0 is a loss
      // the score is the sum of all results for a member
      results: [0, 1, 1, 0]
    },
    {
      id: 2,
      name: "Adam",
      results: [1, 1, 1, 1]
    },
    {
      id: 3,
      name: "Jamie",
      results: [0, 0, 0, 1]
    },
    {
      id: 4,
      name: "Steve",
      results: [1, 1, 0, 1]
    }
  ]
};

// Render the leaderboard
// eg:
// 1. Adam - 4pts
// 2. Steve - 3pts
// 3. Mary - 2pts
// 4. Jamie - 1pt
function Leaderboard({ members }) {
  let sorted = members.slice().sort((a, b) => getScore(b) - getScore(a));

  return (
    <>
      {sorted.map((member) => {
        return (
          <p>
            {member.name} - <Score member={member} />
          </p>
        );
      })}
    </>
  );
}

function Score({ member }) {
  let points = getScore(member);

  return points > 1 ? `${points}pts` : `${points}pt`;
}

function getScore(member) {
  return member.results.reduce((a, b) => a + b, 0);
}

export default function App() {
  return <Leaderboard members={TOURNAMENT_DATA.members} />;
}
