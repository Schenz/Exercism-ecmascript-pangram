class Pangram {
    constructor(string) {
        this.string = string;
    }

    isPangram() {
        return (this.string.toLowerCase().match(/([a-z])(?!.*\1)/g) || []).length === 26;
    }
}

export default Pangram;