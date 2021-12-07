const bim ={name:"Ertugrul bey",age:45,address:"Hanli Pazar", gfName:"Halima Hatun", fname:"Sulayman Shah", child:3, obasi:"kayi",pet:"aktul Gali"}
// const fname = bim.fname;
// const address = bim.address;
//destructure
const {fname,address,gfName,child}=bim
console.log(fname,address);
console.log(fname,address,gfName,child);
const complexObject = {
    name:"abc",
    info:{
        address:"karashahigar",
        leader:"Ural Bey"
    }
}
const {leader}=complexObject.info
console.log(leader);