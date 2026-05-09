class CalcController {

    constructor() {

        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();

    }

    initialize() {


        this._dateEl.innerHTML = "01/05/2020";
        this._timeEl.innerHTML = "00:00";

    }
    get displayTime() {
    return this._timeEl.innerHTML;
    }

    set displayDate(value) {
        return this._timeEl.innerHTML = value;
    }
    get displayTime() {
    return this._dateEl.innerHTML;
    }

    get displayDate() {
        return this._timeEl.innerHTML;
    }

    get displayCalc() {
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value) {
        this._displayCalcEl.innerHTML = value; 
    }

    get currentDate() {
        return new Date();
    }

    set currentDate(data) {
        this._currentDate = data; 
    }
}