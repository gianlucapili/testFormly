export { }
declare global {
    interface String {
        hashCode: typeof hashCode;
    }
}

String.prototype.hashCode = hashCode;

function hashCode(this: string): string {
    var hash = 0,
        i, chr;
    if (this.length === 0) return "00";
    for (i = 0; i < this.length; i++) {
        chr = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash.toString(16);
}

