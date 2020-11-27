import { Component } from '@angular/core';

import { Maps, Bubble } from '@syncfusion/ej2-angular-maps';
import { DataService } from './data.service';
import { world_map } from './world-map';
Maps.Inject(Bubble);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private dataService : DataService) {
  }


  //for gauge chart
  gaugeMin = 100;
  gaugeMax = 1000;
  gaugeType = "semi";
  gaugeValue = 550;
  gaugeLabel = "Actual vs Planned Spend";
  gaugeAppendText = "";
  gaugePrependText = "$";


  // google charts for doughnut charts
  doughnutChartProperties = {
    title: 'Media Split',
    type: 'PieChart',
    data: [
      ['2013', 10.0],      ['2014', 12.0],      ['2015', 18.0],  ['2016', 8.0],      
      ['2017', 10.0],      ['2018', 22.0],      ['2019', 5.0], ['2020', 15.0],
    ],
    columnNames: ['Browser', 'Percentage'],
    options: {
      pieHole: 0.55
    },
    width: 550,
    height: 400,
  }


  // google charts for line charts
  lineChartProperties = {
    title: 'Seasonality',
    type: 'LineChart',
    data: [
      ['2013', 10.0],      ['2014', 12.0],      ['2015', 18.0],  ['2016', 8.0],      
      ['2017', 10.0],      ['2018', 22.0],      ['2019', 5.0], ['2012', 15.0],
    ],
    options: {
      legend: {
        position: 'none'
      }
      // ,
      //  hAxis: {   title: 'Month'        },
      //  vAxis:{   title: 'Temperature'  },
    },
    width: 800,
    height: 400,
  }


  treeMapProperties = {
    title: 'Brands Mapping',
    type: 'TreeMap',
    data: [
      ["Global", null, 0, 0],

      ["Ash", "Global", 0, 0],
      ["Ash1", "Ash", 252, 31],

      ["Pine", "Global", 0, 0],
      ["Pine1", "Pine", 152, 21],

      ["Maple", "Global", 0, 0],
      ["Maple1", "Maple", 152, 1],

      ["Holly", "Global", 0, 0],
      ["Holly1", "Holly", 52, 11],

      ["Alder", "Global", 0, 0],
      ["Alder1", "Alder", 52, 17],

      ["Juniper", "Global", 0, 0],
      ["Juniper1", "Juniper", 52, 61],

      ["Birch", "Global", 0, 0],
      ["Birch1", "Birch", 150, -31],

      ["Dogwood", "Global", 0, 0],
      ["Dogwood1", "Dogwood", 70, 89],

      ["Willow", "Global", 0, 0],
      ["Willow1", "Willow", 120, 57],

      ["Pear", "Global", 0, 0],
      ["Pear1", "Pear", 400, 98],

      ["Beech", "Global", 0, 0],
      ["Beech1", "Beech", 200, 23],

      ["Lime", "Global", 0, 0],
      ["Lime1", "Lime", 40, 100],

    ],
    //  columnNames : ["Location", "Parent","Market trade volume (size)","Market increase/decrease (color)"],
    options: {
      legend: {
        position: 'none'
      },
      minColor: "#ff7777",
      midColor: '#ffff77',
      maxColor: '#77ff77',
      headerHeight: 15,
      showScale: true
    },
    width: 400,
    height: 500,
  }


  //data table values
  rows = [{ "country": "America", "January": 18209, "February": 4764, "March": 8673, "April": 2562, "May": 17454, "June": 11345, "July": 6321, "August": 15839, "September": 18867, "October": 6918, "November": 18485, "December": 15476, "total": 144913 }, { "country": "India", "January": 13625, "February": 19294, "March": 3536, "April": 5627, "May": 11592, "June": 12017, "July": 7369, "August": 14450, "September": 10103, "October": 19996, "November": 18005, "December": 13676, "total": 149290 }, { "country": "Japan", "January": 9644, "February": 13357, "March": 16309, "April": 19066, "May": 8856, "June": 6776, "July": 3918, "August": 3183, "September": 9990, "October": 2364, "November": 3182, "December": 15275, "total": 111920 }, { "country": "Canada", "January": 3425, "February": 14582, "March": 10641, "April": 19635, "May": 14552, "June": 14348, "July": 9971, "August": 2080, "September": 5209, "October": 12013, "November": 18735, "December": 18069, "total": 143260 }, { "country": "China", "January": 16017, "February": 6591, "March": 12265, "April": 9844, "May": 8322, "June": 8287, "July": 6168, "August": 14216, "September": 18107, "October": 18801, "November": 8515, "December": 18720, "total": 145853 }, { "country": "Japan", "January": 17487, "February": 7938, "March": 13363, "April": 1746, "May": 2930, "June": 3225, "July": 17667, "August": 2365, "September": 19699, "October": 10720, "November": 18167, "December": 10647, "total": 125954 }, { "country": "Norway", "January": 1962, "February": 17047, "March": 3248, "April": 9241, "May": 7218, "June": 15174, "July": 8211, "August": 15818, "September": 9298, "October": 3096, "November": 8646, "December": 6261, "total": 105220 }, { "country": "Italy", "January": 5089, "February": 13057, "March": 5740, "April": 5959, "May": 4466, "June": 12162, "July": 7214, "August": 2467, "September": 7718, "October": 6085, "November": 2612, "December": 7302, "total": 79871 }, { "country": "United Kingdom", "January": 15516, "February": 6726, "March": 13658, "April": 6944, "May": 14424, "June": 15898, "July": 8669, "August": 14927, "September": 9872, "October": 18604, "November": 14208, "December": 4402, "total": 143848 }, { "country": "France", "January": 17637, "February": 15988, "March": 13175, "April": 13102, "May": 19621, "June": 19644, "July": 1744, "August": 17011, "September": 11286, "October": 15461, "November": 4138, "December": 13795, "total": 162602 }, { "country": "Russia", "January": 2421, "February": 1075, "March": 5176, "April": 10503, "May": 11465, "June": 4768, "July": 7805, "August": 5192, "September": 14515, "October": 16298, "November": 17173, "December": 6043, "total": 102434 }, { "country": "Sri Lanka", "January": 7649, "February": 14689, "March": 3549, "April": 15944, "May": 15563, "June": 2347, "July": 19365, "August": 15250, "September": 7536, "October": 5269, "November": 19385, "December": 19950, "total": 146496 }, { "country": "Bangladesh", "January": 10167, "February": 9399, "March": 18882, "April": 19080, "May": 14268, "June": 17410, "July": 5563, "August": 2697, "September": 6701, "October": 14402, "November": 18845, "December": 7992, "total": 145406 }, { "country": "Egypt", "January": 18547, "February": 16972, "March": 9763, "April": 5098, "May": 8613, "June": 13591, "July": 10841, "August": 6404, "September": 15327, "October": 4748, "November": 12508, "December": 16375, "total": 138787 }, { "country": "Ukraine", "January": 3335, "February": 13863, "March": 8842, "April": 1369, "May": 5142, "June": 4112, "July": 5517, "August": 3147, "September": 14608, "October": 1278, "November": 16014, "December": 19620, "total": 96847 }, { "country": "South Africa", "January": 14860, "February": 4385, "March": 14011, "April": 18008, "May": 6751, "June": 13742, "July": 8778, "August": 2719, "September": 19220, "October": 14502, "November": 17647, "December": 2743, "total": 137366 }, { "country": "Spain", "January": 4916, "February": 6951, "March": 9740, "April": 17057, "May": 14512, "June": 12334, "July": 8850, "August": 3177, "September": 14674, "October": 13119, "November": 14743, "December": 16665, "total": 136738 }, { "country": "Singapore", "January": 16735, "February": 12213, "March": 3086, "April": 4220, "May": 3586, "June": 16946, "July": 13715, "August": 7417, "September": 18455, "October": 18493, "November": 1884, "December": 15461, "total": 132211 }, { "country": "New Zealand", "January": 13226, "February": 3951, "March": 17532, "April": 13584, "May": 12101, "June": 5925, "July": 6189, "August": 17001, "September": 7925, "October": 6358, "November": 7312, "December": 4708, "total": 115812 }, { "country": "Germany", "January": 3617, "February": 14194, "March": 2385, "April": 1342, "May": 1843, "June": 3027, "July": 10588, "August": 18474, "September": 19762, "October": 15535, "November": 5347, "December": 9493, "total": 105607 }, { "country": "Israel", "January": 17134, "February": 17185, "March": 18829, "April": 9733, "May": 10373, "June": 1051, "July": 14759, "August": 13201, "September": 7334, "October": 1139, "November": 10105, "December": 13344, "total": 134187 }, { "country": "UAE", "January": 18582, "February": 7280, "March": 17996, "April": 3107, "May": 13799, "June": 7494, "July": 12329, "August": 5251, "September": 1970, "October": 8615, "November": 10108, "December": 2232, "total": 108763 }];
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  

  // world map
  public shapeData: Object = world_map;
  public shapeDataPath: Object = 'name';
  public shapePropertyPath: String = 'name';
  public bubbleSettings: Object = [{
    visible: true,
    minRadius: 0,
    colorValuePath: "populationColor",
    dataSource: [
      { name: 'India', population: '38332521', populationColor: 'green' },{ name: 'New Zealand', population: '19651127', populationColor: 'green' },
      { name: 'Pakistan', population: '3090416', populationColor: 'green' },{ name: 'United Arab Emirates', population: '38332521', populationColor: 'green' },
      { name: 'United Kingdom', population: '38332521', populationColor: 'green' },{ name: 'United States', population: '38332521', populationColor: 'green' }
    ],
    maxRadius: 10,
    valuePath: 'population'
  }];
  public legendSettings: Object = {
    visible: true,
    type: 'Bubbles'
  };


  //Event listener for dynamic data loading
  onClick(event) {
    console.log('clicked');
    let selectedYear = +this.doughnutChartProperties.data[event.selection[0].row][0];
    console.log(this.doughnutChartProperties.data[event.selection[0].row][0]);
    this.doughnutChartProperties.data = this.dataService.getDoughNutChartData(selectedYear);
    this.lineChartProperties.data = this.dataService.getLineChartData(selectedYear);
    this.dataService.getGaugeChartData(selectedYear);
    let gaugeDataTemp = this.dataService.getGaugeChartData(selectedYear);
    this.gaugeMin=gaugeDataTemp['min'];
    this.gaugeMax=gaugeDataTemp['max'];
    this.gaugeValue=gaugeDataTemp['value'];
    this.rows=this.dataService.getDataTableData(selectedYear);
  }
  
}
