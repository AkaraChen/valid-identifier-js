import { keywords } from "./keywords";

export function isValidIdentifyName(name: string) {
    const regexIdentifierName =
        /^(?:[$_\p{ID_Start}])(?:[$_\u200C\u200D\p{ID_Continue}])*$/u;
    if (keywords.includes(name) || !regexIdentifierName.test(name)) {
        return false;
    }
    return true;
}

export default isValidIdentifyName;