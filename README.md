# Qapla

## Qapla 60 key keyboard

Qapla is a 60 key keyboard with Choc or MX switches inspired by Lilly58 and Sofle. Columns have splay and stagger based on my cardboard mocks.

For designing the layout it uses

* [Ergogen](https://github.com/ergogen/ergogen) to define layout, generate PCB and case.
* [Ceoloide Footprints](https://github.com/achamian/ergogen-footprints/tree/diode_via_connections) to add footprints (It is a fork which adds via pads for diodes).
* Routing is done in KiCad.

## Components and Jumpers

### MCU

* Solder jumpers on the front if controller is mounted on top of the pcb facing it
* Solder jumpers on the back if controller is mounted on top of the pcb facing away from it
* Solder jumpers on the back if controller is mounted under the pcb facing it
* Solder jumpers on the front if controller is mounted under the pcb facing away from it

## Display

Qapla supports Nice!View reversible footprint. To use I2C OLED display instead of Nice!View connect display to inner four pins on the left half and outer four pins on the right half. Bridge jumpers on the opposite side of the display.

### JST Battery Connector

Bridge jumpers on the opposite side of the connector. Note the polarity when connecting the battery.

## Bill of Materials

| Quantity | Component | Notes |
|----------|-----------|-------|
| 2 | PCB | Left and right halves |
| 2 | Pro Micro compatible MCU | e.g., Nice!Nano for wireless |
| 60 | Choc or MX switches | Depending on preference |
| 60 | Diodes (1N4148 or similar) | SOD-123 |
| 2 | Reset switches | |
| 2 | JS102011SAQN SMT slide switch | |
| 2 | Nice!View or OLED displays | Optional |
| 56 | Keycaps 1u | Compatible with chosen switches |
| 4 | Keycaps 1.5u | Compatible with chosen switches |
| 10 | M2 3mm screws | For case assembly |
| 10 | M2 heat inserts OD: 3.2mm, Length: 3mm | For case assembly [AliExpress](https://vi.aliexpress.com/item/1005003582355741.html)|
| 2 | Blue SMD standard LED | 0805(2012 metric) - Optional - Battery Indicator|
| 2 | 220 Ohm SMD resistors | 0805(2012 metric) - Optional - Battery Indicator|

## Links

* [Introduction to Ergogen](https://flatfootfox.com/ergogen-introduction/)
