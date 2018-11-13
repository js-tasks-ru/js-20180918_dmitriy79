let calendar = {
    from: new Date('2018-01-01T15:09:10Z'),
    to: new Date('2018-02-01T10:09:10Z')
};

calendar[Symbol.iterator] = function () {
    let current = new Date(this.from.getFullYear(), this.from.getMonth(), this.from.getDate() + 1);
    let last = new Date(this.to.getFullYear(), this.to.getMonth(), this.to.getDate());
    return {
        next: () => {
            if (current > last) {
                return { done: true };
            }
            const dateNum = current.getDate();
            const currentDateStr = dateNum < 10 ? '0' + dateNum : '' + dateNum;
            
            const dayNum = current.getDay();
            const resultStr = (dayNum === 6 || dayNum === 0) ? `[${currentDateStr}]` : currentDateStr;
            current.setDate(current.getDate() + 1);
            return {
                done: false,
                value: resultStr
            }
        }
    }
};