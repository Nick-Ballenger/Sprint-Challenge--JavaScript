// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area. 
class CuboidMaker1 {
    constructor(attrs){

    
    this.len = attrs.len;
    this.width = attrs.width;
    this.height =attrs.height;}  
  
    volume = function(){
        return this.len*this.width*this.height;
      }
      surfaceArea = function(){
        return 2* (this.len*this.width+this.len*this.height+this.width*this.height);
      }
  }
  
  class CubeMaker extends CuboidMaker1{
    constructor(attrs){
      super(attrs);
    }
    //volume of a cube is the same as volume of a cuboid
cubeSurface = function(){
  return 6*this.len
}
  }
  
  
  
  let Cuboid2 = new CuboidMaker1({
  len:4,
  width:5,
  height:5
  })
  console.log(Cuboid1.volume());
  console.log(Cuboid1.surfaceArea())

  let cube2 = new CubeMaker({
    len:4,
    width:4,
    height:4
  })
  console.log(cube2.cubeSurface())
  console.log(cube2.volume())