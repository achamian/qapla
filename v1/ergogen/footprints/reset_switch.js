// Description:
//
module.exports = {
    params: {
      GND: { type: 'net', value: 'GND' },
      RST: { type: 'net', value: 'RST' },
    },
    body: (p) => {
      return `
        (footprint reset_switch (layer F.Cu) (tedit 66B07A26)
          ${p.at /* parametric position */}
          ${'' /* footprint reference */}
          (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
          (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
          (attr smd)

          ${'' /* Pads */}
          (pad 1 smd roundrect (at -3.75 0 ${p.r}) (size 1.75 1.5) (layers F.Cu F.Paste F.Mask) (roundrect_rratio 0.2) (clearance 0.1905) ${p.GND})
          (pad 2 smd roundrect (at 3.75 0 ${p.r}) (size 1.75 1.5) (layers F.Cu F.Paste F.Mask) (roundrect_rratio 0.2) (clearance 0.1905) ${p.RST})
          (pad 1 smd roundrect (at -3.75 0 ${p.r}) (size 1.75 1.5) (layers B.Cu B.Paste B.Mask) (roundrect_rratio 0.2) (clearance 0.1905) ${p.GND})
          (pad 2 smd roundrect (at 3.75 0 ${p.r}) (size 1.75 1.5) (layers B.Cu B.Paste B.Mask) (roundrect_rratio 0.2) (clearance 0.1905) ${p.RST})
          (pad 3 thru_hole circle (at -2.5 0 ${p.r}) (size 0.9 0.9) (drill 0.6) (layers *.Cu *.Mask) ${p.GND})
          (pad 4 thru_hole circle (at 2.5 0 ${p.r}) (size 0.9 0.9) (drill 0.6) (layers *.Cu *.Mask) ${p.RST})
        )
      `
    }
};