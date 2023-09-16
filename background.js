browser.history.onVisited.addListener(function (item) {
    browser.storage.local.get("patterns").then((patterns) => {
        if (patterns && patterns.patterns) {
            patterns.patterns.split('\n').forEach((pattern) => {
                console.log(pattern);
                if (pattern !== "" && new RegExp(pattern).test(item.url)) {
                    browser.history.deleteUrl({
                        url: item.url
                    })
                }
            });
        }
    });
});
