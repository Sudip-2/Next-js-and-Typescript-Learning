interface newEmp {
  readonly startDate : Date, //can not change if readonly
  readonly id:number,
  name:string,
  position:string
}

const emp1:newEmp = {
  startDate: new Date(),
  id:123,
  name:"Sudip",
  position:"software dev"
}

console.log(emp1)