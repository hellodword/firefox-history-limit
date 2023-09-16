// Saves options to storage
function save_options() {
    var patterns = document.getElementById('patterns').value;
    browser.storage.local.set({
        'patterns': patterns
    }).then(() => {
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function () {
            status.textContent = '';
        }, 750);
    })
}

// Restores select box and checkbox state using the preferences
// stored in storage.
function restore_options() {
    browser.storage.local.get("patterns").then((patterns) => {
        if (patterns && patterns.patterns) {
            document.getElementById('patterns').value = patterns.patterns;
        }
    });

}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);