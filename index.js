function shout(str) {
    return str.toUpperCase();
}

function whisper(str) {
    return str.toLowerCase();
}

function logShout(str) {
    console.log(str.toUpperCase());
};

function logWhisper(str) {
    console.log(str.toLowerCase());
}

function sayHiToHeadphonedRoommate(str) {
    if (str === "Let's have dinner together!")
        return "I would love to!";
    else if (str === whisper(str))
        return "I can't hear you!";
    else if (str === shout(str))
        return "YES INDEED!";
};