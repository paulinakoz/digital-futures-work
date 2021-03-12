class State {
    lock() {
        this.state = 'locked'
    }

    unlock() {
        this.state = 'unlocked'
    }
}

class SecretDiary {
    constructor() {
        this.entries = []
        this.state = new State()
    }

    addEntry(string) {
        if (this.state === 'unlocked') {
            this.entries.push(string);
        } else {
            console.log("Sorry, Diary is Locked!");
        }
    }

    getEntries() {
        if (this.state === 'unlocked') {
        console.log(this.entries);
    } else {
        console.log("Sorry, Diary is Locked!");
        }
    }

    lock() {
        this.state.lock()
    }

    unlock() {
        this.state.unlock()
    }

}

let diary = new SecretDiary();
diary.unlock();
diary.addEntry('Today was good.');
diary.getEntries();
diary.lock();
diary.addEntry('Today was good.');
diary.getEntries();