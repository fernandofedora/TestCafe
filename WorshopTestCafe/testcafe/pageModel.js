import { Selector } from 'testcafe';

class Page {
    constructor(){
        this.nameInput = Selector('#developer-name');
        this.checkboxTesting = Selector('#remote-testing');
        this.radioButtonLinux = Selector ('#linux');
        this.lista = Selector('#preferred-interface');
        this.javaScript = Selector('#preferred-interface > option:nth-child(2)');
        this.checkboxTried = Selector('#tried-test-cafe');
        this.textArea = Selector('#comments');

        this.silderObj = Selector('#slider');
        this.slider = {
            handle: Selector('.ui-slider-handle'),
            tick:   Selector('.slider-value')
        };


    }
}

export default new Page();
