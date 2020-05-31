var stateInfo =  [{ "STATE": "India", "STATE_CODE": "IN", "SCALE": 800, "CENTER": [83, 23] }, { "STATE": "Tamil Nadu", "STATE_CODE": "TN", "SCALE": 3500, "CENTER": [78, 11] }, { "STATE": "Andhra Pradesh", "STATE_CODE": "AP", "SCALE": 2500, "CENTER": [80.8, 16] }, { "STATE": "Arunachal Pradesh", "STATE_CODE": "AR", "SCALE": 2500, "CENTER": [94.7, 28] }, { "STATE": "Assam", "STATE_CODE": "AS", "SCALE": 2500, "CENTER": [92.9, 26] }, { "STATE": "Bihar", "STATE_CODE": "BR", "SCALE": 3000, "CENTER": [85, 25] }, { "STATE": "Chhattisgarh", "STATE_CODE": "CG", "SCALE": 3000, "CENTER": [81.8, 21] }, { "STATE": "Goa", "STATE_CODE": "GA", "SCALE": 15000, "CENTER": [74, 15.5] }, { "STATE": "Gujarat", "STATE_CODE": "GJ", "SCALE": 3000, "CENTER": [71, 22] }, { "STATE": "Haryana", "STATE_CODE": "HR", "SCALE": 5000, "CENTER": [76, 29.5] }, { "STATE": "Himachal Pradesh", "STATE_CODE": "HP", "SCALE": 5000, "CENTER": [77, 32] }, { "STATE": "Jammu and Kashmir", "STATE_CODE": "JK", "SCALE": 2000, "CENTER": [74.8, 32.7] }, { "STATE": "Jharkhand", "STATE_CODE": "JH", "SCALE": 2500, "CENTER": [85, 23.6] }, { "STATE": "Karnataka", "STATE_CODE": "KA", "SCALE": 2000, "CENTER": [75.7, 15] }, { "STATE": "Kerala", "STATE_CODE": "KL", "SCALE": 4000, "CENTER": [76, 10.8] }, { "STATE": "Madya Pradesh", "STATE_CODE": "MP", "SCALE": 2000, "CENTER": [78.6, 22.9] }, { "STATE": "Maharashtra", "STATE_CODE": "MH", "SCALE": 2000, "CENTER": [75.7, 19.7] }, { "STATE": "Manipur", "STATE_CODE": "MN", "SCALE": 4000, "CENTER": [93.9, 24.6] }, { "STATE": "Meghalaya", "STATE_CODE": "ML", "SCALE": 4000, "CENTER": [91, 25] }, { "STATE": "Mizoram", "STATE_CODE": "MZ", "SCALE": 4000, "CENTER": [92.9, 23] }, { "STATE": "Nagaland", "STATE_CODE": "NL", "SCALE": 5500, "CENTER": [94, 26] }, { "STATE": "Odisha", "STATE_CODE": "OD", "SCALE": 2500, "CENTER": [85, 20.9] }, { "STATE": "Punjab", "STATE_CODE": "PB", "SCALE": 4500, "CENTER": [75.2, 31] }, { "STATE": "Rajasthan", "STATE_CODE": "RJ", "SCALE": 2000, "CENTER": [74, 27] }, { "STATE": "Sikkim", "STATE_CODE": "SK", "SCALE": 8000, "CENTER": [88.5, 27.5] }, { "STATE": "Telangana", "STATE_CODE": "TS", "SCALE": 2000, "CENTER": [79, 18] }, { "STATE": "Tripura", "STATE_CODE": "TR", "SCALE": 10000, "CENTER": [91.9, 23.9] }, { "STATE": "Uttarakhand", "STATE_CODE": "UK", "SCALE": 100, "CENTER": [79, 30] }, { "STATE": "Uttar Pradesh", "STATE_CODE": "UP", "SCALE": 2500, "CENTER": [80.9, 27.8] }, { "STATE": "West Bengal", "STATE_CODE": "WB", "SCALE": 3500, "CENTER": [87.8, 24.5] }, { "STATE": "Andaman and Nicobar Islands", "STATE_CODE": "AN", "SCALE": 3000, "CENTER": [92.6, 10.5] }, { "STATE": "Chandigarh", "STATE_CODE": "CH", "SCALE": 16000, "CENTER": [76.7, 30.7] }, { "STATE": "Dadar and Nagar Haveli", "STATE_CODE": "DN", "SCALE": 22000, "CENTER": [73, 20.2] }, { "STATE": "Daman and Diu", "STATE_CODE": "DD", "SCALE": 10000, "CENTER": [72, 20] }, { "STATE": "Delhi", "STATE_CODE": "DL", "SCALE": 30000, "CENTER": [77.1, 28.7] }, { "STATE": "Lakshadeep", "STATE_CODE": "LD", "SCALE": 14000, "CENTER": [73, 11] }, { "STATE": "Puducherry", "STATE_CODE": "PY", "SCALE": 15000, "CENTER": [79.8, 11.5] }];

