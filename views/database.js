let notes = [
{
    id: 1,
    title: "Note 1",
    content: "Lorem ipsum odor amet, consectetuer adipiscing elit. Luctus velit ut blandit nunc eros sit. Aenean eu maecenas elementum non facilisi faucibus adipiscing vehicula. Vitae dui bibendum platea metus mi odio suspendisse magna finibus. Litora suspendisse inceptos eros facilisi, platea orci metus ac. Conubia consectetur mi mus taciti felis scelerisque venenatis.",
    timeStamp: Date.now()
},
{
    id: 2,
    title: "Note 2",
    content: "Scelerisque pharetra et per ut fames ac rhoncus lacinia per. Eget aliquet ex amet lacus; dapibus inceptos mus. Urna lacus volutpat molestie, blandit conubia tortor. Id curabitur semper eget inceptos aliquam lectus lacus. Libero class eget blandit maecenas facilisis fames ipsum eros. Scelerisque nunc quisque libero donec massa fames orci id habitasse. Dui vel placerat habitant cubilia lacinia metus. Pharetra neque hac mollis donec vulputate purus gravida consectetur pretium.",
    timeStamp: Date.now()
},
{
    id: 3,
    title: "Note 3",
    content: "Vivamus porttitor fringilla lectus cursus aliquet. Hendrerit porttitor sagittis nisl tortor magnis rhoncus integer. Dui lectus cursus adipiscing vulputate euismod. Orci integer eleifend sollicitudin in cras semper torquent vestibulum. Orci condimentum facilisis duis mattis consectetur nostra amet dis. Fusce blandit euismod nascetur non; tortor proin mauris. Eu viverra torquent interdum facilisi mauris gravida non commodo cursus. Diam mi himenaeos duis faucibus taciti dolor ridiculus pretium consectetur. Metus feugiat magnis mi commodo ad et tempor eros. Mattis aptent dui; habitasse integer euismod praesent blandit eros pellentesque.",
    timeStamp: Date.now()
}

]

function getNotes()
{
    return notes
}
exports.getNotes = getNotes;

function getNote(id)
{
   return notes.find((note)=> note.id === id)
}
exports.getNote = getNote;