import React from "react";
import "./styles.css";

function LeagueTeams() {
  const url =
    "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League";

  const [teams, setTeams] = React.useState(null);

  React.useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setTeams(data.teams);
      });
  });

  return (
    <div className="teams">
      {teams &&
        teams.map((team, index) => (
          <div className="team" key={index}>
            <h3>{team.strTeam}</h3>
          </div>
        ))}
    </div>
  );
}

export default function App3() {
  return <LeagueTeams />;
}
