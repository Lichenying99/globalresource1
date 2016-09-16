import React from 'react'
import { Link } from 'react-router'
import { render } from 'react-dom'


export default React.createElement(AmCharts.React, {
					"type": "pie",
					"balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
					"depth3D": 6,
					"titleField": "country",
					"valueField": "litres",
					"fontSize": 12,
					"handDrawn": true,
					"theme": "black",
					"allLabels": [],
					"balloon": {},
					"titles": [],
					"dataProvider": [
						{
							"country": "Inpatient",
							"litres": 109.9
						},
						{
							"country": "Outpatient",
							"litres": 108.3
						},
						{
							"country": "Profesional Fee",
							"litres": 65
						}
					]
				}
			)

export default Charts;