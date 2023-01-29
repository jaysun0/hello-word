import { addTopic, createTopicWord } from './components/topics.js';
import './components/nav/nav.js';

const domElements = {
  cards: document.querySelectorAll('.card'),
  first: {
    input: document.getElementById('first-input'),
    card: document.getElementById('first-card'),
    label: document.getElementById('first-label'),
    backLabel: document.getElementById('first-back-label'),
    button: document.getElementById('first-btn'),
  }, second: {
    input: document.getElementById('second-input'),
    card: document.getElementById('second-card'),
    label: document.getElementById('second-label'),
    backLabel: document.getElementById('second-back-label'),
    button: document.getElementById('second-btn')
  }, third: {
    input: document.getElementById('third-input'),
    card: document.getElementById('third-card'),
    label: document.getElementById('third-label'),
    backLabel: document.getElementById('third-back-label'),
    button: document.getElementById('third-btn'),
  }, fourth: {
    input: document.getElementById('fourth-input'),
    card: document.getElementById('fourth-card'),
    label: document.getElementById('fourth-label'),
    backLabel: document.getElementById('fourth-back-label'),
    button: document.getElementById('fourth-btn'),
  }, fifth: {
    input: document.getElementById('fifth-input'),
    card: document.getElementById('fifth-card'),
    label: document.getElementById('fifth-label'),
    backLabel: document.getElementById('fifth-back-label'),
    button: document.getElementById('fifth-btn'),
  }, sixth: {
    input: document.getElementById('sixth-input'),
    card: document.getElementById('sixth-card'),
    label: document.getElementById('sixth-label'),
    backLabel: document.getElementById('sixth-back-label'),
    button: document.getElementById('sixth-btn'),
  }, seventh: {
    input: document.getElementById('seventh-input'),
    card: document.getElementById('seventh-card'),
    label: document.getElementById('seventh-label'),
    backLabel: document.getElementById('seventh-back-label'),
    button: document.getElementById('seventh-btn'),
  }, eighth: {
    input: document.getElementById('eighth-input'),
    card: document.getElementById('eighth-card'),
    label: document.getElementById('eighth-label'),
    backLabel: document.getElementById('eighth-back-label'),
    button: document.getElementById('eighth-btn'),
  }
}

const answers = {
  kitchen: {
    first: 'нож',
    second: 'ложка',
    third: 'вилка',
    fourth: 'тарелка',
    fifth: 'чашка',
    sixth: 'чайник',
    seventh: 'поварешка',
    eighth: 'сковорода'
  }, bathroom: {
    first: 'душ',
    second: 'ванна',
    third: 'тапки',
    fourth: 'мыло',
    fifth: 'зеркало',
    sixth: 'полотенце',
    seventh: 'шампунь',
    eighth: 'фен'
  }, body: {
    first: 'голова',
    second: 'лоб',
    third: 'рука',
    fourth: 'нога',
    fifth: 'спина',
    sixth: 'живот',
    seventh: 'локоть',
    eighth: 'колено'
  }, road: {
    first: 'колесо',
    second: 'машина',
    third: 'топливо',
    fourth: 'багаж',
    fifth: 'водитель',
    sixth: 'пассажир',
    seventh: 'знак',
    eighth: 'светофор'
  }
}


const houseWords = [
  createTopicWord('window', 'окно'),
  createTopicWord('roof', 'крыша'),
  createTopicWord('attic', 'чердак'),
  createTopicWord('porch', 'крыльцо'),
  createTopicWord('stairs', 'лестница'),
  createTopicWord('door', 'дверь'),
  createTopicWord('fireplace', 'камин'),
  createTopicWord('fence', 'забор'),
]
addTopic('house', houseWords);




let theme = 'light'
function changeTheme(obj){
  switch(theme){
    case 'light':
      document.documentElement.style.setProperty('--light-color', 'hsl(350, 85%, 75%)')
      document.documentElement.style.setProperty('--dark-color', '#444')
      document.documentElement.style.setProperty('--dark-dark-color', '#222')
      document.documentElement.style.setProperty('--light-dark-color', 'hsl(350, 85%, 55%)')
      document.querySelectorAll('.main-nav').forEach(c => c.style.color = 'var(--font-light-color)')
      theme = 'dark'
    break
    case 'dark':
      document.documentElement.style.setProperty('--light-color', 'hsl(85, 78%, 48%)')
      document.documentElement.style.setProperty('--dark-color', '#ddd')
      document.documentElement.style.setProperty('--dark-dark-color', '#444')
      document.documentElement.style.setProperty('--light-dark-color', 'hsl(85, 78%, 35%)')
      document.querySelectorAll('.main-nav').forEach(c => c.style.color = 'var(--font-dark-color)')
      theme = 'light'
    break
  }
}
