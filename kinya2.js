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

  // let data=new Transport(fName,sName,tel,agency,Gare)
//   let allEl={firstName:fName,lastName:sName,tel,agency,Gare}
let getAllElements=localStorage.getItem('Transport')
 const objectJSON=JSON.parse(getAllElements)
 const id=uuid()
//  if(objectJSON<=25){
    objectJSON.push({
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
    const button=document.createElement('a')
    const divEl=document.createElement('div')

// }
    // if(objectJSON<=25){
        document.getElementById('info').innerHTML=` Izina ryawe ni ${fName} ${sName}, number yawe ya telephone ni ${tel}
        wakatishije ${agency} muri ${Gare} ufite code ya ${id.slice(24,37)} uragenda saa  ${depHours} wishyuye na ${modePay} ku rugendo rwa 
        ${journey} `
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