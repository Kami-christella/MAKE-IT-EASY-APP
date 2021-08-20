

document.querySelector('#info').addEventListener('submit',function(e){
    e.preventDefault()
    const fName=e.target.firstN.value
const sName=e.target.secondN.value
const tel=e.target.tel.value

// const stringData=JSON.stringify(objectJSON)
// const datJSON=localStorage.setItem('Transport',stringData)  
let getAllElements=localStorage.getItem('Transport')


// if(getAllElements.id.slice(24,37)===code){
    const objectJSON=JSON.parse(getAllElements)
// if(getAllElements!==null){
//     return JSON.parse(getAllElements)
//  }else{
//      return []
//  }
for (var i = 0; i < objectJSON.length; i++) {
    if(objectJSON[i].firstName===fName && objectJSON[i].lastName===sName &&objectJSON[i].tel===tel ){  //look for match with name
        document.getElementById('write').innerHTML=`Your code is ${objectJSON[i].id}`
        console.log(objectJSON[i])
        break
    }else if(objectJSON[i].firstName!==fName||objectJSON[i].lastName!==sName||objectJSON[i].tel!==tel){
        document.getElementById('write').innerHTML='The information is not valid, Please write correctly ypur information'
    }
}


})