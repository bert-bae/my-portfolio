import React from 'react';
import { Pie } from 'react-chartjs';


export default function DevSkills({ devSkill }) {
  const options = {
    //Boolean - Whether we should show a stroke on each segment
    segmentShowStroke : true,
  
    //String - The colour of each segment stroke
    segmentStrokeColor : "#fff",
  
    //Number - The width of each segment stroke
    segmentStrokeWidth : 2,
  
    //Number - The percentage of the chart that we cut out of the middle
    percentageInnerCutout : 0, // This is 0 for Pie charts
  
    //Number - Amount of animation steps
    animationSteps : 75,
  
    //String - Animation easing effect
    animationEasing : "easeOutBounce",
  
    //Boolean - Whether we animate the rotation of the Doughnut
    animateRotate : true,
  
    //Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale : false,
    
    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"><%if(segments[i].label){%><%=segments[i].label%><%}%></span></li><%}%></ul>"
  };
  return (
    <div className="dev-skill">
      <Pie data={devSkill.pieData} options={options} width="50" height="50"/>
      <p className="miniheader">{devSkill.name}</p>
    </div>
  )
}