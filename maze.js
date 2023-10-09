
// code to start the game
try {

    document.getElementById('start-game').addEventListener('click', e => {

        document.getElementById('game').classList.remove('hidden-game');
        document.getElementById('end-game').classList.remove('hidden');
        document.getElementById('start-game').classList.add('hidden');
    });
} catch {

}

// code to end the game
try {

    document.getElementById('end-game').addEventListener('click', e => {

        document.getElementById('game').classList.add('hidden-game');
        document.getElementById('end-game').classList.add('hidden');
        document.getElementById('start-game').classList.remove('hidden');
    });
} catch {}

try {

    element.draggable(document.getElementById('start-game'), 'start-game');
} catch {}

try {

    element.draggable(document.getElementById('end-game'), 'end-game');
} catch {
}
