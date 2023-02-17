class Calcutor {

    static readonly ADDITION='+';
    static readonly SUBTRATION='-';
    static readonly MULTIPPLICATION='*';
    static readonly DIVISION='/';
    public static calculate(afirstOperand : number, b: number, operator: string): any {
        switch (operator) {
            case this.ADDITION:
                return afirstOperand  + b;
            case this.SUBTRATION:
                return afirstOperand  - b;
            case this.MULTIPPLICATION:
                return afirstOperand  * b;
            case this.DIVISION:
                if (b != 0) {
                    return afirstOperand  / b;
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