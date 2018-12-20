const fs = require('fs');
const cheerio = require('cheerio')
const fileContent = fs.readFileSync('Love2dCS.xml');

if (!String.prototype.encodeHTML) {
    String.prototype.encodeHTML = function () {
      return this.replace(/&/g, '&amp;')
                 .replace(/</g, '&lt;')
                 .replace(/>/g, '&gt;')
                 .replace(/"/g, '&quot;')
                 .replace(/'/g, '&apos;');
    };
}

if (!String.prototype.decodeHTML) {
    String.prototype.decodeHTML = function () {
      return this.replace(/&apos;/g, "'")
                 .replace(/&quot;/g, '"')
                 .replace(/&gt;/g, '>')
                 .replace(/&lt;/g, '<')
                 .replace(/&amp;/g, '&');
    };
}

const $ = cheerio.load(fileContent, {
    // normalizeWhitespace: true,
    xmlMode: true // !!!!!!!!
});

const TypeName = [
    'Love.Audio',
    'Love.Event',
    'Love.FileSystem',
    'Love.Graphics',
    'Love.Joystick',
    'Love.Mathf',
    'Love.Sound',
];
(function() {
    const typeRes = $('member[name^=T]');
    const length = typeRes.length;
    for (let i = 0; i < length; i++) {
        const type = typeRes.eq(i);
        const name = type.attr('name')
        TypeName.push(name.substr(2))
    }
})()

// Pops the current coordinate transformation from the transformation stack. This function is always used to reverse a previous 
// console.log(TypeName)

// M:Love.FileSystem.Mount(System.Byte[],System.Byte[],System.Boolean) => [Love.FileSystem.Mount](#Love.FileSystem.Mount)
function convertSeeLink(str) {
    // Love.Resource.NewCompressedData(System.String)
    //  => #/module/Love.Graphics?id=loveresourcenewcompresseddatasystemstring
    const id = str.substr(2)
            .toLocaleLowerCase()
            .replace(/ /gi, '-')
            .replace(/[^a-z0-9-]/gi, '')
    let name = str.substr(2);
    if (name.indexOf('(') !== -1){
        name = name.substr(0, name.indexOf('('))
    }

    const typeFile = TypeName.find(item => name.startsWith(item))

    return `[${typeFile}](/module/${typeFile}?id=${id})`
}

// process see <see cref='T:Love.Point'/>
function processSeeTag() {
    const seeRes = $('see');
    const length = seeRes.length;
    for (let i = 0; i < length; i++) {
        const see = seeRes.eq(i);
        const cref = see.attr('cref')
        see.replaceWith(convertSeeLink(cref))
    }
}

// process see <code> ..... </code>
function processCodeTag() {
    const codeRes = $('code');
    const length = codeRes.length;
    for (let i = 0; i < length; i++) {
        const code = codeRes.eq(i);
        code.replaceWith(
            ("```C#\n"
            + code.text()
            + "```").trim()
        )
    }
}

const root = $('doc members');
processSeeTag();
processCodeTag();

function getMethodData(name) {
    name = ("M:" + name)
        .replace(/\./gi, '\\.')
        .replace(/:/gi, '\\:')
        .replace(/\(/gi, '\\(')
        .replace(/\)/gi, '\\)');

    const list = [];

    const memberRes = root.find(`member[name^=${name}]`)
    for (let i = 0; i < memberRes.length; i++) {

        // get <member> ........
        const member = memberRes.eq(i);

        const name = member.attr('name').substr(2);

        // Love.Resource.Append(System.String,System.String,System.Text.Encoding) 
        // -> 
        // const nameType = name;

        // get 
        // <param name="xxxxxx"> ....... </parm>
        // <param name="yyyy"> ....... </parm>
        const paramList = []
        const paramRes = member.find('param')
        for (let paramIndex = 0; paramIndex < paramRes.length; paramIndex++){
            const param = paramRes.eq(paramIndex);
            const paramObj = {
                name: param.attr('name'),
                desc: param.text(),
            }
            paramList.push(paramObj);
        }

        const memthodDef = {
            name,
            summary: summaryText = member.find('summary').text(), // get <summary> ... </summary>
            param: paramList,
            return: member.find('returns').text(), //  get  <returns>Product of type <see cref="T:Love.Size"/>.</returns>
            example: member.find('example').text(),
        }
        list.push(memthodDef);
    }

    return list;
}

function outputMethod(item) {

    const summaryText = (item.summary && item.summary.trim() !== '') ?
`
\`Summary\`: ${item.summary.trim()}
`: ''

    const paramText = item.param.length > 0 ? `
\`Arguments\`

${item.param.map(param => `* \`${param.name}\`: ${param.desc}` ).join('\n')}
` : '';

    const returnText = (item.return && item.return.trim() !== '' ) ? 
`
\`Returns\`

${item.return.trim()}
`  : '';
    const exampleText = (item.example && item.example.trim() !== '' ) ? 
`
\`Example\`

${item.example
    .trimStart()
    .replace(/^\s+```/gm, '\n```')
}
` : '';

    return (`
