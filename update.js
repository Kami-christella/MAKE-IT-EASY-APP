class Transport{
    constructor(firstName,secondName,tel,Agency,carPark,id){
        this.firstName=firstName
        this.secondName=secondName
        this.tel=tel
        this.Agency=Agency
        this.carPark=carPark
        this.id=id
    }
}

document.querySelector('#info').addEventListener('submit',function(e){
    e.preventDefault()
  
    const fName=e.target.firstN.value
    const sName=e.target.secondN.value
    const tel=e.target.tel.value
    const agency=e.target.check.value
    const Gare=e.target.book.value
    const depHours=e.target.hours.value
    const journey=e.target.pay.value
    const modePay=e.target.payment.value
   

//   let data=new Transport(fName,sName,tel,agency,Gare,depHours,journey,modePay)
//   let allEl={firstName:fName,lastName:sName,tel,agency,Gare}
let getAllElements=localStorage.getItem('Transport')
const code=e.target.code.value
console.log(code)


const id=uuid()
// if(getAllElements.id.slice(24,37)===code){
    const objectJSON=JSON.parse(getAllElements)
    
    for (var i = 0; i < objectJSON.length; i++) {
        if(code === objectJSON[i].id){  //look for match with name
objectJSON.splice(i,1,{
    id:id,
    firstName:fName,
    lastName:sName,
    tel:tel,
    agency:agency,
    Gare:Gare,
    depHours:depHours,
    journey:journey,
    modePay:modePay
   
})
document.getElementById('info').innerHTML=`You successfully updated, your name is ${fName} ${sName}, your tel number is ${tel}
you booked ${agency} in ${Gare} with  id of ${id.slice(24,37)} and you will depart at ${depHours}, you successfully paid with ${modePay}
journey to ${journey}`
break
        }
     else if(code!==objectJSON[i].id){
document.getElementById('info').innerHTML='The code is not available,please write correctly your information'
     }
      
    }
   
//        const button=document.createElement('a')
//        const divEl=document.createElement('div')
//    button.textContent='Pay Ticket'
//    button.setAttribute('href','/pageOne.html')
//    divEl.append
//    // }Child(button)
//        // if(objectJSON<=25){
         
       // }
       // else if(objectJSON>25) {
       //     document.getElementById('info').innerHTML='The Bus is full'
       //    }
   
       // console.log(getAllElements);
       //how to count elements in the array
      //console.log(objectJSON[20]) 
  
const stringData=JSON.stringify(objectJSON)
const datJSON=localStorage.setItem('Transport',stringData)  
 
})