var posititvityrate = [{"group":"Lock Down 1.0","lpr":3.99552226,"StateFilter":"Andhra Pradesh"},{"group":"Lock Down 2.0","lpr":0.9505703422,"StateFilter":"Andhra Pradesh"},{"group":"Lock Down 3.0","lpr":0.5706561331,"StateFilter":"Andhra Pradesh"},{"group":"Lock Down 4.0","lpr":0,"StateFilter":"Andhra Pradesh"},{"group":"Lock Down 1.0","lpr":5.086056856,"StateFilter":"Jammu & Kashmir"},{"group":"Lock Down 2.0","lpr":1.684905333,"StateFilter":"Jammu & Kashmir"},{"group":"Lock Down 3.0","lpr":0.6953412139,"StateFilter":"Jammu & Kashmir"},{"group":"Lock Down 4.0","lpr":0,"StateFilter":"Jammu & Kashmir"}]

var lockdowndata = [{"group":"Lock Down 1.0","No of Confirmed Cases":464,"No of Deaths":9,"No of Tests":11613,"StateFilter":"Andhra Pradesh"},{"group":"Lock Down 2.0","No of Confirmed Cases":1080,"No of Deaths":24,"No of Tests":113616,"StateFilter":"Andhra Pradesh"},{"group":"Lock Down 3.0","No of Confirmed Cases":705,"No of Deaths":13,"No of Tests":123542,"StateFilter":"Andhra Pradesh"},{"group":"Lock Down 4.0","No of Confirmed Cases":1029,"No of Deaths":10,"No of Tests":114607,"StateFilter":"Andhra Pradesh"},{"group":"Lock Down 1.0","No of Confirmed Cases":263,"No of Deaths":4,"No of Tests":5171,"StateFilter":"Jammu & Kashmir"},{"group":"Lock Down 2.0","No of Confirmed Cases":388,"No of Deaths":4,"No of Tests":23028,"StateFilter":"Jammu & Kashmir"},{"group":"Lock Down 3.0","No of Confirmed Cases":420,"No of Deaths":4,"No of Tests":60402,"StateFilter":"Jammu & Kashmir"},{"group":"Lock Down 4.0","No of Confirmed Cases":981,"No of Deaths":15,"No of Tests":70128,"StateFilter":"Jammu & Kashmir"}]

var defaultgrpdata = [{"group":"Lock Down 1.0","No of Confirmed Cases":464,"No of Deaths":9,"No of Tests":11613,"StateFilter":"Andhra Pradesh"},{"group":"Lock Down 2.0","No of Confirmed Cases":1080,"No of Deaths":24,"No of Tests":113616,"StateFilter":"Andhra Pradesh"},{"group":"Lock Down 3.0","No of Confirmed Cases":705,"No of Deaths":13,"No of Tests":123542,"StateFilter":"Andhra Pradesh"},{"group":"Lock Down 4.0","No of Confirmed Cases":1029,"No of Deaths":10,"No of Tests":114607,"StateFilter":"Andhra Pradesh"}]

var defaultlinedata = [{"group":"Lock Down 1.0","lpr":3.99552226,"StateFilter":"Andhra Pradesh"},{"group":"Lock Down 2.0","lpr":0.9505703422,"StateFilter":"Andhra Pradesh"},{"group":"Lock Down 3.0","lpr":0.5706561331,"StateFilter":"Andhra Pradesh"},{"group":"Lock Down 4.0","lpr":0,"StateFilter":"Andhra Pradesh"}]

