import { Vector3 } from "./Yuu API/Basic Types/Vector3";
import { spawnPrimitive } from "./Yuu API/SpawnPrimitive";
import { Quaternion } from "./Yuu API/Basic Types/Quaternion";
import { Color } from "./Yuu API/Basic Types/Color";

export const robotlevel = {
    SpawnRobotLevel,
}

function SpawnRobotLevel(){
SpawnPlateform();
SpawnRobot();

}

function SpawnPlateform(){
    
    const RobotFloor =spawnPrimitive.cube(
        new Vector3(10, 0, 10),
        new Vector3(16, 0.2, 16),
        Quaternion.one,
        Color.green,
        1,
        true,
        'Static',
        undefined,
    );

}

function SpawnRobot(){
spawnRobotBodyandhead();
LeftAndRightArm();
LeftAndRightLegs();

}


function spawnRobotBodyandhead(){


 const RBody =spawnPrimitive.cube(
    new Vector3(10, 1, 10),
    new Vector3(0.6, 0.8, 0.3),
    Quaternion.one,
    Color.blue,
    1,
    true,
    'Animated',
    undefined,
);

const RShoulder =spawnPrimitive.cube(
    new Vector3(10, 1.65, 10),
    new Vector3(0.8, 0.1, 0.1),
    Quaternion.one,
    Color.black,
    1,
    true,
    'Animated',
    RBody,
);  

const RSpine =spawnPrimitive.cube(
    new Vector3(10, 1, 10),
    new Vector3(0.1, 1, 0.1),
    Quaternion.one,
    Color.black,
    1,
    true,
    'Animated',
    RBody,
);

const Rhead =spawnPrimitive.cube(
    new Vector3(10, 1.6, 10),
    new Vector3(0.9, 0.6, 0.6),
    Quaternion.one,
    Color.blue,
    1,
    true,
    'Animated',
    RSpine,

);

const RScreen =spawnPrimitive.cube(
    new Vector3(10, 1.6, 9.1),
    new Vector3(0.8, 0.01, 0.5),
    Quaternion.one,
    Color.black,
    1,
    true,
    'Animated',
    Rhead,
);

}


function LeftAndRightArm(){
}


function LeftAndRightLegs(){
}
