const CONTRACT_ADDRESS = "n1vYHp4NTn8dP5U7VtdemtVfqq3gxFdzFLh"; //36ad37333da5460f986aaf67e44b6bb67b241dfcd7aa205f260771acf8e47d55

class BaseContractApi {
    constructor(contractAdress) {
        let NebPay = require("nebpay");
        this.nebPay = new NebPay();
        this._contractAdress = contractAdress || CONTRACT_ADDRESS;
    }

    getContractAddress() {
        return this.contractAdress;
    }

    _simulateCall({ value = "0", callArgs = "[]", callFunction, callback }) {
        this.nebPay.simulateCall(this._contractAdress, value, callFunction, callArgs, {
            callback: function (resp) {
                if (callback) {
                    callback(resp);
                }
            }
        });
    }

    _call({ value = "0", callArgs = "[]", callFunction, callback }) {
        this.nebPay.call(this._contractAdress, value, callFunction, callArgs, {
            callback: function (resp) {
                if (callback) {
                    callback(resp);
                }
            }
        });
    }
}

class ContractApi extends BaseContractApi {
    createCategory(title, cb) {
        this._call({
            callArgs: `["${title}"]`,
            callFunction: "createCategory",
            callback: cb
        });
    }

    deleteCategory(id, cb) {
        this._call({
            callArgs: `[${id}]`,
            callFunction: "deleteCategory",
            callback: cb
        });
    }

    loadCategories(cb) {
        this._simulateCall({
            callFunction: "getCategoriesByWallet",
            callback: cb
        });
    }

    getTotalCategories(cb) {
        this._simulateCall({
            callFunction: "totalCategories",
            callback: cb
        });
    }

    getCategoryNotes(id, cb) {
        this._simulateCall({
            callArgs: `[${id}]`,
            callFunction: "getCategoryNotes",
            callback: cb
        });
    }

    saveNote(note, categoryId, cb) {
        this._call({
            callArgs: JSON.stringify([JSON.stringify(note), categoryId]),
            callFunction: "saveNote",
            callback: cb
        });
    }

    deleteNote(id, cb) {
        this._call({
            callArgs: `[${id}]`,
            callFunction: "deleteNote",
            callback: cb
        });
    }
}
