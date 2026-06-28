import { Vector3 } from "./Yuu API/Basic Types/Vector3";
import { inWorldConsole } from "./Yuu API/Console";
import { registerStart } from "./Yuu API/RegisterStart";
import { spawnPrimitive } from "./Yuu API/SpawnPrimitive";
import { Quaternion } from "./Yuu API/Basic Types/Quaternion";
import { Color } from "./Yuu API/Basic Types/Color";


registerStart(start);
function start() {
  inWorldConsole.visible(true, new Vector3(0, 1.5, -1.5));
  console.log('Hi and Welcome to Cools Test World V0.1!');
  console.log('Last change was: " added two walls to the world"');

  startGame();
}

function startGame() {
  const cubefloor =spawnPrimitive.cube(
    new Vector3(0, 0, -25),
    new Vector3(20, 0.2, 43),
    Quaternion.one,
    Color.green,
    1,
    true,
    'Static',
    undefined,
  );

   const cubeleftwall =spawnPrimitive.cube(
    new Vector3(-21.5, 3, -25),
    new Vector3(0.2, 3, 43),
    Quaternion.one,
    Color.blue,
    1,
    true,
    'Static',
    undefined,
  );

   const cuberightwall =spawnPrimitive.cube(
    new Vector3(21.5, 3, -25),
    new Vector3(0.2, 3, 43),
    Quaternion.one,
    Color.red,
    1,
    true,
    'Static',
    undefined,
  );

}
