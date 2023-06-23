wappsto.configureName("RFID")
wappsto.configureStringValue(16, "RFID", "string")
wappsto.configureValue(1, "RSSI", WappstoValueTemplate.Number)
wappsto.configureValue(2, "Latitude", WappstoValueTemplate.Latitude)
wappsto.configureValue(3, "Longitude", WappstoValueTemplate.Longitude)
wappsto.configureValue(4, "Acceleration", WappstoValueTemplate.Acceleration)
custom.multiPollStart()
let last = control.millis()
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    custom.multiPollRead()
    wappsto.sendStringToWappsto(custom.getUuid(), 16, WappstoTransmit.OnChange)
    wappsto.sendNumberToWappsto(custom.getStrength(), 1, WappstoTransmit.OnChange)
    wappsto.sendNumberToWappsto(wappsto.latitude(), 2, WappstoTransmit.OnChange)
    wappsto.sendNumberToWappsto(wappsto.longitude(), 3, WappstoTransmit.OnChange)
    wappsto.sendNumberToWappsto(input.acceleration(Dimension.Y), 4, WappstoTransmit.OnChange)
    if (control.millis() - last > 60000) {
        custom.multiPollStart()
        last = control.millis()
    }
})