------------------------------------------------
#### ${item.name}
${summaryText}
${paramText}
${returnText}
${exampleText}
`);
}

function getTypeSummary(name) {
    name = ("T:" + name)
    .replace(/\./gi, '\\.')
    .replace(/:/gi, '\\:')
    .replace(/\(/gi, '\\(')
    .replace(/\)/gi, '\\)');

    return root.find(`member[name=${name}]`).find('summary').text();
}

function outputMD_Resource() {
    const data = getMethodData('Love.Resource');
    console.log(`
# Love.Resource
> ${getTypeSummary('Love.Resource').trim()}
${data.map(item => outputMethod(item)).join('\n')}
`)
    
}

function outputMD_Module(name) {
    const data = getMethodData(name);
    console.log(`
# ${name}
> ${getTypeSummary(name).trim()}
${data.map(item => outputMethod(item)).join('\n')}
`)
}
// outputMD_Resource()
// outputMD_Graphics()
// outputMD_Module('Love.Timer')
// outputMD_Module('Love.Audio')
// outputMD_Module('Love.Event')
// outputMD_Module('Love.FileSystem')
// outputMD_Module('Love.Font')
// outputMD_Module('Love.Joystick')
// outputMD_Module('Love.Mathf')
// outputMD_Module('Love.Sound')
// outputMD_Module('Love.Touch')
// outputMD_Module('Love.Video')
// outputMD_Module('Love.Window')



function getTypeSummaryByPrefix(name) {
    name = ("T:" + name)
    .replace(/\./gi, '\\.')
    .replace(/:/gi, '\\:')
    .replace(/\(/gi, '\\(')
    .replace(/\)/gi, '\\)');

    const list = []

    const typeRes = root.find(`member[name^=${name}]`);
    for (let i = 0; i < typeRes.length; i++) {
        const type = typeRes.eq(i);
        const name = type.attr('name').substr(2).replace(/\n|\r|(\n\r)|(\r\n)/gi, ' ').trim();
        const summary = type.find('summary').text().replace(/\n|\r|(\n\r)|(\r\n)/gi, ' ').trim();

        list.push({name, summary});
    }

    return list;
}

function outputMD_Moonshine() {

    const list = getTypeSummaryByPrefix('Love.Misc.Moonshine.Moonshine')
    const str = 
`
| Module   |Description |
|:---------|:-----------|
${list.map(({name, summary}) => `|${name}|${summary}|`).join('\n')}
`;
    console.log(str)
}

// outputMD_Moonshine();

function getFieldSummaryByPrefix(name) {
    name = ("F:" + name)
    .replace(/\./gi, '\\.')
    .replace(/:/gi, '\\:')
    .replace(/\(/gi, '\\(')
    .replace(/\)/gi, '\\)');

    const list = []

    const typeRes = root.find(`member[name^=${name}]`);
    for (let i = 0; i < typeRes.length; i++) {
        const type = typeRes.eq(i);
        const name = type.attr('name').substr(2).replace(/\n|\r|(\n\r)|(\r\n)/gi, ' ').trim();
        const summary = type.find('summary').text().replace(/\n|\r|(\n\r)|(\r\n)/gi, ' ').trim();

        list.push({name, summary});
    }

    return list;
}

function outputMD_Field(name) {

    const list = getFieldSummaryByPrefix(name)
    const str = 
`
| Module   |Description |
|:---------|:-----------|
${list.map(({name, summary}) => `|${name}|${summary}|`).join('\n')}
`;
    console.log(str)
}

outputMD_Field('Love.BootConfig')