"use strict";

var items = [
    // { id: 1, title: 'read java book', status: 'complete' },
    // { id: 2, title: 'read react book', status: 'pending' },
    // { id: 1, title: 'read sql book', status: 'open' },
    // { id: 1, title: 'read dotnet book', status: 'start' }
];
var markItemComplete = function markItemComplete(itemToRemove) {
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        if (item.id == itemToRemove.id) {
            items.splice(i, 1);
            break;
        }
    }
    render();
};
var addItem = function addItem(e) {
    e.preventDefault();
    var title = e.target.elements.itemtext.value;
    items.push({
        id: items.length + 1,
        status: 'open',
        title: title
    });
    e.target.elements.itemtext.value = "";
    render();
};

var render = function render() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "div",
            { className: "title" },
            React.createElement(
                "h2",
                null,
                "ToDo App"
            ),
            React.createElement(
                "p",
                null,
                "Welcome What do you want to do today"
            )
        ),
        React.createElement(
            "div",
            { className: "add-todo" },
            React.createElement(
                "form",
                { onSubmit: addItem },
                React.createElement(
                    "div",
                    { className: "input-group mb-3" },
                    React.createElement("textarea", { name: "itemtext", className: "form-control", rows: "3", placeholder: "Enter your ToDo app hear" }),
                    React.createElement(
                        "button",
                        { className: "btn btn-success", type: "submit", id: "button-addon2" },
                        "ADD"
                    )
                )
            )
        ),
        React.createElement(
            "div",
            { className: "item-list" },
            items.map(function (item) {
                return React.createElement(
                    "div",
                    { className: "item" },
                    React.createElement(
                        "div",
                        { "class": "input-group mb-3" },
                        React.createElement("input", { value: item.title, type: "text", className: "form-control", readonly: true }),
                        React.createElement(
                            "button",
                            { onClick: function onClick() {
                                    markItemComplete(item);
                                }, className: "btn btn-danger", type: "button", id: "button-addon2" },
                            "Complete"
                        )
                    )
                );
            })
        ),
        React.createElement(
            "div",
            { className: "footer" },
            React.createElement(
                "h2",
                null,
                "copyrighted to PRITAM CHAVAN"
            )
        )
    );
    ReactDOM.render(template, document.getElementById('app'));
};
render();
