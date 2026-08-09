function isRequired(value) {
    return value !== undefined && value !== null && String(value).trim() !== "";
}

function isEmail(value) {
    if (!isRequired(value)) return false; {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }
}

function isNumber(value) {
    return typeof value === "number" && !Number.isNaN(value);
}

function isString(value) {
    return typeof value === "string"
}

function isURL(value) {
    if (!isRequired(value)) return false;
    try {
        new URL(value)
        return true;
    } catch {
        return false;
    }
}

function isStrongPassword(value) {
    if (!isString(value)) return false;

    return value.length >= 8 &&
        /[A-Z]/.test(value) &&
        /[a-z]/.test(value) &&
        /\d/.test(value) &&
        /[^A-Za-z0-9]/.test(value);
}

function isPhoneNumber(value) {
    if (!isString(value)) return false;
    return /^\+?[0-9]{10,15}$/.test(value);
}

function isUsername(value) {
    if (!isString(value)) return false;
    return /^[a-zA-Z0-9_]{3,20}$/.test(value);
}
export {
    isRequired,
    isEmail,
    isNumber,
    isString,
    isURL,
    isStrongPassword,
    isPhoneNumber,
    isUsername
};