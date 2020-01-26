import _ from 'lodash';
import icon from './icons/icon.svg';
import bears from './img/bears.png';
import imgicon from './img/icon.svg';
import obj from './modules/module2';
import './style.scss';
console.log(bears);


console.log(icon);

console.log(imgicon);

setTimeout(() => {
  import('./modules/module1');
}, 2000)

obj.hello('index page')

console.log(_.indexOf([1,2,3,2,3], [3]))

console.log('что-нибудь свое')
