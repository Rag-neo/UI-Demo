import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class DataService{

    resolver(year: number){
        return year < 2015 ? 0 : year < 2018 ? 1 : 2; 
    }

    gaugeChartData = {
        0 :{'min':200, 'max':10000, 'value':2000},
        1 :{'min':200, 'max':10000, 'value':8000},
        2 :{'min':200, 'max':20000, 'value':15000}
    };


    lineChartData = [
        [["Jan", 3.0], ["Feb", 6.9],["Mar", 8.5],["Apr", 14.5],["May", 10.2], ["Jun", 15.5], 
        ["Jul", 13.2], ["Aug", 20.5],["Sep", 23.3],["Oct", 18.3],["Nov", 29.9], ["Dec", 33.6]],

        [["Jan", 3.0], ["Feb", 6.9],["Mar", 8.5],["Apr", 5.5],["May", 10.2], ["Jun", 11.5], 
        ["Jul", 13.2], ["Aug", 12.5],["Sep", 20.3],["Oct", 18.3],["Nov", 29.9], ["Dec", 27.6]],

        [["Jan", 13.0], ["Feb", 16.9],["Mar", 12.5],["Apr", 14.5],["May", 10.2], ["Jun", 15.5], 
        ["Jul", 13.2], ["Aug", 20.5],["Sep", 23.3],["Oct", 18.3],["Nov", 19.9], ["Dec", 13.6]],
    ];


    dataTableData = [
        [{"country": "America", "January": 2517, "February": 1328, "March": 15715, "April": 1151, "May": 16472, "June": 8803, "July": 18385, "August": 4544, "September": 19122, "October": 11235, "November": 4852, "December": 7476, "total": 111600}, {"country": "India", "January": 15699, "February": 17166, "March": 8679, "April": 1956, "May": 1336, "June": 11483, "July": 3075, "August": 8471, "September": 8177, "October": 6760, "November": 15332, "December": 8392, "total": 106526}, {"country": "Japan", "January": 7390, "February": 6155, "March": 19393, "April": 15585, "May": 12078, "June": 10304, "July": 3791, "August": 16649, "September": 2942, "October": 18545, "November": 6310, "December": 1946, "total": 121088}, {"country": "Canada", "January": 5766, "February": 6975, "March": 11282, "April": 1214, "May": 14116, "June": 18346, "July": 1344, "August": 4557, "September": 16030, "October": 6251, "November": 19922, "December": 13874, "total": 119677}, {"country": "China", "January": 15989, "February": 9140, "March": 12693, "April": 19189, "May": 14605, "June": 11379, "July": 15296, "August": 14896, "September": 8429, "October": 12061, "November": 18990, "December": 7384, "total": 160051}, {"country": "Japan", "January": 18490, "February": 7272, "March": 7303, "April": 1934, "May": 15306, "June": 7007, "July": 12764, "August": 19171, "September": 18763, "October": 17851, "November": 15552, "December": 16412, "total": 157825}, {"country": "Norway", "January": 13720, "February": 12050, "March": 15472, "April": 4782, "May": 19741, "June": 11776, "July": 4520, "August": 7515, "September": 14769, "October": 3798, "November": 5918, "December": 16335, "total": 130396}, {"country": "Italy", "January": 8148, "February": 15240, "March": 17482, "April": 8937, "May": 15326, "June": 8501, "July": 18557, "August": 17037, "September": 15996, "October": 18282, "November": 8991, "December": 19856, "total": 172353}, {"country": "United Kingdom", "January": 18440, "February": 9017, "March": 6285, "April": 19820, "May": 14925, "June": 5509, "July": 8901, "August": 17955, "September": 12525, "October": 14997, "November": 1502, "December": 18267, "total": 148143}, {"country": "France", "January": 10199, "February": 10386, "March": 15100, "April": 15722, "May": 9681, "June": 3976, "July": 11793, "August": 13107, "September": 3435, "October": 9774, "November": 3155, "December": 13456, "total": 119784}, {"country": "Russia", "January": 9869, "February": 8390, "March": 5343, "April": 3363, "May": 10501, "June": 14487, "July": 8897, "August": 3957, "September": 10034, "October": 6105, "November": 13938, "December": 2539, "total": 97423}, {"country": "Sri Lanka", "January": 15682, "February": 10157, "March": 10327, "April": 19343, "May": 15649, "June": 9941, "July": 14049, "August": 10673, "September": 8819, "October": 11499, "November": 8938, "December": 14645, "total": 149722}, {"country": "Bangladesh", "January": 4148, "February": 12772, "March": 4516, "April": 19710, "May": 10295, "June": 4774, "July": 14790, "August": 9078, "September": 1996, "October": 7293, "November": 16605, "December": 6670, "total": 112647}, {"country": "Egypt", "January": 2084, "February": 18732, "March": 9817, "April": 16622, "May": 5258, "June": 15883, "July": 17477, "August": 5947, "September": 8160, "October": 3711, "November": 8798, "December": 16544, "total": 129033}, {"country": "Ukraine", "January": 14269, "February": 15491, "March": 9698, "April": 8291, "May": 15218, "June": 18477, "July": 11113, "August": 5859, "September": 2104, "October": 15043, "November": 9096, "December": 15374, "total": 140033}, {"country": "South Africa", "January": 2979, "February": 1226, "March": 4914, "April": 1613, "May": 18327, "June": 6535, "July": 18658, "August": 9183, "September": 11783, "October": 9418, "November": 11171, "December": 17548, "total": 113355}, {"country": "Spain", "January": 3817, "February": 9728, "March": 1220, "April": 18389, "May": 6367, "June": 14902, "July": 10880, "August": 17333, "September": 17628, "October": 8376, "November": 10482, "December": 10159, "total": 129281}, {"country": "Singapore", "January": 11466, "February": 17069, "March": 6813, "April": 17130, "May": 14725, "June": 3311, "July": 15646, "August": 6130, "September": 14762, "October": 10437, "November": 1483, "December": 6515, "total": 125487}, {"country": "New Zealand", "January": 2149, "February": 5007, "March": 14490, "April": 3926, "May": 9804, "June": 12896, "July": 10227, "August": 4251, "September": 14540, "October": 14394, "November": 19957, "December": 12177, "total": 123818}, {"country": "Germany", "January": 10110, "February": 6194, "March": 12465, "April": 11966, "May": 17257, "June": 11759, "July": 3727, "August": 8382, "September": 4158, "October": 8498, "November": 11616, "December": 11857, "total": 117989}, {"country": "Israel", "January": 5586, "February": 2448, "March": 13227, "April": 13869, "May": 15034, "June": 7110, "July": 15080, "August": 17332, "September": 19287, "October": 10914, "November": 16472, "December": 8985, "total": 145344}, {"country": "UAE", "January": 12383, "February": 18051, "March": 5947, "April": 7333, "May": 6586, "June": 14753, "July": 3861, "August": 7090, "September": 11929, "October": 17542, "November": 8217, "December": 6905, "total": 120597}],
        [{"country": "America", "January": 17594, "February": 6241, "March": 12124, "April": 1334, "May": 10171, "June": 19266, "July": 15032, "August": 8243, "September": 4980, "October": 9623, "November": 1647, "December": 15854, "total": 122109}, {"country": "India", "January": 18511, "February": 10232, "March": 19818, "April": 6383, "May": 8549, "June": 12286, "July": 3942, "August": 11974, "September": 2089, "October": 18815, "November": 3641, "December": 8738, "total": 124978}, {"country": "Japan", "January": 14362, "February": 8868, "March": 2553, "April": 6538, "May": 19414, "June": 10387, "July": 9132, "August": 15843, "September": 12973, "October": 3790, "November": 3493, "December": 14652, "total": 122005}, {"country": "Canada", "January": 1655, "February": 19426, "March": 10261, "April": 8048, "May": 9997, "June": 19987, "July": 5838, "August": 5950, "September": 3166, "October": 17392, "November": 11743, "December": 12447, "total": 125910}, {"country": "China", "January": 5494, "February": 8427, "March": 10875, "April": 19589, "May": 11925, "June": 10887, "July": 6574, "August": 2990, "September": 10546, "October": 9137, "November": 11353, "December": 10743, "total": 118540}, {"country": "Japan", "January": 12454, "February": 12204, "March": 14797, "April": 3420, "May": 16826, "June": 19366, "July": 17808, "August": 17423, "September": 16434, "October": 1242, "November": 13611, "December": 4150, "total": 149735}, {"country": "Norway", "January": 2025, "February": 11019, "March": 8759, "April": 1696, "May": 11380, "June": 2686, "July": 6558, "August": 4661, "September": 14038, "October": 8279, "November": 10301, "December": 3915, "total": 85317}, {"country": "Italy", "January": 12770, "February": 19387, "March": 2453, "April": 12925, "May": 5229, "June": 3068, "July": 8582, "August": 12131, "September": 12094, "October": 17961, "November": 14051, "December": 12980, "total": 133631}, {"country": "United Kingdom", "January": 11808, "February": 11154, "March": 2537, "April": 9093, "May": 3039, "June": 18171, "July": 3967, "August": 2082, "September": 7019, "October": 19525, "November": 1806, "December": 4704, "total": 94905}, {"country": "France", "January": 5075, "February": 3111, "March": 9424, "April": 9773, "May": 1626, "June": 6187, "July": 16294, "August": 18560, "September": 5217, "October": 19017, "November": 10392, "December": 8286, "total": 112962}, {"country": "Russia", "January": 15205, "February": 11971, "March": 1937, "April": 9098, "May": 18127, "June": 8755, "July": 9390, "August": 14789, "September": 12092, "October": 12875, "November": 12706, "December": 15035, "total": 141980}, {"country": "Sri Lanka", "January": 4715, "February": 15238, "March": 3653, "April": 10793, "May": 15587, "June": 5958, "July": 3900, "August": 17272, "September": 5703, "October": 4365, "November": 4966, "December": 10726, "total": 102876}, {"country": "Bangladesh", "January": 14851, "February": 2795, "March": 14818, "April": 4716, "May": 3646, "June": 14891, "July": 7046, "August": 12741, "September": 4553, "October": 6378, "November": 12100, "December": 18502, "total": 117037}, {"country": "Egypt", "January": 14857, "February": 3095, "March": 8861, "April": 7370, "May": 3514, "June": 19524, "July": 16840, "August": 18410, "September": 11314, "October": 8610, "November": 11570, "December": 11361, "total": 135326}, {"country": "Ukraine", "January": 2203, "February": 10331, "March": 2409, "April": 18995, "May": 10615, "June": 18207, "July": 11195, "August": 16498, "September": 17879, "October": 7144, "November": 1622, "December": 2988, "total": 120086}, {"country": "South Africa", "January": 2547, "February": 3099, "March": 18614, "April": 8487, "May": 14643, "June": 2628, "July": 1900, "August": 17494, "September": 9662, "October": 2635, "November": 9060, "December": 1220, "total": 91989}, {"country": "Spain", "January": 14368, "February": 17364, "March": 5223, "April": 1797, "May": 19643, "June": 4042, "July": 16498, "August": 6571, "September": 13824, "October": 15082, "November": 3913, "December": 7934, "total": 126259}, {"country": "Singapore", "January": 3088, "February": 1480, "March": 4855, "April": 3247, "May": 8558, "June": 7343, "July": 1074, "August": 4129, "September": 2522, "October": 14444, "November": 13628, "December": 11542, "total": 75910}, {"country": "New Zealand", "January": 14483, "February": 14829, "March": 9606, "April": 15290, "May": 12821, "June": 3244, "July": 16001, "August": 10331, "September": 7852, "October": 5103, "November": 12595, "December": 16400, "total": 138555}, {"country": "Germany", "January": 11267, "February": 7795, "March": 8176, "April": 1156, "May": 14317, "June": 3682, "July": 13577, "August": 4074, "September": 6477, "October": 19332, "November": 18381, "December": 5821, "total": 114055}, {"country": "Israel", "January": 12993, "February": 5673, "March": 5213, "April": 14210, "May": 19170, "June": 8532, "July": 1834, "August": 10603, "September": 2293, "October": 11453, "November": 11677, "December": 19633, "total": 123284}, {"country": "UAE", "January": 5752, "February": 17256, "March": 7911, "April": 17453, "May": 3454, "June": 1587, "July": 16385, "August": 11774, "September": 5962, "October": 12147, "November": 13633, "December": 6120, "total": 119434}],
        [{"country": "America", "January": 18934, "February": 12142, "March": 5982, "April": 15874, "May": 14604, "June": 1885, "July": 11994, "August": 7029, "September": 2679, "October": 18561, "November": 16849, "December": 1136, "total": 127669}, {"country": "India", "January": 18195, "February": 18969, "March": 13620, "April": 14509, "May": 7117, "June": 13146, "July": 1374, "August": 5166, "September": 5274, "October": 18775, "November": 16215, "December": 12750, "total": 145110}, {"country": "Japan", "January": 10604, "February": 19074, "March": 10205, "April": 19591, "May": 4322, "June": 8872, "July": 2976, "August": 11855, "September": 4564, "October": 11632, "November": 6576, "December": 6749, "total": 117020}, {"country": "Canada", "January": 1381, "February": 16094, "March": 13729, "April": 17235, "May": 4044, "June": 2636, "July": 19415, "August": 11398, "September": 10171, "October": 19579, "November": 3972, "December": 18665, "total": 138319}, {"country": "China", "January": 13104, "February": 13517, "March": 10692, "April": 15597, "May": 8073, "June": 5051, "July": 15872, "August": 8730, "September": 5718, "October": 12208, "November": 10189, "December": 15017, "total": 133768}, {"country": "Japan", "January": 19481, "February": 13440, "March": 14495, "April": 19267, "May": 2443, "June": 19055, "July": 2239, "August": 2406, "September": 18288, "October": 8216, "November": 9608, "December": 6023, "total": 134961}, {"country": "Norway", "January": 11264, "February": 9987, "March": 12158, "April": 13420, "May": 15624, "June": 8437, "July": 11527, "August": 7846, "September": 6434, "October": 10024, "November": 16622, "December": 13997, "total": 137340}, {"country": "Italy", "January": 1881, "February": 8933, "March": 4899, "April": 11322, "May": 17341, "June": 14682, "July": 16210, "August": 16302, "September": 16059, "October": 4952, "November": 10763, "December": 8898, "total": 132242}, {"country": "United Kingdom", "January": 19768, "February": 12750, "March": 7683, "April": 15610, "May": 2898, "June": 3425, "July": 5317, "August": 3108, "September": 17707, "October": 17090, "November": 13069, "December": 9285, "total": 127710}, {"country": "France", "January": 13982, "February": 13468, "March": 16434, "April": 1168, "May": 7215, "June": 9853, "July": 7011, "August": 7134, "September": 15806, "October": 16120, "November": 17264, "December": 5487, "total": 130942}, {"country": "Russia", "January": 4024, "February": 2589, "March": 12743, "April": 17666, "May": 4454, "June": 19584, "July": 5511, "August": 3322, "September": 6012, "October": 11487, "November": 17092, "December": 15492, "total": 119976}, {"country": "Sri Lanka", "January": 2883, "February": 17189, "March": 4173, "April": 17584, "May": 6709, "June": 16531, "July": 4305, "August": 15352, "September": 7947, "October": 8673, "November": 16099, "December": 11320, "total": 128765}, {"country": "Bangladesh", "January": 15873, "February": 9688, "March": 9345, "April": 3607, "May": 19970, "June": 4462, "July": 14192, "August": 19768, "September": 2404, "October": 6524, "November": 14244, "December": 7566, "total": 127643}, {"country": "Egypt", "January": 11054, "February": 4375, "March": 18283, "April": 17607, "May": 11405, "June": 16404, "July": 3868, "August": 1580, "September": 16227, "October": 19003, "November": 5549, "December": 5802, "total": 131157}, {"country": "Ukraine", "January": 14888, "February": 15059, "March": 11568, "April": 18066, "May": 17337, "June": 2388, "July": 17252, "August": 3794, "September": 3957, "October": 9766, "November": 14104, "December": 10874, "total": 139053}, {"country": "South Africa", "January": 15862, "February": 6013, "March": 12130, "April": 8063, "May": 9424, "June": 18264, "July": 2779, "August": 7262, "September": 9022, "October": 14171, "November": 16217, "December": 4898, "total": 124105}, {"country": "Spain", "January": 13657, "February": 10278, "March": 8162, "April": 10458, "May": 19833, "June": 2236, "July": 16735, "August": 14604, "September": 5555, "October": 3134, "November": 9537, "December": 9083, "total": 123272}, {"country": "Singapore", "January": 9680, "February": 15391, "March": 10807, "April": 4183, "May": 2171, "June": 16529, "July": 16390, "August": 15528, "September": 2191, "October": 13052, "November": 8330, "December": 8119, "total": 122371}, {"country": "New Zealand", "January": 11868, "February": 9140, "March": 12022, "April": 4687, "May": 7298, "June": 12705, "July": 14375, "August": 8605, "September": 7323, "October": 17554, "November": 17416, "December": 12196, "total": 135189}, {"country": "Germany", "January": 2777, "February": 15090, "March": 17658, "April": 8489, "May": 2986, "June": 14666, "July": 6188, "August": 11507, "September": 7820, "October": 11130, "November": 18197, "December": 2734, "total": 119242}, {"country": "Israel", "January": 5875, "February": 11839, "March": 7242, "April": 14809, "May": 9219, "June": 19890, "July": 19368, "August": 9468, "September": 6919, "October": 13330, "November": 6466, "December": 6632, "total": 131057}, {"country": "UAE", "January": 8572, "February": 12432, "March": 18616, "April": 14409, "May": 4693, "June": 1662, "July": 11266, "August": 7113, "September": 1614, "October": 13401, "November": 19044, "December": 3413, "total": 116235}],
    ];


    doughNutChartData = [
        [['Cinema', 12.5],['Digital', 12.5],['General Press', 12.5],['OOH', 12.5],
        ['Other', 12.5],['Radio', 12.5],['Television', 12.5],['Trade Publications', 12.5]],

        [['Cinema', 10],['Digital', 12],['General Press', 18],['OOH', 20],
        ['Other', 5],['Radio', 10],['Television', 20],['Trade Publications', 5]],

        [['Cinema', 25],['Digital', 25],['General Press', 5],['OOH', 10],
        ['Other', 8],['Radio', 12],['Television', 5],['Trade Publications', 10]]
    ];

    treeMapData =[
        [["Global", null, 0, 0],      ["Ash", "Global", 0, 0],      ["Ash1", "Ash", 252, 31],
        ["Pine", "Global", 0, 0],      ["Pine1", "Pine", 252, 21],
        ["Maple", "Global", 0, 0],      ["Maple1", "Maple", 52, 1],
        ["Holly", "Global", 0, 0],      ["Holly1", "Holly", 112, 11],
        ["Alder", "Global", 0, 0],      ["Alder1", "Alder", 172, 17],
        ["Juniper", "Global", 0, 0],      ["Juniper1", "Juniper", 152, 61],
        ["Birch", "Global", 0, 0],      ["Birch1", "Birch", 50, -31],
        ["Dogwood", "Global", 0, 0],      ["Dogwood1", "Dogwood", 170, 89],
        ["Willow", "Global", 0, 0],      ["Willow1", "Willow", 102, 57],
        ["Pear", "Global", 0, 0],      ["Pear1", "Pear", 200, 98],
        ["Beech", "Global", 0, 0],      ["Beech1", "Beech", 300, 23],
        ["Lime", "Global", 0, 0],      ["Lime1", "Lime", 400, 100],
        ],
        [["Global", null, 0, 0],      ["Ash", "Global", 0, 0],      ["Ash1", "Ash", 252, 31],
        ["Pine", "Global", 0, 0],      ["Pine1", "Pine", 122, 21],
        ["Maple", "Global", 0, 0],      ["Maple1", "Maple", 352, 1],
        ["Holly", "Global", 0, 0],      ["Holly1", "Holly", 152, 11],
        ["Alder", "Global", 0, 0],      ["Alder1", "Alder", 58, 17],
        ["Juniper", "Global", 0, 0],      ["Juniper1", "Juniper",80, 61],
        ["Birch", "Global", 0, 0],      ["Birch1", "Birch", 150, -31],
        ["Dogwood", "Global", 0, 0],      ["Dogwood1", "Dogwood", 70, 89],
        ["Willow", "Global", 0, 0],      ["Willow1", "Willow", 120, 57],
        ["Pear", "Global", 0, 0],      ["Pear1", "Pear", 100, 98],
        ["Beech", "Global", 0, 0],      ["Beech1", "Beech", 100, 23],
        ["Lime", "Global", 0, 0],      ["Lime1", "Lime", 140, 100],
        ],
        [["Global", null, 0, 0],      ["Ash", "Global", 0, 0],      ["Ash1", "Ash", 252, 31],
        ["Pine", "Global", 0, 0],      ["Pine1", "Pine", 112, 21],
        ["Maple", "Global", 0, 0],      ["Maple1", "Maple", 132, 1],
        ["Holly", "Global", 0, 0],      ["Holly1", "Holly", 52, 11],
        ["Alder", "Global", 0, 0],      ["Alder1", "Alder", 52, 17],
        ["Juniper", "Global", 0, 0],      ["Juniper1", "Juniper", 52, 61],
        ["Birch", "Global", 0, 0],      ["Birch1", "Birch", 50, -31],
        ["Dogwood", "Global", 0, 0],      ["Dogwood1", "Dogwood", 170, 89],
        ["Willow", "Global", 0, 0],      ["Willow1", "Willow", 120, 57],
        ["Pear", "Global", 0, 0],      ["Pear1", "Pear", 50, 98],
        ["Beech", "Global", 0, 0],      ["Beech1", "Beech", 10, 23],
        ["Lime", "Global", 0, 0],      ["Lime1", "Lime", 80, 100],
        ],
    ]
    getGaugeChartData(year: number){
        console.log(this.gaugeChartData[this.resolver(year)])
        return this.gaugeChartData[this.resolver(year)];
    }

    getLineChartData(year: number){
        return this.lineChartData[this.resolver(year)];

    }

    getDataTableData(year: number){
        return this.dataTableData[this.resolver(year)];
    }

    getDoughNutChartData(year: number){
        return this.doughNutChartData[this.resolver(year)];
    }

    getTreeMapData(year: number){
        return this.treeMapData[this.resolver(year)];
    }
}