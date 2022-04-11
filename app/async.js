exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
    async: function (value) {
        return new Promise((resolve) => {
            resolve(value)
        });
    },

    manipulateRemoteData: function (url) {
            return fetch(url)
                .then(res => res.json())
                .then(data => {
                    let names = data.people.map(el => el.name);
                    return names.sort()})
    }
}