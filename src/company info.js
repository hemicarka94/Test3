import { getCompanyInfo } from './source.js';

export const proba = 'dsadasdsa'

const header = document.querySelector('#header')

export const info = () => {
    getCompanyInfo().then(res=> {
        console.log(res)

        const naziv = document.createElement('p')
        naziv.textContent= res.data.name

        const vlasnik = document.createElement('p')
        vlasnik.textContent=res.data.founder

        const godinaOsnivanja = document.createElement('p')
        godinaOsnivanja.textContent= res.data.founded

        header.append(naziv, vlasnik,godinaOsnivanja)
    })

}
