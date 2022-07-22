import { Yozuk } from '@yozuk/yozuk-wasm/web'
import { Output, Result, Block } from '@yozuk/yozuk-wasm/output'

const yo = new Yozuk()

document.addEventListener("readystatechange", (event) => {
    if (document.readyState == "complete") {
        for (const pre of document.querySelectorAll("pre.example")) {
            const content = pre.textContent;
            pre.textContent = ''
            const code = document.createElement("code");
            const echo = document.createTextNode("» " + content);
            code.appendChild(echo);
            yo.exec(content).then((result) => {
                pre.appendChild(code);
                for (const data of renderResult(result)) {
                    pre.appendChild(data);
                }
            })
        }
    }
});

function renderResult(result: Result): HTMLElement[] {
    switch (result.type) {
        case "ok":
            return result.outputs.flatMap(renderOutput)
        default:
            return []
    }
}

function renderOutput(output: Output): HTMLElement[] {
    return output.blocks.flatMap(renderBlocks)
}

function renderBlocks(block: Block): HTMLElement[] {
    if (block.type == "data") {
        if (typeof block.data === 'string') {
            const code = document.createElement("code");
            const result = document.createTextNode(block.data);
            code.appendChild(result);
            return [code];
        }
    }
    return []
}