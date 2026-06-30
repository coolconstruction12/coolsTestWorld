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

  const MazeWall1 =spawnPrimitive.cube(
  new Vector3(0, 1.6 -10),
  new Vector3(0.2, 3, 0.2),
  Quaternion.one,
  Color.red,
  1,
  true,
  'Static',
  undefined,
  );
  
  const MazeWall2 =spawnPrimitive.cube(
    new Vector3(0, 1.6, -11),
    new Vector3(0.2, 3, 0.2),
    Quaternion.one,
    Color.red,
    1,
    true,
    'Static',
    undefined,
  );

   const MazeWall3 =spawnPrimitive.cube(
    new Vector3(0, 1.6, -12),
    new Vector3(0.2, 3, 0.2),
    Quaternion.one,
    Color.red,
    1,
    true,
    'Static',
    undefined,
  );

   const MazeWall4 =spawnPrimitive.cube(
    new Vector3(0, 1.6, -13),
    new Vector3(0.2, 3, 0.2),
    Quaternion.one,
    Color.red,
    1,
    true,
    'Static',
    undefined,
  );

     const MazeWall5 =spawnPrimitive.cube(
    new Vector3(0, 1.6, -14),
    new Vector3(0.2, 3, 0.2),
    Quaternion.one,
    Color.red,
    1,
    true,
    'Static',
    undefined,
  );

     const MazeWall6 =spawnPrimitive.cube(
    new Vector3(0, 1.6, -15),
    new Vector3(0.2, 3, 0.2),
    Quaternion.one,
    Color.red,
    1,
    true,
    'Static',
    undefined,
  );

     const MazeWall7 =spawnPrimitive.cube(
    new Vector3(0, 1.6, -16),
    new Vector3(0.2, 3, 0.2),
    Quaternion.one,
    Color.red,
    1,
    true,
    'Static',
    undefined,
  );

     const MazeWall8 =spawnPrimitive.cube(
    new Vector3(0, 1.6, -17),
    new Vector3(0.2, 3, 0.2),
    Quaternion.one,
    Color.red,
    1,
    true,
    'Static',
    undefined,
  );

     const MazeWall9 =spawnPrimitive.cube(
    new Vector3(0, 1.6, -18),
    new Vector3(0.2, 3, 0.2),
    Quaternion.one,
    Color.red,
    1,
    true,
    'Static',
    undefined,
  );

     const MazeWall10 =spawnPrimitive.cube(
    new Vector3(0, 1.6, -19),
    new Vector3(0.2, 3, 0.2),
    Quaternion.one,
    Color.red,
    1,
    true,
    'Static',
    undefined,
  );
}
