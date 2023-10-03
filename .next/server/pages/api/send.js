"use strict";
(() => {
var exports = {};
exports.id = 7;
exports.ids = [7];
exports.modules = {

/***/ 1371:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "nextjs-cors"
const external_nextjs_cors_namespaceObject = require("nextjs-cors");
var external_nextjs_cors_default = /*#__PURE__*/__webpack_require__.n(external_nextjs_cors_namespaceObject);
;// CONCATENATED MODULE: external "nodemailer"
const external_nodemailer_namespaceObject = require("nodemailer");
var external_nodemailer_default = /*#__PURE__*/__webpack_require__.n(external_nodemailer_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/send.js


async function handler(req, res) {
    await external_nextjs_cors_default()(req, res, {
        // Options
        methods: [
            "POST"
        ],
        origin: [
            "https://agmar-paliwa.pl",
            "https://www.agmar-paliwa.pl"
        ],
        optionsSuccessStatus: 200
    });
    if (req.method === "POST") {
        let { email, phone, message } = req.body;
        let transporter = external_nodemailer_default().createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS
            }
        });
        let mailOptions = {
            from: email,
            to: "michalipka1@gmail.com",
            subject: "Nowa wiadomość z formularza kontaktowego",
            text: `Od: ${email} Telefon: ${phone} Wiadomość: ${message}`
        };
        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({
                message: "Wiadomość wysłana pomyślnie"
            });
        } catch (error) {
            res.status(500).json({
                message: "Wystąpił błąd podczas wysyłania wiadomości"
            });
        }
    } else {
        res.status(405).end() //Method Not Allowed
        ;
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1371));
module.exports = __webpack_exports__;

})();