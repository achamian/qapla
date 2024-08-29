// Description:
//  0805 (2012 Metric) SMD resistor and led placed side by side
module.exports = {
  params: {
    side: 'F',
    VCC: { type: 'net', value: 'VCC' },
    GND: { type: 'net', value: 'GND' }
  },
  body: p => {
    let local_net = p.local_net("1");
    return `
  (footprint "D_0805_2012Metric_Pad1.15x1.40mm_HandSolder"
    (layer "${p.side}.Cu")
    ${p.at /* parametric position */}
    (property "Reference" "${p.ref}"
      (at 0 0 ${p.r})
      (layer "${p.side}.SilkS")
      ${p.ref_hide}
      (effects (font (size 1 1) (thickness 0.15)))
    )

    (attr smd)

    ${'' /* Front Silk, Courtyand and Fab */}
    (fp_line (start 0.64 -0.96) (end 0.64 0.96) (stroke (width 0.12) (type solid)) (layer "F.SilkS"))
    (fp_line (start 0.64 0.96) (end 3.5 0.96) (stroke (width 0.12) (type solid)) (layer "F.SilkS"))
    (fp_line (start 3.5 -0.96) (end 0.64 -0.96) (stroke (width 0.12) (type solid)) (layer "F.SilkS"))
    (fp_line (start 0.65 -0.95) (end 4.35 -0.95) (stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
    (fp_line (start 0.65 0.95) (end 0.65 -0.95) (stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
    (fp_line (start 4.35 -0.95) (end 4.35 0.95) (stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
    (fp_line (start 4.35 0.95) (end 0.65 0.95) (stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
    (fp_line (start 1.5 -0.3) (end 1.5 0.6) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
    (fp_line (start 1.5 0.6) (end 3.5 0.6) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
    (fp_line (start 1.8 -0.6) (end 1.5 -0.3) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
    (fp_line (start 3.5 -0.6) (end 1.8 -0.6) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
    (fp_line (start 3.5 0.6) (end 3.5 -0.6) (stroke (width 0.1) (type solid)) (layer "F.Fab"))

    ${'' /* Back Silk, Courtyand and Fab */}
    (fp_line (start 0.64 -0.96) (end 0.64 0.96) (stroke (width 0.12) (type solid)) (layer "B.SilkS"))
    (fp_line (start 0.64 0.96) (end 3.5 0.96) (stroke (width 0.12) (type solid)) (layer "B.SilkS"))
    (fp_line (start 3.5 -0.96) (end 0.64 -0.96) (stroke (width 0.12) (type solid)) (layer "B.SilkS"))
    (fp_line (start 0.65 -0.95) (end 4.35 -0.95) (stroke (width 0.05) (type solid)) (layer "B.CrtYd"))
    (fp_line (start 0.65 0.95) (end 0.65 -0.95) (stroke (width 0.05) (type solid)) (layer "B.CrtYd"))
    (fp_line (start 4.35 -0.95) (end 4.35 0.95) (stroke (width 0.05) (type solid)) (layer "B.CrtYd"))
    (fp_line (start 4.35 0.95) (end 0.65 0.95) (stroke (width 0.05) (type solid)) (layer "B.CrtYd"))
    (fp_line (start 1.5 -0.3) (end 1.5 0.6) (stroke (width 0.1) (type solid)) (layer "B.Fab"))
    (fp_line (start 1.5 0.6) (end 3.5 0.6) (stroke (width 0.1) (type solid)) (layer "B.Fab"))
    (fp_line (start 1.8 -0.6) (end 1.5 -0.3) (stroke (width 0.1) (type solid)) (layer "B.Fab"))
    (fp_line (start 3.5 -0.6) (end 1.8 -0.6) (stroke (width 0.1) (type solid)) (layer "B.Fab"))
    (fp_line (start 3.5 0.6) (end 3.5 -0.6) (stroke (width 0.1) (type solid)) (layer "B.Fab"))

    ${'' /* Pads */}
    (pad "1" thru_hole roundrect (at 1.475 0) (size 1.15 1.4) (drill 0.3) (layers "*.Cu" "*.Paste" "*.Mask") (roundrect_rratio 0.217391) ${local_net.str})
    (pad "2" thru_hole roundrect (at 3.525 0) (size 1.15 1.4) (drill 0.3) (layers "*.Cu" "*.Paste" "*.Mask") (roundrect_rratio 0.217391) ${p.VCC})
  )
  (footprint "R_0805_2012Metric_Pad1.20x1.40mm_HandSolder"
    (layer "${p.side}.Cu")
    ${p.at /* parametric position */}
    (property "Reference" "${p.ref}"
      (at 0 0 ${p.r})
      (layer "${p.side}.SilkS")
      ${p.ref_hide}
      (effects (font (size 1 1) (thickness 0.15)))
    )

    (attr smd)

    ${'' /* Front Silk, Courtyand and Fab */}
    (fp_line (start -2.727064 -0.735) (end -2.272936 -0.735) (stroke (width 0.12) (type solid)) (layer "F.SilkS"))
    (fp_line (start -2.727064 0.735) (end -2.272936 0.735) (stroke (width 0.12) (type solid)) (layer "F.SilkS"))
    (fp_line (start -4.35 -0.95) (end -0.65 -0.95) (stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
    (fp_line (start -4.35 0.95) (end -4.35 -0.95) (stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
    (fp_line (start -0.65 -0.95) (end -0.65 0.95) (stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
    (fp_line (start -0.65 0.95) (end -4.35 0.95) (stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
    (fp_line (start -3.5 -0.625) (end -1.5 -0.625) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
    (fp_line (start -3.5 0.625) (end -3.5 -0.625) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
    (fp_line (start -1.5 -0.625) (end -1.5 0.625) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
    (fp_line (start -1.5 0.625) (end -3.5 0.625) (stroke (width 0.1) (type solid)) (layer "F.Fab"))

    ${'' /* Back Silk, Courtyand and Fab */}
    (fp_line (start -2.727064 -0.735) (end -2.272936 -0.735) (stroke (width 0.12) (type solid)) (layer "B.SilkS"))
    (fp_line (start -2.727064 0.735) (end -2.272936 0.735) (stroke (width 0.12) (type solid)) (layer "B.SilkS"))
    (fp_line (start -4.35 -0.95) (end -0.65 -0.95) (stroke (width 0.05) (type solid)) (layer "B.CrtYd"))
    (fp_line (start -4.35 0.95) (end -4.35 -0.95) (stroke (width 0.05) (type solid)) (layer "B.CrtYd"))
    (fp_line (start -0.65 -0.95) (end -0.65 0.95) (stroke (width 0.05) (type solid)) (layer "B.CrtYd"))
    (fp_line (start -0.65 0.95) (end -4.35 0.95) (stroke (width 0.05) (type solid)) (layer "B.CrtYd"))
    (fp_line (start -3.5 -0.625) (end -1.5 -0.625) (stroke (width 0.1) (type solid)) (layer "B.Fab"))
    (fp_line (start -3.5 0.625) (end -3.5 -0.625) (stroke (width 0.1) (type solid)) (layer "B.Fab"))
    (fp_line (start -1.5 -0.625) (end -1.5 0.625) (stroke (width 0.1) (type solid)) (layer "B.Fab"))
    (fp_line (start -1.5 0.625) (end -3.5 0.625) (stroke (width 0.1) (type solid)) (layer "B.Fab"))

    ${'' /* Pads */}
    (pad "3" thru_hole roundrect (at -3.5 0) (size 1.2 1.4) (drill 0.3) (layers "*.Cu" "*.Paste" "*.Mask") (roundrect_rratio 0.208333) ${p.GND})
    (pad "4" thru_hole roundrect (at -1.5 0) (size 1.2 1.4) (drill 0.3) (layers "*.Cu" "*.Paste" "*.Mask") (roundrect_rratio 0.208333) ${local_net.str})
  )
    `;
  }
}