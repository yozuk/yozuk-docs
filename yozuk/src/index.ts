import { Yozuk } from '@yozuk/yozuk-wasm/web'
import { Output, Result, Block } from '@yozuk/yozuk-wasm/output'
import { encode } from 'base64-arraybuffer';
import { output } from '../webpack.config';

const yo = new Yozuk()

document.addEventListener("readystatechange", (event) => {
    if (document.readyState == "complete") {
        for (const pre of document.querySelectorAll("pre.example")) {
            const content = pre.textContent;
            pre.textContent = ''
            const code = document.createElement("code");
            const marker = document.createElement("span");
            marker.appendChild(document.createTextNode("»»» "));
            marker.style.color = "orange";

            const echo = document.createTextNode(content);
            code.appendChild(marker);
            code.appendChild(echo);

            const loading = document.createElement("code");
            loading.appendChild(document.createTextNode("Computing..."));

            pre.appendChild(code);
            pre.appendChild(loading);
            yo.exec(content).then((result) => {
                pre.removeChild(loading);
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
            const hasPrimary = result.outputs.some((output) => output.mode == "primary");
            return result.outputs.filter((output) => !hasPrimary || output.mode == "primary").flatMap(renderOutput)
        default:
            return []
    }
}

function renderOutput(output: Output): HTMLElement[] {
    const div = document.createElement("div");
    div.style.marginTop = "0.5em";
    for (const out of output.blocks.flatMap(renderBlock)) {
        div.appendChild(out);
    }
    return [div];
}

function renderBlock(block: Block): HTMLElement[] {
    const div = document.createElement("div");
    if (block.type == "data") {
        if (typeof block.data === 'string') {
            const code = document.createElement("code");
            const result = document.createTextNode(block.data);
            code.appendChild(result);
            div.appendChild(code);
        } else if (block.media_type.startsWith("image/")) {
            const image = document.createElement('img');
            image.setAttribute(
                'src',
                `data:${block.media_type};base64,${encode(block.data)}`,
            );
            div.appendChild(image);
        }
    }
    return [div]
}