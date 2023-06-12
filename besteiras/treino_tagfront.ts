interface AtributosButtons {
    ButtonStart: HTMLButtonElement | string,
    ButtonStop: HTMLButtonElement | string
}

interface EventsButton {
    playToggle(): void,
    stop(): void,
    iniciarEvents(): void
}


export class Modal implements EventsButton {

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor(private Buttons: AtributosButtons) { }

    iniciarEvents(): void {
        throw ('Invalid Method');
    }
    playToggle(): void {
        throw ('Invalid Method');
    }
    stop(): void {
        throw ('Invalid Method');
    }
    showOB(): void {
        console.log(this.Buttons)
    }
}

const teste1 = new Modal({ ButtonStart: 'teste1', ButtonStop: 'teste2' })

teste1.showOB()