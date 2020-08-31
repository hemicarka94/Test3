import { getAllShips } from './source'

export const proba2 = 'dadsad'

export const divIspis = document.querySelector('#ispis')



getAllShips().then(res => {
    console.log(res)

    res.data.forEach(element => {
        const divBrod = document.createElement('div')
        divBrod.id= 'divBrod'
        divIspis.appendChild(divBrod)

        const imeBroda = document.createElement('p')
        imeBroda.textContent= element.ship_name
        divBrod.appendChild(imeBroda)

        const tipBroda = document.createElement('p')
        tipBroda.textContent= element.ship_type
        divBrod.appendChild(tipBroda)

        const statusBroda = document.createElement('p')
        statusBroda.textContent=element.active
        divBrod.appendChild(statusBroda)

        const slika= document.createElement('img')
        slika.id='slikabroda'
        slika.src=element.image
       
        divBrod.appendChild(slika)

        //linkovanje slike

        slika.addEventListener('click', () => {
           location.href=element.url
        })
    });
})