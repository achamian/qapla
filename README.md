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

## BoM

| Component | Quantity | Notes |
|-----------|----------|-------|
| PCB | 2 | Left and right halves |
| Pro Micro compatible MCU | 2 | e.g., Nice!Nano for wireless |
| Choc or MX switches | 60 | Depending on preference |
| Diodes (1N4148 or similar) | 60 | SOD-123 |
| Reset switches | 2 | |
| Nice!View or OLED displays | 2 | Optional |
| Keycaps 1u |56 | Compatible with chosen switches |
| Keycaps 1.5u |4 | Compatible with chosen switches |
| M2 screws and standoffs | As needed | For case assembly |

## Links

* [Introduction to Ergogen](https://flatfootfox.com/ergogen-introduction/)
