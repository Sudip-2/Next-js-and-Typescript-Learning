// Union
// Normally we can only give only of type in there but with union operator it will take both types number or string
type uidType = number | string;
const uid = (uid: uidType): void => {
  console.log(uid);
};

// uid("Hello");


// intersection is not either or but we can take both values that are included in the type
interface businessPartner {
  name:string,
  creditScore:number,
}

interface emp{
  empEmail:string,
  number:number
}

type userIdentity = businessPartner&emp

const contract = (user:userIdentity) => {
 console.log(`Hello ${user.name} your email is ${user.empEmail}`)
}

// contract({name:"Sudip",creditScore:700,empEmail:"p452570@gmail.com",number:8100464681})