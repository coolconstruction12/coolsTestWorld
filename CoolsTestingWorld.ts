import { Vector3 } from "./Yuu API/Basic Types/Vector3";
import { inWorldConsole } from "./Yuu API/Console";
import { registerStart } from "./Yuu API/RegisterStart";
import { spawnPrimitive } from "./Yuu API/SpawnPrimitive";
import { Quaternion } from "./Yuu API/Basic Types/Quaternion";
import { Color } from "./Yuu API/Basic Types/Color";


registerStart(start);
function start() {
  inWorldConsole.visible(true, new Vector3(0, 1.5, -1.5));
  console.log('Hi and Welcome to Cools Test World V0.1!', Color.blue);
  console.log('Last change was: "changed the both console colours"', Color.red);

  startGame();
}

function startGame() {
  const cube =spawnPrimitive.cube(
    new Vector3(0, 0, -25),
    new Vector3(20, 0.2, 43),
    Quaternion.one,
    Color.green,
    1,
    true,
    'Static',
    undefined,
  );

}
