"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromAddress = void 0;
async function fromAddress({ address }) {
    const body = new URLSearchParams({
        c1: address,
        action: "gpcm",
        cp: "",
    });
    return (([lat, long]) => ({
        lat,
        long,
    }))((await (await fetch("https://www.latlong.net/_spm4.php", {
        headers: {
            accept: "*/*",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/x-www-form-urlencoded",
            "sec-ch-ua": '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"Linux"',
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest",
            Referer: "https://www.latlong.net/convert-address-to-lat-long.html",
            "Referrer-Policy": "strict-origin-when-cross-origin",
        },
        body,
        method: "POST",
    })).text()).split(","));
}
exports.fromAddress = fromAddress;
//# sourceMappingURL=latlong.js.map