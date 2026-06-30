import { Vector3 } from "./Yuu API/Basic Types/Vector3";
import { inWorldConsole } from "./Yuu API/Console";
import { registerStart } from "./Yuu API/RegisterStart";
import { buildMaze } from "./CoolsMaze";
import { robotlevel } from "./RobotTest";


registerStart(start);
function start() {
  inWorldConsole.visible(true, new Vector3(0, 1.5, -1.5));
  console.log('Hi and Welcome to Cools Test World V0.1!');
  console.log('Last Change Was: " Finished The Outer walls Of The Maze."');

  startGamelevels();
}
  

  function startGamelevels() {
   Mazelevel();

  }


  function Mazelevel() {
    buildMaze.spawnMaze();
}

function Robotlevel(){
  robotlevel.SpawnRobotLevel();
}
