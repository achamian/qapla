# Qapla

## Qapla 60 key keyboard

Qapla is a 60 key keyboard with Choc switches inspired by Lilly58 and Sofle. Columns have splay and stagger based on my cardboard mocks.

For designing the layout it uses

* [Ergogen](https://github.com/ergogen/ergogen) to define layout, generate PCB and case.
* [Ceoloide Footprints](https://github.com/achamian/ergogen-footprints/tree/diode_via_connections) to add footprints (It is a fork which adds via pads for diodes).
* Routing is done in KiCad.

## Components

### MCU

Qapla supports Pro Micro footprint. Footprint is reversible to use same PCB for left and right half.

Jumpers to bridge:

* Solder jumpers on the front if controller is mounted on top of the pcb facing it
* Solder jumpers on the back if controller is mounted on top of the pcb facing away from it
* Solder jumpers on the back if controller is mounted under the pcb facing it
* Solder jumpers on the front if controller is mounted under the pcb facing away from it

## Display

Qapla supports Nice!View reversible footprint. To use I2C OLED display instead of Nice!View connect display to inner four pins on the left half and outer four pins on the right half. Bridge jumpers on the opposite side of the display.

### JST Battery Connector

Qapla support JST 2mm battery connector. Bridge jumpers on the opposite side of the connector. Note the polarity when connecting the battery.

## Links

* [Introduction to Ergogen](https://flatfootfox.com/ergogen-introduction/)
