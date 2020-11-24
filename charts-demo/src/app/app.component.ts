import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor() {
  }
  

  gaugeType = "semi";
  gaugeValue = 550;
  gaugeLabel = "Actual vs Planned Spend";
  gaugeAppendText = "";
  gaugePrependText = "$";


  // google charts for doughnut charts
  doughnutChartProperties= {
    title : 'Media Split',
    type : 'PieChart',
    data : [
        ['Cinema', 45.0],
        ['Digital', 15.48],
        ['General Press', 3.35],
        ['OOH', 1.0],
        ['Other', 0.03],
        ['Radio', 0.7],
        ['Television', 77.72],
        ['Trade Publications', 0.98]   
    ],
    columnNames : ['Browser', 'Percentage'],
    options : {    
      pieHole:0.55
    },
    width : 550,
    height : 400,
  }
    // google charts for line charts
  lineChartProperties= {
      title : 'Seasonality',
      type : 'LineChart',
      data : [
         ["Jan",  7.0],
         ["Feb",  6.9],
         ["Mar",  9.5],
         ["Apr",  14.5],
         ["May",  18.2],
         ["Jun",  21.5],
         ["Jul",  25.2],
         ["Aug",  26.5],
         ["Sep",  23.3],
         ["Oct",  18.3],
         ["Nov",  13.9],
         ["Dec",  9.6]
      ],
      options : {   
        legend:{
          position: 'none'
        }
        //  hAxis: {
        //     title: 'Month'
        //  },
        //  vAxis:{
        //     title: 'Temperature'
        //  },
      },
      width : 800,
      height : 400,
  }

  treeMapProperties= {
   title : 'Brands Mapping',
   type:'TreeMap',
   data : [
      ["Global",null,0,0],

      ["Ash","Global",0,0],
      ["Ash1","Ash",52,31],
      ["Ash2","Ash",52,31],
      ["Ash3","Ash",52,31],
      ["Ash4","Ash",52,31],

      ["Pine","Global",0,0],
      ["Pine1","Pine",52,41],
      ["Pine2","Pine",52,41],
      ["Pine3","Pine",52,41],
      

      ["Maple","Global",0,0],
      ["Maple1","Maple",52,1],
      ["Maple2","Maple",52,1],
      ["Maple3","Maple",52,1],

      ["Holly","Global",0,0],
      ["Holly1","Holly",52,11],

      ["Alder","Global",0,0],
      ["Alder1","Alder",52,17],

      ["Juniper","Global",0,0],
      ["Juniper1","Juniper",52,61],

      ["Birch","Global",0,0],
      ["Birch1","Birch",52,-31],
      ["Birch2","Birch",52,-31],
      ["Birch3","Birch",52,-31],

      ["Dogwood","Global",0,0],
      ["Dogwood1","Dogwood",10,89],
      ["Dogwood2","Dogwood",10,89],
      ["Dogwood3","Dogwood",10,89],
      ["Dogwood5","Dogwood",10,89],
      ["Dogwood4","Dogwood",10,89],
      ["Dogwood6","Dogwood",10,89],

      ["Willow","Global",0,0],
      ["Willow1","Willow",40,57],
      ["Willow2","Willow",40,57],
      ["Willow3","Willow",40,57],

      ["Pear","Global",0,0],
      ["Pear1","Pear",80,98],
      ["Pear2","Pear",80,98],
      ["Pear3","Pear",80,98],
      ["Pear4","Pear",80,98],
      ["Pear5","Pear",80,98],

      ["Beech","Global",0,0],
      ["Beech1","Beech",50,23],
      ["Beech2","Beech",50,23],
      ["Beech3","Beech",50,23],
      ["Beech4","Beech",50,23],

      ["Lime","Global",0,0],
      ["Lime1","Lime",10,100],
      ["Lime2","Lime",10,100],
      ["Lime3","Lime",10,100],
      ["Lime4","Lime",10,100],

      // ["Elm","Global",0,0],

      // ["Oalc","Global",0,0],

      // ["Oak","Global",0,0],

      // ["Sandalwood","Global",0,0],

      // ["Willowwood","Global",0,0]
          
   ],
  //  columnNames : ["Location", "Parent","Market trade volume (size)","Market increase/decrease (color)"],
   options : { 
      legend:{
        position: 'none'
      },
      minColor:"#ff7777",
      midColor:'#ffff77',
      maxColor:'#77ff77',
      headerHeight:15,
      showScale:true
   },
   width : 550,
   height : 400,
  }
  
  rows = [
      {
          "name": "Ethel Price",
          "gender": "female",
          "company": "Johnson, Johnson and Partners, LLC CMP DDC",
          "age": 22
      },
      {
          "name": "Claudine Neal",
          "gender": "female",
          "company": "Sealoud",
          "age": 55
      },
      {
        "name": "Ethel Price",
        "gender": "female",
        "company": "Johnson, Johnson and Partners, LLC CMP DDC",
        "age": 22
    },
    {
        "name": "Claudine Neal",
        "gender": "female",
        "company": "Sealoud",
        "age": 55
    },
    {
      "name": "Ethel Price",
      "gender": "female",
      "company": "Johnson, Johnson and Partners, LLC CMP DDC",
      "age": 22
    },
    {
      "name": "Claudine Neal",
      "gender": "female",
      "company": "Sealoud",
      "age": 55
    },
    {
      "name": "Ethel Price",
      "gender": "female",
      "company": "Johnson, Johnson and Partners, LLC CMP DDC",
      "age": 22
    },
    {
      "name": "Claudine Neal",
      "gender": "female",
      "company": "Sealoud",
      "age": 55
    }
  ]
  // title = 'My first AGM project';
  // lat = 51.678418;
  // lng = 7.809007;
}
