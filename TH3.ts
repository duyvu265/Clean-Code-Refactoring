class Cylinder{



    private static getPerimeter(radius:number):number{
        return 2*Math.PI*radius;
    }
    private static getBasearea(radius:number):number{
        return Math.PI*radius*radius;
    }
    public  static getVolume(radius:number,height:number):number{
        let volume :number=this.getPerimeter(radius)*height+2*this.getBasearea(radius);
        return volume;
    }
}
let result=Cylinder.getVolume(5,10);
console.log(result);