var defaultmap = [{"type":"Feature","properties":{"ST_NM":"Delhi","ST_VC":"DL"},"geometry":{"type":"Polygon","coordinates":[[[77.19846437906195,28.860098834336277],[77.20431077243643,28.860098834336277],[77.21015716581091,28.860098834336277],[77.2160035591854,28.8570662995668],[77.21892675587263,28.85403376479732],[77.22184995255988,28.851001230027844],[77.22184995255988,28.83887109094993],[77.22769634593436,28.829773486641493],[77.22477314924711,28.80854574325514],[77.20431077243643,28.80854574325514],[77.20431077243643,28.796415604177227],[77.20723396912368,28.79035053463827],[77.21015716581091,28.78731799986879],[77.21308036249815,28.784285465099313],[77.21892675587263,28.781252930329835],[77.22184995255988,28.781252930329835],[77.22477314924711,28.781252930329835],[77.22769634593436,28.781252930329835],[77.2306195426216,28.781252930329835],[77.23354273930885,28.781252930329835],[77.23354273930885,28.778220395560357],[77.22769634593436,28.775187860790876],[77.2306195426216,28.772155326021398],[77.23646593599608,28.76912279125192],[77.23938913268333,28.766090256482443],[77.24523552605781,28.756992652174006],[77.24815872274505,28.753960117404528],[77.25692831280676,28.750927582635047],[77.25985150949401,28.750927582635047],[77.26277470618126,28.74789504786557],[77.26277470618126,28.738797443557132],[77.2656979028685,28.735764908787655],[77.27154429624298,28.732732374018177],[77.27739068961746,28.732732374018177],[77.2803138863047,28.732732374018177],[77.28616027967918,28.7296998392487],[77.29200667305366,28.72363476970974],[77.29492986974091,28.717569700170785],[77.29492986974091,28.714537165401303],[77.29492986974091,28.708472095862348],[77.30369945980263,28.70543956109287],[77.30662265648988,28.708472095862348],[77.31246904986435,28.711504630631826],[77.3153922465516,28.711504630631826],[77.32708503330056,28.711504630631826],[77.33293142667505,28.711504630631826],[77.33293142667505,28.70543956109287],[77.3300082299878,28.69937449155391],[77.3300082299878,28.693309422014956],[77.33877782004953,28.687244352475997],[77.33585462336228,28.68117928293704],[77.33585462336228,28.67814674816756],[77.32708503330056,28.675114213398082],[77.32708503330056,28.672081678628604],[77.32708503330056,28.666016609089645],[77.32416183661331,28.656919004781212],[77.32416183661331,28.644788865703298],[77.32416183661331,28.64175633093382],[77.32123863992608,28.63872379616434],[77.32416183661331,28.63872379616434],[77.32708503330056,28.63569126139486],[77.3300082299878,28.629626191855905],[77.33585462336228,28.626593657086424],[77.34170101673676,28.626593657086424],[77.34462421342401,28.62052858754747],[77.34754741011125,28.61749605277799],[77.34754741011125,28.611430983239032],[77.34754741011125,28.602333378930595],[77.34462421342401,28.602333378930595],[77.33877782004953,28.599300844161117],[77.32708503330056,28.593235774622162],[77.32416183661331,28.593235774622162],[77.32123863992608,28.593235774622162],[77.31831544323883,28.59020323985268],[77.3153922465516,28.59020323985268],[77.30369945980263,28.578073100774766],[77.30369945980263,28.57504056600529],[77.30369945980263,28.559877892157896],[77.30369945980263,28.55684535738842],[77.31246904986435,28.544715218310504],[77.3153922465516,28.544715218310504],[77.32123863992608,28.538650148771545],[77.32416183661331,28.535617614002067],[77.3300082299878,28.529552544463108],[77.33585462336228,28.523487474924153],[77.34170101673676,28.517422405385194],[77.34462421342401,28.514389870615716],[77.34754741011125,28.511357335846238],[77.34754741011125,28.5022597315378],[77.34462421342401,28.50529226630728],[77.33877782004953,28.5022597315378],[77.33585462336228,28.499227196768324],[77.33293142667505,28.493162127229365],[77.32416183661331,28.490129592459887],[77.3153922465516,28.48406452292093],[77.30954585317711,28.48406452292093],[77.30662265648988,28.48709705769041],[77.29492986974091,28.490129592459887],[77.28908347636643,28.493162127229365],[77.2803138863047,28.490129592459887],[77.26862109955573,28.48406452292093],[77.26277470618126,28.48103198815145],[77.2510819194323,28.477999453381972],[77.24523552605781,28.474966918612495],[77.24231232937056,28.468901849073536],[77.23646593599608,28.46283677953458],[77.23646593599608,28.459804244765103],[77.23646593599608,28.453739175226143],[77.24231232937056,28.453739175226143],[77.24815872274505,28.447674105687188],[77.25400511611953,28.44160903614823],[77.25400511611953,28.435543966609274],[77.25400511611953,28.429478897070315],[77.2510819194323,28.42341382753136],[77.23354273930885,28.414316223222922],[77.22477314924711,28.411283688453445],[77.2160035591854,28.408251153683963],[77.20431077243643,28.408251153683963],[77.18969478900023,28.408251153683963],[77.17507880556401,28.402186084145008],[77.16338601881505,28.4173487579924],[77.16046282212781,28.42341382753136],[77.1516932320661,28.429478897070315],[77.14000044531713,28.432511431839792],[77.13415405194264,28.432511431839792],[77.12830765856816,28.43857650137875],[77.12246126519368,28.444641570917707],[77.11953806850643,28.450706640456666],[77.1166148718192,28.459804244765103],[77.11369167513195,28.465869314304058],[77.11076847844471,28.471934383843017],[77.11369167513195,28.477999453381972],[77.11369167513195,28.48406452292093],[77.1166148718192,28.48709705769041],[77.11369167513195,28.493162127229365],[77.09907569169575,28.499227196768324],[77.09615249500851,28.50529226630728],[77.0815365115723,28.514389870615716],[77.07861331488506,28.514389870615716],[77.0669205281361,28.50832480107676],[77.05815093807436,28.511357335846238],[77.05230454469988,28.514389870615716],[77.04353495463816,28.523487474924153],[77.02891897120196,28.52652000969363],[77.02599577451471,28.529552544463108],[77.017226184453,28.538650148771545],[77.00845659439126,28.535617614002067],[77.00553339770403,28.53258507923259],[77.00845659439126,28.52652000969363],[77.01430298776575,28.523487474924153],[77.02014938114023,28.517422405385194],[77.02014938114023,28.511357335846238],[77.01430298776575,28.50832480107676],[76.99968700432954,28.514389870615716],[76.98507102089334,28.517422405385194],[76.97922462751886,28.523487474924153],[76.95291585733368,28.50832480107676],[76.94414626727196,28.511357335846238],[76.932453480523,28.514389870615716],[76.9178374970868,28.50832480107676],[76.90614471033783,28.511357335846238],[76.90322151365058,28.511357335846238],[76.8973751202761,28.50529226630728],[76.88860553021438,28.50529226630728],[76.8827591368399,28.50832480107676],[76.88860553021438,28.517422405385194],[76.88568233352714,28.523487474924153],[76.8681431534037,28.535617614002067],[76.86521995671644,28.541682683541023],[76.847680776593,28.55078028784946],[76.84183438321851,28.578073100774766],[76.84475757990576,28.587170705083203],[76.85937356334196,28.584138170313725],[76.86521995671644,28.587170705083203],[76.87106635009093,28.59626830939164],[76.88860553021438,28.632658726625383],[76.90322151365058,28.626593657086424],[76.90614471033783,28.626593657086424],[76.91491430039954,28.632658726625383],[76.92076069377403,28.632658726625383],[76.932453480523,28.623561122316946],[76.93537667721023,28.623561122316946],[76.94414626727196,28.632658726625383],[76.92660708714851,28.647821400472775],[76.92660708714851,28.650853935242253],[76.932453480523,28.662984074320168],[76.93829987389748,28.669049143859127],[76.95291585733368,28.669049143859127],[76.95583905402093,28.672081678628604],[76.95583905402093,28.67814674816756],[76.95876225070816,28.68421181770652],[76.95876225070816,28.690276887245474],[76.96460864408265,28.693309422014956],[76.96460864408265,28.696341956784433],[76.96460864408265,28.69937449155391],[76.96168544739541,28.70543956109287],[76.94999266064644,28.711504630631826],[76.96168544739541,28.732732374018177],[76.95876225070816,28.735764908787655],[76.96168544739541,28.741829978326614],[76.95876225070816,28.74486251309609],[76.9470694639592,28.753960117404528],[76.95583905402093,28.76912279125192],[76.95291585733368,28.772155326021398],[76.95291585733368,28.781252930329835],[76.95291585733368,28.79035053463827],[76.9470694639592,28.799448138946705],[76.9470694639592,28.805513208485664],[76.95291585733368,28.8146108127941],[76.95876225070816,28.81157827802462],[76.96460864408265,28.8146108127941],[76.9675318407699,28.823708417102534],[76.97045503745713,28.826740951872015],[76.97922462751886,28.820675882333056],[76.98507102089334,28.820675882333056],[76.99091741426781,28.83280602141097],[76.99384061095506,28.83280602141097],[76.99968700432954,28.83280602141097],[77.017226184453,28.829773486641493],[77.02891897120196,28.83280602141097],[77.03476536457643,28.829773486641493],[77.04061175795093,28.83280602141097],[77.0464581513254,28.847968695258363],[77.06107413476161,28.869196438644714],[77.07569011819781,28.869196438644714],[77.0815365115723,28.875261508183673],[77.08738290494678,28.87829404295315],[77.09322929832126,28.869196438644714],[77.11076847844471,28.866163903875236],[77.1166148718192,28.86313136910576],[77.11953806850643,28.860098834336277],[77.14000044531713,28.860098834336277],[77.1458468386916,28.85403376479732],[77.1458468386916,28.847968695258363],[77.14292364200436,28.83887109094993],[77.14877003537885,28.835838556180448],[77.1516932320661,28.835838556180448],[77.16046282212781,28.841903625719407],[77.16923241218953,28.851001230027844],[77.17507880556401,28.85403376479732],[77.19261798568746,28.8570662995668],[77.19846437906195,28.860098834336277]]]}}]
