import { ICalculatorObserver } from "../interfaces/ICaculatorObserver";

export class CaculatorObserver implements ICalculatorObserver{
    update(message: string): void {
        print: message;
    }
}
