class Calcutor {

    static readonly ADDITION='+';
    static readonly SUBTRATION='-';
    static readonly MULTIPPLICATION='*';
    static readonly DIVISION='/';
    public static calculate(firstOperand : number, secondOperand: number, operator: string): any {
        switch (operator) {
            case this.ADDITION:
                return firstOperand  + secondOperand;
            case this.SUBTRATION:
                return firstOperand  - secondOperand;
            case this.MULTIPPLICATION:
                return firstOperand  * secondOperand;
            case this.DIVISION:
                if (secondOperand != 0) {
                    return firstOperand  / secondOperand;
                } else {
                    console.log("can not divide by 0");
                }
            default:
                console.log("unsupporter operation");

        }
    }
}

let result = Calcutor.calculate(5, 10, "+");
console.log(result)