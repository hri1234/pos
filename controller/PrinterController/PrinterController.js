const express = require("express");
const model = require('../../models/PrinterModel/PrinterModel')
const {
    ThermalPrinter,
    CharacterSet,
    BreakLine,
} = require("node-thermal-printer");
const router = express.Router();
const bodyParser = require('body-parser');

// Parse JSON bodies for this router
router.use(bodyParser.json());

const printdata = async (req, res) => {
    const { ipaddress, port, type, content } = req.body;


    if (!ipaddress || !port || !type || !content) {
        return res.status(400).json({ error: 'Missing required parameters' });
    }

    try {
        let printer = new ThermalPrinter({
            type: type,
            interface: `tcp://${ipaddress}:${port}`,
            characterSet: CharacterSet.PC852_LATIN2,
            removeSpecialCharacters: false,
            lineCharacter: "=",
            breakLine: BreakLine.WORD,
            options: {
                timeout: 5000,
            },
        });

        let isConnected = await printer.isPrinterConnected();

        if (!isConnected) {
            return res.status(400).json({ error: "Printer is not connected" });
        }

        printer.println(content); // Use the provided content dynamically
        printer.drawLine();

        await printer.execute();


        const newUser = await model.create(req.body);
        res.status(201).json(newUser)

        return res.status(200).json({ msg: "Print job sent successfully" });
    } catch (error) {
        if (error.message.includes("Socket timeout")) {
            return res.status(500).json({ error: "Connection timeout. Check printer connectivity and settings." });
        } else {
            return res.status(500).json({ error: error.message });
        }
    }
}
module.exports = {printdata};
