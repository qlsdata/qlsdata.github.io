// All Javascript functionality dealing with angles expects radians for an angle.

function getRadians(deg){
  return deg * (Math.PI / 180);
}

function getVectorX(rad, mag){
  return cos(rad) * mag;
}

function getVectorY(rad, mag){
  return sin(rad) * mag;
}
