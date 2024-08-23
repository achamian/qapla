
module.exports = {
  params: {
    side: 'F',
    reversible: false,
    BAT_P: { type: 'net', value: 'BAT_P' },
    RAW: {type: 'net', value: 'RAW'}
  },

  body: p => {
    const standard_opening = `
  (footprint "switch_JS102011SAQN"
    (layer "${p.side}.Cu")
    ${p.at /* parametric position */}
    (property "Reference" "${p.ref}"
      (at 0 0 ${p.r})
      (layer "${p.side}.SilkS")
      ${p.ref_hide}
      (effects (font (size 1 1) (thickness 0.15)))
    )

    (attr smd)
    `
    function silkscreen(side) {
      return `
    (fp_line (start -4.6 -1.9) (end -3.4 -1.9) (stroke (width 0.12) (type solid)) (layer "${side}.SilkS"))
    (fp_line (start -4.6 0.4) (end -4.6 -1.9) (stroke (width 0.12) (type solid)) (layer "${side}.SilkS"))
    (fp_line (start -0.9 -1.9) (end -1.6 -1.9) (stroke (width 0.12) (type solid)) (layer "${side}.SilkS"))
    (fp_line (start 1.6 -1.9) (end 0.9 -1.9) (stroke (width 0.12) (type solid)) (layer "${side}.SilkS"))
    (fp_line (start 3.4 -1.9) (end 4.6 -1.9) (stroke (width 0.12) (type solid)) (layer "${side}.SilkS"))
    (fp_line (start 4.6 -1.9) (end 4.6 0.4) (stroke (width 0.12) (type solid)) (layer "${side}.SilkS"))
    `
    }

    function courtyard(side) {
      return `
    (fp_line (start -5 -2.25) (end -5 2.25) (stroke (width 0.05) (type solid)) (layer "${side}.CrtYd"))
    (fp_line (start -5 2.25) (end -3.25 2.25) (stroke (width 0.05) (type solid)) (layer "${side}.CrtYd"))
    (fp_line (start -3.5 -4.5) (end -3.5 -2.25) (stroke (width 0.05) (type solid)) (layer "${side}.CrtYd"))
    (fp_line (start -3.5 -2.25) (end -5 -2.25) (stroke (width 0.05) (type solid)) (layer "${side}.CrtYd"))
    (fp_line (start -3.25 2.25) (end -3.25 2.75) (stroke (width 0.05) (type solid)) (layer "${side}.CrtYd"))
    (fp_line (start -3.25 2.75) (end -2.5 2.75) (stroke (width 0.05) (type solid)) (layer "${side}.CrtYd"))
    (fp_line (start -2.5 2.75) (end -2.5 4.25) (stroke (width 0.05) (type solid)) (layer "${side}.CrtYd"))
    (fp_line (start -2.5 4.25) (end 2.5 4.25) (stroke (width 0.05) (type solid)) (layer "${side}.CrtYd"))
    (fp_line (start 2.5 2.5) (end 3.25 2.5) (stroke (width 0.05) (type solid)) (layer "${side}.CrtYd"))
    (fp_line (start 2.5 4.25) (end 2.5 2.5) (stroke (width 0.05) (type solid)) (layer "${side}.CrtYd"))
    (fp_line (start 3.25 2.25) (end 5 2.25) (stroke (width 0.05) (type solid)) (layer "${side}.CrtYd"))
    (fp_line (start 3.25 2.5) (end 3.25 2.25) (stroke (width 0.05) (type solid)) (layer "${side}.CrtYd"))
    (fp_line (start 3.5 -4.5) (end -3.5 -4.5) (stroke (width 0.05) (type solid)) (layer "${side}.CrtYd"))
    (fp_line (start 3.5 -2.25) (end 3.5 -4.5) (stroke (width 0.05) (type solid)) (layer "${side}.CrtYd"))
    (fp_line (start 5 -2.25) (end 3.5 -2.25) (stroke (width 0.05) (type solid)) (layer "${side}.CrtYd"))
    (fp_line (start 5 2.25) (end 5 -2.25) (stroke (width 0.05) (type solid)) (layer "${side}.CrtYd"))
    `
    }

    function fab(side) {
      return `
    (fp_line (start -4.5 -1.8) (end -4.5 1.8) (stroke (width 0.1) (type solid)) (layer "${side}.Fab"))
    (fp_line (start -4.5 -1.8) (end 4.5 -1.8) (stroke (width 0.1) (type solid)) (layer "${side}.Fab"))
    (fp_line (start -2.8 2.1) (end -2.8 1.8) (stroke (width 0.1) (type solid)) (layer "${side}.Fab"))
    (fp_line (start -2.2 1.8) (end -2.2 2.1) (stroke (width 0.1) (type solid)) (layer "${side}.Fab"))
    (fp_line (start -2.2 2.1) (end -2.8 2.1) (stroke (width 0.1) (type solid)) (layer "${side}.Fab"))
    (fp_line (start -2 3.8) (end -2 1.8) (stroke (width 0.1) (type solid)) (layer "${side}.Fab"))
    (fp_line (start -0.5 1.8) (end -0.5 3.8) (stroke (width 0.1) (type solid)) (layer "${side}.Fab"))
    (fp_line (start -0.5 3.8) (end -2 3.8) (stroke (width 0.1) (type solid)) (layer "${side}.Fab"))
    (fp_line (start -0.3 2.1) (end -0.3 1.8) (stroke (width 0.1) (type solid)) (layer "${side}.Fab"))
    (fp_line (start 0.3 1.8) (end 0.3 2.1) (stroke (width 0.1) (type solid)) (layer "${side}.Fab"))
    (fp_line (start 0.3 2.1) (end -0.3 2.1) (stroke (width 0.1) (type solid)) (layer "${side}.Fab"))
    (fp_line (start 2.2 1.8) (end 2.2 2.1) (stroke (width 0.1) (type solid)) (layer "${side}.Fab"))
    (fp_line (start 2.2 2.1) (end 2.8 2.1) (stroke (width 0.1) (type solid)) (layer "${side}.Fab"))
    (fp_line (start 2.8 2.1) (end 2.8 1.8) (stroke (width 0.1) (type solid)) (layer "${side}.Fab"))
    (fp_line (start 4.5 -1.8) (end 4.5 1.8) (stroke (width 0.1) (type solid)) (layer "${side}.Fab"))
    (fp_line (start 4.5 1.8) (end -4.5 1.8) (stroke (width 0.1) (type solid)) (layer "${side}.Fab"))
    `
    }

    function pads(side) {
      return `
    (pad "1" smd roundrect (at -2.5 -2.75 ${p.r}) (size 1.25 2.5) (layers "${side}.Cu" "${side}.Paste" "${side}.Mask") (roundrect_rratio 0.2) ${p.RAW.str})
    (pad "2" smd roundrect (at 0 -2.75 ${p.r}) (size 1.25 2.5) (layers "${side}.Cu" "${side}.Paste" "${side}.Mask") (roundrect_rratio 0.2) ${p.BAT_P.str})
    (pad "3" smd roundrect (at 2.5 -2.75 ${p.r}) (size 1.25 2.5) (layers "${side}.Cu" "${side}.Paste" "${side}.Mask") (roundrect_rratio 0.2))
    `
    }

    const closing = `
    (pad "" np_thru_hole circle (at -3.4 0) (size 0.9 0.9) (drill 0.9) (layers "*.Cu" "*.Mask"))
	  (pad "" np_thru_hole circle (at 3.4 0) (size 0.9 0.9) (drill 0.9) (layers "*.Cu" "*.Mask"))
    )
    `

    let final = standard_opening;

    if (p.side = "F" || p.reversible) {
      final += silkscreen(p.side) + courtyard(p.side) + fab(p.side) + pads(p.side);
    }
    if (p.side = "B" || p.reversible) {
      final += silkscreen(p.side) + courtyard(p.side) + fab(p.side) + pads(p.side);
    }

    return final + closing;
  }
};
// (model "${KICAD8_3DMODEL_DIR}/Button_Switch_SMD.3dshapes/SW_SPDT_CK_JS102011SAQN.wrl"
//   (offset
//     (xyz 0 0 0)) (scale
//     (xyz 1 1 1)) (rotate
//     (xyz 0 0 0))
// )
