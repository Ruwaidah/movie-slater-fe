import Amc from './images/theaterimg/amc.png'
import NoImage from './images/theaterimg/no-img.svg'
import Regal from './images/theaterimg/regal.jpg'
import Showplace from './images/theaterimg/showplace.jpg'


const theaterImg = [
    {
      theaterName: /amc/i,
      img: Amc
    },
    {
      theaterName: /regal/i,
      img: Regal
    },
    {
      theaterName: /showplace/i,
      img: Showplace
    },
    {
      theaterName: '',
      img: NoImage
    }
  ]


export function displayImage(input){
    for(const test of theaterImg){
        if(input.match(test.theaterName)){
            return test.img
        }else{
          console.log('nope')
        }
    }
}
