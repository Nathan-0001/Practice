const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};
function updateRecords(records, id, prop, value) {
    // If prop isn't "tracks" and value isn't an empty string, update or set the value for that record.
    if (prop !== 'tracks' && value !== '') {
        records[id][prop] = value;
    }
    // If prop is "tracks" and value isn't an empty string, add the value to the end of the tracks array.
    else if (prop === 'tracks' && value !== '') {
        if (!records[id].hasOwnProperty('tracks')) {
            records[id].tracks = [];
        }
        records[id].tracks.push(value);
    }
    // If value is an empty string, delete the given prop from the record.
    else if (value === '') {
        delete records[id][prop];
    }
    
    return records;
}