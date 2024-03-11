let person_name = "\tMuhammad\nTalha\t";
//trim
let trimName = person_name.replace(/\t/g, "");
//\n
let _n = trimName.replace(/\n/g, " ");
console.log(_n);
export {};
