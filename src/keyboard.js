const { audioContext } = require("./audio");

const noteFilter = audioContext.createGain();
noteFilter.noteNumber = 0;

noteFilter.connect(audioContext.destination);


function playNote(frequency, wavetable) {
    const oscillator = audioContext.createOscillator();
    const wave = audioContext.createPeriodicWave(wavetable.real, wavetable.imag);
    oscillator.setPeriodicWave(wave)
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    oscillator.connect(noteFilter);
    oscillator.start();
    ++noteFilter.noteNumber;
    noteFilter.gain.value = noteFilter.noteNumber > 0 ? 1.0/noteFilter.noteNumber : noteFilter.gain.value;
    return () => {
        oscillator.stop(audioContext.currentTime);
        --noteFilter.noteNumber;
        noteFilter.gain.value = noteFilter.noteNumber > 0 ? 1.0/noteFilter.noteNumber : noteFilter.gain.value;
    };
}

module.exports = {
    playNote
}