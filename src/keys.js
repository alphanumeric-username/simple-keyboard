const { playNote } = require("./keyboard");
const wavetable = require('./wavetable');

class Key {

    /**
     * 
     * @param {HTMLElement} element 
     * @param {number} frequency
     */
    constructor(element, frequency, type) {
        this.element = element;
        this.frequency = frequency;
        this.type = type;
        this.noteStopHandle = null;
        this.registerEvents();
    }

    // _createElement() {
    //     const div = new HTMLDivElement();
    //     div.classList.add(this.type + '-key');
    //     return div;
    // }

    registerEvents() {
        const play = () => {
            if (this.noteStopHandle == null)
            {
                this.noteStopHandle = playNote(this.frequency, wavetable.organ);
                this.element.classList.add('pressed');
            }
        }
        const stop = () => {
            if (this.noteStopHandle != null) {
                this.noteStopHandle();
                this.noteStopHandle = null;
            }
            this.element.classList.remove('pressed');
        }
        
        this.element.onmousedown = play;
        this.element.ontouchstart = play;
        this.element.onmouseup = stop;
        this.element.onmouseout = stop;
        this.element.ontouchend = stop;
        this.element.ontouchcancel = stop;
    }
}

module.exports = Key;