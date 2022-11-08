const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor(){
    this._computer = [];
    this._player = [];
  }

  setting(){
    while(this._computer.length < 3){
        const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
        if(!this._computer.includes(NUMBER))
            this._computer.push(NUMBER);
    }
  }

  play() {
    while(true){
        this.setting();
        console.log("숫자 야구 게임을 시작합니다.");
    }
  }

}

module.exports = App;