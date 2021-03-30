const createNode = (elem) => {
    return document.createElement(elem);
};

const appendNode = (parent, elem) => {
    parent.appendChild(elem);
}

const ul = document.querySelector('#kryss');
const url = 'data/data.json';

fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        let kryssningar = data.kryssningar;
        return kryssningar.map(function(kryssningar) {
            let li = createNode('li'),
                img = createNode('img'),
                lip =createNode('li'),
                p = createNode('p');
            img.src = kryssningar.kryssningarBild;
            p.innerHTML = kryssningar.kryssningarText;

            appendNode(li, img);
            appendNode(lip, p);
            appendNode(ul, li);
            appendNode(ul, lip);
        })
    })
    .catch(function(error) {
        console.log(error);
    });
