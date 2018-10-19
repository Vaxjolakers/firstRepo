import './app.css';
import { timingSafeEqual } from 'crypto';
export class App {

  activate() {
    this.createVariables();
  }
  constructor() {
    this.message = 'Hello World! It\'s me';
    
  }
  createVariables() {
    this.teamsArray = ['Mora Ik','Luleå','Djurgården','Färjestad','Rögle'];
    this.dateArray = ['20/10','25/10','27/10','30/10','1/11'];
    this.timeArray = ['18:00','19:00','15:15','19:00','19:00'];

    this.index = 0;
    this.title = 'Växjö Lakers';
    this.date = this.dateArray[this.index];
    this.time = this.timeArray[this.index];
    this.home = this.title;
    this.gone = this.teamsArray[this.index];
  }

  changeName() {
    if (this.title === 'Växjö Lakers') {
      this.title = 'Häst';
    } else {
      this.title = 'Växjö Lakers';
    }
  }

  nextGame() {
    if (this.index < this.teamsArray.length - 1) {
      this.index++;
      this.gone = this.teamsArray[this.index];
      this.date = this.dateArray[this.index];
      this.time = this.timeArray[this.index];
    }
  }

  previousGame() {
    if (this.index > 0) {
      this.index--;
      this.gone = this.teamsArray[this.index];
      this.date = this.dateArray[this.index];
      this.time = this.timeArray[this.index];
    }
  }
}