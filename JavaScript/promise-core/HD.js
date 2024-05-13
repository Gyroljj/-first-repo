class HD {
    static PENDING = "pending"
    static FULFILLED = "fulfilled"
    static REJECTED = "rejected"

    constructor(executor) {
        this.status = HD.PENDING;
        this.value = null;
        this.callbacks = [];
        try {
            executor(this.resolve.bind(this), this.reject.bind(this));
        } catch (error) {
            this.reject(error)
        }
    }

    resolve(value) {
        if (this.status == HD.PENDING) {
            this.status = HD.FULFILLED;
            this.value = value;
            setTimeout(() => {
                this.callbacks.map(callback => {
                    callback.onFulfilled(value);
                })
            })
        }
    }

    reject(reason) {
        if (this.status == HD.PENDING) {
            this.status = HD.REJECTED;
            this.value = reason;
            setTimeout(() => {
                this.callbacks.map(callback => {
                    callback.onRejected(reason);
                })
            })
        }

    }

    then(onFulfilled, onRejected) {
        if (typeof onFulfilled != "function") {
            onFulfilled = () => {
                return this.value;
            }
        }
        if (typeof onRejected != "function") {
            onRejected = () => {
                return this.value;
            }
        }
        let promise = new HD((resolve, reject) => {
            if (this.status == HD.PENDING) {
                this.callbacks.push({
                    onFulfilled: value => {
                        // try {
                        this.parse(promise, onFulfilled(value), resolve, reject)
                        //     if (result instanceof HD) {
                        //         result.then(resolve, reject);
                        //     } else {
                        //         resolve(result);
                        //     }
                        // } catch (error) {
                        //     reject(error);
                        // }
                    },
                    onRejected: value => {
                        // try {
                        this.parse(promise, onRejected(value), resolve, reject)
                        //     if (result instanceof HD) {
                        //         result.then(resolve, reject);
                        //     } else {
                        //         resolve(result);
                        //     }
                        // } catch (error) {
                        //     reject(error);
                        // }
                    }
                })
            }
            if (this.status == HD.FULFILLED) {
                setTimeout(() => {
                    // try {
                    this.parse(promise, onFulfilled(this.value), resolve, reject)
                    //     if (result instanceof HD) {
                    //         result.then(resolve, reject);
                    //         // value => {
                    //         //     resolve(value);
                    //         // }, reason => {
                    //         //     reject(reason);
                    //         // })
                    //     } else {
                    //         resolve(result);
                    //     }
                    // } catch (error) {
                    //     reject(error)
                    // }
                })
            }
            if (this.status == HD.REJECTED) {
                setTimeout(() => {
                    // try {
                    this.parse(promise, onRejected(this.value), resolve, reject)
                    //     if (result instanceof HD) {
                    //         result.then(resolve, reject);
                    //     } else {
                    //         resolve(result);
                    //     }
                    // } catch (error) {
                    //     reject(error);
                    // }
                })
            }
        })
        return promise;
    }

    parse(promise, result, resolve, reject) {
        if (promise == result) {
            throw new TypeError("Chaining cycle detected")
        }
        try {
            if (result instanceof HD) {
                result.then(resolve, reject);
            } else {
                resolve(result);
            }
        } catch (error) {
            reject(error);
        }
    }

    static resolve(value) {
        return new HD((resolve, reject) => {
            if (value instanceof HD) {
                value.then(resolve, reject)
            } else {
                resolve(value)
            }

        })
    }

    static reject(value) {
        return new HD((resolve, reject) => {
            reject(value)
        })
    }

    static all(promises) {
        return new HD((resolve, reject) => {
            const values = [];
            promises.forEach(promise => {
                promise.then(value => {
                    values.push(value);
                    if (values.length == promises.length) {
                        resolve(values)
                    }
                }, reason => {
                    reject(reason);
                })
            })
        })
    }

    static race(promises) {
        return new HD((resolve, reject) => {
            promises.map(promise => {
                promise.then(value => {
                    resolve(value)
                }, reason => {
                    reject(reason)
                })
            })
        })
    }
}

// new Promise((resolve, reject) => {
//     resolve("解决")
//     reject("拒绝")
// }).then(value => {
//
// },reason => {
//
// })