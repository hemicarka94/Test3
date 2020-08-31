import { getAllShips } from "./source"
import { divIspis } from './allShips'

export const proba3 = 'dsadsada'

const select = document.querySelector('#select')

const aktivan = document.createElement('option')
aktivan.value= true
aktivan.textContent='Aktivni'
select.appendChild(aktivan)

const neaktivan = document.createElement('option')
neaktivan.value= false
neaktivan.textContent='Neaktivni'
select.appendChild(neaktivan)


export const active = (x) => {
    x = getAllShips().then( res => {
    res.data.filter(element => element.active == select.value)
       console.log(res.data)
       return x
})
}

export const noActive = (y) => {
    y = getAllShips().then( res => {
        res.data.filter(element => element.active == select.value)
            return y
    })
}

select.addEventListener('change', (e) => {
    e.preventDefault()
    divIspis.innerHTML=''
    if(select.value == aktivan.value){
        divIspis.appendChild(active())
    }
    else if(select.value == neaktivan.value){
        divIspis.appendChild(noActive())
    }

})


