import { Vector3 } from "./Yuu API/Basic Types/Vector3";
import { spawnPrimitive } from "./Yuu API/SpawnPrimitive";
import { Quaternion } from "./Yuu API/Basic Types/Quaternion";
import { Color } from "./Yuu API/Basic Types/Color";

export const robotlevel = {
    SpawnRobotLevel,
}

function SpawnRobotLevel(){
SpawnPlateform;
SpawnRobot;

}

function SpawnPlateform(){
    
    const RobotFloor =spawnPrimitive.cube(
        new Vector3(5, 0, 5),
        new Vector3(16, 0, 16),
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
    new Vector3(5, 1, 5),
    new Vector3(1, 1, 0.5),
    Quaternion.one,
    Color.blue,
    1,
    true,
    'Animated',
    undefined,
);

const RShoulder =spawnPrimitive.cube(
    new Vector3(5, 1.1, 5),
    new Vector3(1.2, 0.2, 0.2),
    Quaternion.one,
    Color.black,
    1,
    true,
    'Animated',
    RBody,
);  

const RSpine =spawnPrimitive.cube(
    new Vector3(5, 1, 5),
    new Vector3(0.2, 1.4, 0.2),
    Quaternion.one,
    Color.black,
    1,
    true,
    'Animated',
    RBody,
);

const Rhead =spawnPrimitive.cube(
    new Vector3(5, 0.6, 5),
    new Vector3(0.9, 0.4, 0.6),
    Quaternion.one,
    Color.blue,
    1,
    true,
    'Animated',
    RSpine,

);
}


function LeftAndRightArm(){
}


function LeftAndRightLegs(){
}
