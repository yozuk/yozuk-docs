import { Yozuk } from '@yozuk/yozuk-wasm/web'
import { Output, Result, Block } from '@yozuk/yozuk-wasm/output'
import { encode, decode } from 'base64-arraybuffer';
import { output } from '../webpack.config';

const yo = new Yozuk()

document.addEventListener("readystatechange", (event) => {
    for (const quote of document.querySelectorAll("blockquote")) {
        if (quote.textContent.trim().length == 0) {
            quote.parentNode.removeChild(quote);
        }
    }
})

document.addEventListener("readystatechange", (event) => {
    if (document.readyState == "complete") {
        for (const pre of document.querySelectorAll("pre.example")) {
            const files = [];
            for (const file of pre.querySelectorAll("span.file").values()) {
                const filename = file.getAttribute('data-filename');
                files.push({ data: new Uint8Array(decode(file.textContent)), filename });
            }

            const query = pre.querySelector('code');
            const content = query.textContent;
            pre.textContent = '';
            const code = document.createElement("code");
            const marker = document.createElement("span");
            marker.appendChild(document.createTextNode("»»» "));
            marker.style.color = "orange";

            const echo = document.createTextNode(content);
            code.appendChild(marker);
            code.appendChild(echo);

            for (const file of files) {
                const image = document.createElement('img');
                image.setAttribute('src', '/clip.svg');
                image.width = 12;
                image.height = 12;
                const tag = document.createElement("span");
                tag.appendChild(image);
                tag.appendChild(document.createTextNode(file.filename));
                tag.style.backgroundColor = "orange";
                tag.style.color = '#333';
                tag.style.marginLeft = '15px';
                tag.style.paddingLeft = '3px';
                tag.style.paddingRight = '3px';
                tag.style.paddingTop = '1px';
                tag.style.paddingBottom = '1px';
                tag.style.borderRadius = '3px';
                code.appendChild(tag);
            }

            const loading = document.createElement("div");
            loading.appendChild(document.createTextNode("Computing..."));

            pre.appendChild(code);
            pre.appendChild(loading);
            yo.exec(content, files.map(({ data }) => data)).then((result) => {
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
            {
                const hasPrimary = result.outputs.some((output) => output.mode == "primary");
                return result.outputs.filter((output) => !hasPrimary || output.mode == "primary").flatMap(renderOutput)
            }
        case "fail":
            {
                const hasPrimary = result.outputs.some((output) => output.mode == "primary");
                return result.outputs.filter((output) => !hasPrimary || output.mode == "primary").flatMap(renderOutput)
            }
        case "no_command":
            const elem = document.createElement("code");
            elem.appendChild(document.createTextNode("No Command"));
            return [elem]
        default:
            return []
    }
}

function renderOutput(output: Output): HTMLElement[] {
    const div = document.createElement("div");
    div.style.marginTop = "0.5em";

    for (const meta of output.metadata) {
        if (meta.type == "color") {
            const color = document.createElement("code");
            color.appendChild(document.createTextNode("       "));
            color.style.backgroundColor = meta.color;
            div.appendChild(color);
        }
    }

    for (const out of output.blocks.flatMap(renderBlock)) {
        div.appendChild(out);
    }
    return [div];
}

type Section = {
    text: string,
    value: boolean,
};

function renderBlock(block: Block): HTMLElement[] {
    const div = document.createElement("div");
    if (block.type == "data") {
        if (typeof block.data === 'string') {
            let highlights = block.highlights || [{ kind: "value", range: { start: 0, end: block.data.length } }];
            let sections: Section[] = [];
            let offset = 0;
            for (const highlight of highlights) {
                const text = block.data.slice(offset, highlight.range.start);
                if (text.length > 0) {
                    sections.push({ text, value: false });
                }
                sections.push({ text: block.data.slice(highlight.range.start, highlight.range.end), value: true });
                offset = highlight.range.end;
            }
            const text = block.data.slice(offset);
            if (text.length > 0) {
                sections.push({ text, value: false });
            }
            const code = document.createElement("code");
            for (const section of sections) {
                const span = document.createElement("span");
                if (!section.value) {
                    span.style.opacity = "0.6";
                }
                const text = document.createTextNode(section.text);
                span.appendChild(text);
                code.appendChild(span);
            }
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