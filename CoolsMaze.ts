import { Vector3 } from "./Yuu API/Basic Types/Vector3";
import { spawnPrimitive } from "./Yuu API/SpawnPrimitive";
import { Quaternion } from "./Yuu API/Basic Types/Quaternion";
import { Color } from "./Yuu API/Basic Types/Color";


export const buildMaze = {
  spawnMaze,
}



function spawnMaze() {
  spawnouterwalls();
  spawninnerwalls();
}

function spawnouterwalls() {

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

   const cuberoof =spawnPrimitive.cube(
    new Vector3(0, 3.2, -25),
    new Vector3(20, 0.2, 43),
    Quaternion.one,
    Color.black,
    1,
    true,
    'Static',
    undefined,
  );

   const cubeleftwall =spawnPrimitive.cube(
    new Vector3(-10, 1.6, -25),
    new Vector3(0.2, 3, 43),
    Quaternion.one,
    Color.blue,
    1,
    true,
    'Static',
    undefined,
  );

   const cuberightwall =spawnPrimitive.cube(
    new Vector3(10, 1.6, -25),
    new Vector3(0.2, 3, 43),
    Quaternion.one,
    Color.blue,
    1,
    true,
    'Static',
    undefined,
  );

  const cubebackwall =spawnPrimitive.cube(
    new Vector3(0, 1.6, -46.3),
    new Vector3(20, 3, 0.2),
    Quaternion.one,
    Color.blue,
    1,
    true,
    'Static',
    undefined,
  );

  const cubefrontrightwall =spawnPrimitive.cube(
    new Vector3(5.9, 1.6, -5),
    new Vector3(8, 3, 0.2),
    Quaternion.one,
    Color.blue,
    1,
    true,
    'Static',
    undefined,
  );

  const cubefrontleftwall =spawnPrimitive.cube(
    new Vector3(-3.1, 1.6, -5),
    new Vector3(6, 3, 0.2),
    Quaternion.one,
    Color.blue,
    1,
    true,
    'Static',
    undefined,
  );

  const cubefrontmiddlewall =spawnPrimitive.cube(
    new Vector3(0.90, 2.87, -5),
    new Vector3(2, 0.45, 0.2),
    Quaternion.one,
    Color.blue,
    1,
    true,
    'Static',
    undefined,
  );

  const cubeleftmazewall =spawnPrimitive.cube(
    new Vector3(-6, 1.6, -21.5),
    new Vector3(0.2, 3, 33),
    Quaternion.one,
    Color.blue,
    1,
    true,
    'Static',
    undefined,
  );


}

function spawninnerwalls(){
stage1();

}


function stage1() {

  const wall1 =spawnPrimitive.cube(
    new Vector3(2, 1.6, -9),
    new Vector3(12, 3, 0.2),
    Quaternion.one,
    Color.cyan,
    0.5,
    true,
    'Static',
    undefined,
  );

  }
