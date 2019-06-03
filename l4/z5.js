process.stdin.setEncoding('utf8');

process.stdout.write('Wpisz proszę swoje imię.\n');

process.stdin.on('readable', () => {  
    var name = process.stdin.read();
    if (name !== null) {
        process.stdout.write(`Witaj ${name}`);
    }
});