let person =[
    {
        name:`a`,
        color:`yellow`,       
    },
    {
        name:`b`,
        color:`green`,
    },
    {
        name:`c`,
        color:`black`,
    }
]
let converColor={
    yellow:`vang`,
    red:`do`,
    green:`xanh `,
    black:`den`
}
person.map((item)=>{
    console.log(`Nguoi ${item.name} thich mau ${converColor[item.color]}`);
})
for(let i=0;i<person.length;i++){
    person[i].number=Math.floor(Math.random()*100)
}
let list=person.filter(item=>item.number<50)
let List=person.filter(item=>item.number>=50)
person.sort(function(a,b){
    return a.number-b.number
})
console.log(list);
console.log(List);
console.log(person);