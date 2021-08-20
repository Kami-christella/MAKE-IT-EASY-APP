class Transport {
    constructor(firstName, secondName, tel, Agency, carPark, id) {
        this.firstName = firstName
        this.secondName = secondName
        this.tel = tel
        this.Agency = Agency
        this.carPark = carPark
        this.id = id
    }
}

document.querySelector('#info').addEventListener('submit', function (e) {
    e.preventDefault()

    const fName = e.target.firstN.value
    const sName = e.target.secondN.value
    const tel = e.target.tel.value
    const agency = e.target.check.value
    const Gare = e.target.book.value
    const depHours = e.target.hours.value
    const journey = e.target.pay.value
    const modePay = e.target.payment.value


    // let data=new Transport(fName,sName,tel,agency,Gare)
    //   let allEl={firstName:fName,lastName:sName,tel,agency,Gare}


    let getAllElements = localStorage.getItem('Transport')

    let objectJSON
    
    if (getAllElements) {
        objectJSON = JSON.parse(getAllElements)
    } else {
        objectJSON = []
    }


    const id = uuid()

     
        // for (let i = 0; i < objectJSON.length; i++) {

        //     if(agency==="matunda Express"&&Gare==="Nyabugogo Park"&&depHours==="7am"&&journey==="Kigali-Musanze"&&objectJSON[i].fName.length<2){
        // objectJSON.push({
        //     id: id,
        //                 firstName: fName,
        //                 lastName: sName,
        //                 tel: tel,
        //                 agency: agency,
        //                 Gare: Gare,
        //                 depHours: depHours,
        //                 journey: journey,
        //                 modePay: modePay
        // })
        // document.getElementById('info').innerHTML = ` your name is ${fName} ${sName}, your tel number is ${tel}
        // you booked ${agency} in ${Gare} with  id of ${id.slice(24, 37)} and you will depart at ${depHours}, you successfully paid with ${modePay}
        // journey to ${journey}`
        // break
        //     }else if(agency==="matunda Express"&&Gare==="Nyabugogo Park"&&depHours==="7am"&&journey==="Kigali-Musanze"&&objectJSON[i].fName.length>2){
        //         document.getElementById('info').innerHTML = 'The Bus is full'
        //     }

        //     }
  


    //   if(objectJSON!==null){
    //     for (let i = 0; i < objectJSON.length; i++) {
    //         if(agency==="matunda Express"&&Gare==="Remera Park"&&depHours==="7am"&&journey==="Kigali-Musanze"&&objectJSON[i].fName.length<2){
    //     objectJSON.push({
    //         id: id,
    //                     firstName: fName,
    //                     lastName: sName,
    //                     tel: tel,
    //                     agency: agency,
    //                     Gare: Gare,
    //                     depHours: depHours,
    //                     journey: journey,
    //                     modePay: modePay
    //     })
    //     document.getElementById('info').innerHTML = ` your name is ${fName} ${sName}, your tel number is ${tel}
    //     you booked ${agency} in ${Gare} with  id of ${id.slice(24, 37)} and you will depart at ${depHours}, you successfully paid with ${modePay}
    //     journey to ${journey}`
    //     break
    //         }else if(agency==="matunda Express"&&Gare==="Nyabugogo Park"&&depHours==="7am"&&journey==="Kigali-Musanze"&&objectJSON[i].fName.length>2){
    //             document.getElementById('info').innerHTML = 'The Bus is full'
    //         }

    //         }
    //   }



       for (let i = 0; i < objectJSON.length; i++) {
            if (objectJSON.length <= 11) {
    objectJSON.push({
        id: id,
        firstName: fName,
        lastName: sName,
        tel: tel,
        agency: agency,
        Gare: Gare,
        depHours: depHours,
        journey: journey,
        modePay: modePay

    })
    document.getElementById('info').innerHTML=` Izina ryawe ni ${fName} ${sName}, number yawe ya telephone ni ${tel}
        wakatishije ${agency} muri ${Gare} ufite code ya ${id} uragenda saa  ${depHours} wishyuye na ${modePay} ku rugendo rwa 
        ${journey} `
break

            } else if (objectJSON.length > 11 ) {
                document.getElementById('info').innerHTML = 'Imodoka yuzuye'
            }
       }

    const stringData = JSON.stringify(objectJSON)
    const datJSON = localStorage.setItem('Transport', stringData)
    if (stringData) {
        return JSON.parse(stringData)
    }

})


