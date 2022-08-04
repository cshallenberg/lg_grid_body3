// Name: Audio.js
// Author: Amay Kataria. 
// Date: 04/28/2021
// Description: This component holds the names of all the audio files corresponding to the sensors and chipsets. 
// Number of sensor lines used should be the same as the number of audio files or there will be empty objects that can 
// lead to errors. 

// List of all the filenames for the sensor lines. 
const sounds = {
    1: 'Body3.1.mp3',
    2: 'Body3.2.mp3',
    3: 'Body3.3.mp3',
    4: 'Body3.4.mp3',
    5: 'Body3.5.mp3',
    6: 'Body3.6.mp3',
    7: 'Body3.mp3',
    8: 'Body3.7.mp3',
    9: 'Body3.8.mp3',
    10: 'Body3.9.mp3',
    11: 'Body3.10.mp3',
    12: 'Body3.11.mp3',
    13: 'Body3.1.mp3',
    14: 'Body3.2.mp3',
    15: 'Body3.3.mp3',  
    16: 'Body3.4.mp3',
    17: 'Body3.5.mp3',
    18: 'Body3.6.mp3',
    19: 'Body3.mp3',
    20: 'Body3.7.mp3',
    21: 'Body3.8.mp3',
    22: 'Body3.9.mp3',
    23: 'Body3.10.mp3',
    24: 'Body3.11.mp3',
    25: 'Body3.1.mp3',
    26: 'Body3.2.mp3',
    27: 'Body3.3.mp3',  
    28: 'Body3.4.mp3',
    29: 'Body3.5.mp3',
    30: 'Body3.6.mp3',
    31: 'Body3.mp3',
    32: 'Body3.7.mp3',
    33: 'Body3.8.mp3',
    34: 'Body3.9.mp3',
    35: 'Body3.10.mp3',
    36: 'Body3.11.mp3'
}; 

// Directory of the sound files. 
const directory = 'Audio/';

class Audio {
    constructor() {
        this.tones = []; 
        this.assignIdx = 0; // Updates after every tone assignment to each sensor.  
        this.loadSounds(); // Load all sounds in tones. 
        
        // Debug logs. 
        // console.log(this.tones);
    }

    loadSounds() {
        const size = Object.keys(sounds).length; 
        for (let i = 1; i <= size; i++) {
            const filePath = directory + sounds[i];
            let sound = loadSound(filePath);
            this.tones.push(sound);
        }
    }

    assignTone() {
        let sensorTone = this.tones[this.assignIdx]; 
        this.assignIdx++; 
        return sensorTone; 
    }
};
