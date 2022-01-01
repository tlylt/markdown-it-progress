const pOpen = {
    "type": "paragraph_open",
    "tag": "p",
    "attrs": null,
    "map": [
        1,
        2
    ],
    "nesting": 1,
    "level": 0,
    "children": null,
    "content": "",
    "markup": "",
    "info": "",
    "meta": null,
    "block": true,
    "hidden": false
}

const paraClose = {
    "type": "paragraph_close",
    "tag": "p",
    "attrs": null,
    "map": null,
    "nesting": -1,
    "level": 0,
    "children": null,
    "content": "",
    "markup": "",
    "info": "",
    "meta": null,
    "block": true,
    "hidden": false
}

const paraInline = {
    "type": "inline",
    "tag": "",
    "attrs": null,
    "map": [
        1,
        2
    ],
    "nesting": 0,
    "level": 1,
    "children": [
        {
            "type": "text",
            "tag": "",
            "attrs": null,
            "map": null,
            "nesting": 0,
            "level": 0,
            "children": null,
            "content": "",
            "markup": "",
            "info": "",
            "meta": null,
            "block": false,
            "hidden": false
        }
    ],
    "content": "",
    "markup": "",
    "info": "",
    "meta": null,
    "block": true,
    "hidden": false
}

module.exports = function renderToPara(tokens, currToken, idx) {
    paraInline.content = currToken.content;
    paraInline.children[0].content = currToken.content;
    currToken = paraInline
    // insert paraOpen and paraClose tokens
    tokens.splice(idx, 1, pOpen, currToken, paraClose);
}