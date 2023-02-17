var Calcutor = /** @class */ (function () {
    function Calcutor() {
    }
    Calcutor.calculate = function (firstOperand, secondOperand, operator) {
        switch (operator) {
            case this.ADDITION:
                return firstOperand + secondOperand;
            case this.SUBTRATION:
                return firstOperand - secondOperand;
            case this.MULTIPPLICATION:
                return firstOperand * secondOperand;
            case this.DIVISION:
                if (secondOperand != 0) {
                    return firstOperand / secondOperand;
                }
                else {
                    console.log("can not divide by 0");
                }
            default:
                console.log("unsupporter operation");
        }
    };
    Calcutor.ADDITION = '+';
    Calcutor.SUBTRATION = '-';
    Calcutor.MULTIPPLICATION = '*';
    Calcutor.DIVISION = '/';
    return Calcutor;
}());
var result = Calcutor.calculate(5, 10, "+");
console.log(result);
