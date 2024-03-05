import opentype from 'opentype.js';
import fs from 'fs';
import path from 'path';



const fontPath = './Noto_Sans_JP/NotoSansJP-VariableFont_wght.ttf'; // Đường dẫn đến font tiếng Nhật của bạn
const outputPath = 'D:/Project/portfolio-three-js/src/assets/japan-font/font.json';

opentype.load(fontPath, function (err, font) {
    // console.log(font.glyphs)
    if (err) {
        console.error('Error loading font:', err);
    } else {
        const glyphs = {};
        const numGlyphs = font.numGlyphs; // Lấy số lượng glyph

        for (let i = 0; i < numGlyphs; i++) {
            const glyph = font.glyphs.get(i); // Lấy glyph thứ i
            if (glyph.unicode) {
                const unicode = glyph.unicode.toString(16).toUpperCase();
                const pathData = glyph.getPath().toPathData();
                glyphs[String.fromCharCode(glyph.unicode)] = {
                    unicode: 'U+' + unicode,
                    advanceWidth: glyph.advanceWidth,
                    path: pathData
                };
            }
        }

        const jsonData = {
            metadata: {
                version: 1,
                type: 'font',
                source: 'My Japanese Font',
                author: 'Your Name',
                description: 'A JSON file for a Japanese font.',
                license: 'Open Font License'
            },
            glyphs: glyphs,
            ascender: font.ascender,
            descender: font.descender,
            lineHeight: font.ascender - font.descender
        };
        fs.writeFileSync(outputPath, JSON.stringify(jsonData, null, 2));
        console.log('Font JSON saved to:', outputPath);
    }
});

