export enum Language {
    csharp,
    typescript,
    javascript,
    fsharp,
    cpp
}

export function GetLanguageName(lang: Language) {
    lang = +lang;

    switch (lang) {
        case Language.csharp: return 'C#';
        case Language.cpp: return 'C++';
        case Language.fsharp: return 'F#';
        case Language.javascript: return 'JavaScript';
        case Language.typescript: return 'TypeScript';
        default: return '';
    }
}