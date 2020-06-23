const categoryList = [
	{
		id: 0,
		cate_name: '推荐分类',
		children:[
			{
				id:0,
				cate_name:'手机',
				pic:'https://img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png'
			},
			{
				id:1,
				cate_name:'全面屏手机',
				pic:'https://img20.360buyimg.com/focus/s140x140_jfs/t1/86638/37/11918/19572/5e3e4307E7606f742/0210ac72c0d9275e.jpg'
			},
			{
				id:2,
				cate_name:'充电宝',
				pic:'https://img10.360buyimg.com/focus/s140x140_jfs/t1/106781/8/11928/23561/5e3e833fE92c281f5/72b834ead18b6462.jpg'
			},
			{
				id:3,
				cate_name:'体温计',
				pic:'https://img12.360buyimg.com/focus/s140x140_jfs/t1/96627/6/11719/15770/5e3e83b6E05b80eea/76b39555bc2d2a89.jpg'
			},
			{
				id:4,
				cate_name:'中医保健',
				pic:'https://img11.360buyimg.com/focus/s140x140_jfs/t1/99797/24/11893/15941/5e3e841aE2b32361d/63dcf9162ec4e1f4.jpg'
			},
			{
				id:5,
				cate_name:'调节免疫',
				pic:'https://img13.360buyimg.com/focus/s140x140_jfs/t1/109041/23/5605/14288/5e3e848bE289e1d01/8b8af78cfeda0e5e.jpg'
			},
			{
				id:6,
				cate_name:'投影机',
				pic:'https://img11.360buyimg.com/focus/s140x140_jfs/t1/97873/26/11984/16170/5e3e878eE3d6f29d8/820c61d6be7faf12.jpg'
			},
		]
	},
	{
		id: 1,
		cate_name: '图书文娱',
		children:[
			{
				id:0,
				cate_name:'轻薄本',
				pic:'https://img13.360buyimg.com/focus/s140x140_jfs/t11071/195/2462134264/9117/cd0688bf/5a17ba79N18b9f3d4.png'
			},
			{
				id:1,
				cate_name:'游戏本',
				pic:'https://img30.360buyimg.com/focus/s140x140_jfs/t11155/36/2330310765/10690/eb6754c3/5a17ba96N49561fea.png'
			},
			{
				id:2,
				cate_name:'机械键盘',
				pic:'https://img12.360buyimg.com/focus/s140x140_jfs/t12304/245/965858782/6481/37cb5a9b/5a17ba5aN0406a1b5.jpg'
			},
		]
	},
	{
		id: 2,
		cate_name: '京东超市',
		children:[
			{
				id:0,
				cate_name:'纸品湿巾',
				pic:'https://img20.360buyimg.com/focus/s140x140_jfs/t13684/103/181232450/2817/1bd36d3d/5a057f17Nc76b625d.jpg'
			},
			{
				id:1,
				cate_name:'衣物清洁',
				pic:'https://img10.360buyimg.com/focus/s140x140_jfs/t12136/32/190594635/3030/39a660be/5a057ef3N4b20576c.jpg'
			},
			{
				id:2,
				cate_name:'洗发护发',
				pic:'https://img12.360buyimg.com/focus/s140x140_jfs/t12046/51/196865136/2542/dd0cb394/5a057eeaNe24e73fb.jpg'
			},
		]
	},
	{
		id: 3,
		cate_name: '国际名牌',
		children:[
			{
				id:0,
				cate_name:'夹克',
				pic:'https://img30.360buyimg.com/focus/s140x140_jfs/t17449/23/1286271766/3527/870ce296/5ac4780cN6087feb5.jpg'
			},
			{
				id:1,
				cate_name:'T恤',
				pic:'https://img12.360buyimg.com/focus/s140x140_jfs/t19312/140/1294064569/4871/1c61d372/5ac47812N52823c3e.jpg'
			},
			{
				id:2,
				cate_name:'针织衫',
				pic:'https://img30.360buyimg.com/focus/s140x140_jfs/t19783/251/1331277260/4287/bb458049/5ac4781bN48dc86e1.jpg'
			},
		]
	},
	{
		id: 4,
		cate_name: '奢侈品',
		children:[
			{
				id:0,
				cate_name:'工艺摆件',
				pic:'https://img12.360buyimg.com/focus/s140x140_jfs/t12553/278/1342716268/12724/72f04f28/5a1eaacaNa62b05d7.jpg'
			},
			{
				id:1,
				cate_name:'创意礼品',
				pic:'https://img12.360buyimg.com/focus/s140x140_jfs/t12043/267/1384118283/12121/7fc54eea/5a1eaadfNc6daa4ab.jpg'
			},
			{
				id:2,
				cate_name:'婚庆节庆',
				pic:'https://img30.360buyimg.com/focus/s140x140_jfs/t14872/337/210251365/7637/e36a7113/5a2657ceNa1d0e2d8.jpg'
			},
		]
	},
	{
		id: 5,
		cate_name: '京东国际',
		children:[
			{
				id:0,
				cate_name:'GUCCI',
				pic:'https://img11.360buyimg.com/focus/s140x140_jfs/t13192/35/337607167/1767/134aedaa/5a096448N61d316de.jpg'
			},
			{
				id:1,
				cate_name:'COACH',
				pic:'https://img12.360buyimg.com/focus/s140x140_jfs/t12229/320/352677721/2166/291bc543/5a096456Ne62331f3.jpg'
			},
			{
				id:2,
				cate_name:'Armani',
				pic:'https://img10.360buyimg.com/focus/s140x140_jfs/t12340/261/345415853/3124/a40e053f/5a09627eN02dccb80.jpg'
			},
		]
	},
	{
		id: 6,
		cate_name: '唯品会',
		children:[
			{
				id:0,
				cate_name:'油画',
				pic:'https://img20.360buyimg.com/focus/s140x140_jfs/t15517/1/2397411512/6493/93b84110/5aa65089N0a8e1b95.jpg'
			},
			{
				id:1,
				cate_name:'版画',
				pic:'https://img30.360buyimg.com/focus/s140x140_jfs/t17182/202/775604307/4147/6abc2305/5aa65084N7ebb4655.jpg'
			},
			{
				id:2,
				cate_name:'水墨画',
				pic:'https://img20.360buyimg.com/focus/s140x140_jfs/t19015/290/771829127/3646/d2bbed6e/5aa65080N2b9d3045.jpg'
			},
		]
	},
	{
		id: 7,
		cate_name: '男装',
		children:[
			{
				id:0,
				cate_name:'油画',
				pic:'https://img20.360buyimg.com/focus/s140x140_jfs/t15517/1/2397411512/6493/93b84110/5aa65089N0a8e1b95.jpg'
			},
			{
				id:1,
				cate_name:'版画',
				pic:'https://img30.360buyimg.com/focus/s140x140_jfs/t17182/202/775604307/4147/6abc2305/5aa65084N7ebb4655.jpg'
			},
			{
				id:2,
				cate_name:'水墨画',
				pic:'https://img20.360buyimg.com/focus/s140x140_jfs/t19015/290/771829127/3646/d2bbed6e/5aa65080N2b9d3045.jpg'
			},
		]
	},
	{
		id: 8,
		cate_name: '女装',
		children:[
			{
				id:0,
				cate_name:'油画',
				pic:'https://img20.360buyimg.com/focus/s140x140_jfs/t15517/1/2397411512/6493/93b84110/5aa65089N0a8e1b95.jpg'
			},
			{
				id:1,
				cate_name:'版画',
				pic:'https://img30.360buyimg.com/focus/s140x140_jfs/t17182/202/775604307/4147/6abc2305/5aa65084N7ebb4655.jpg'
			},
			{
				id:2,
				cate_name:'水墨画',
				pic:'https://img20.360buyimg.com/focus/s140x140_jfs/t19015/290/771829127/3646/d2bbed6e/5aa65080N2b9d3045.jpg'
			},
		]
	},
	{
		id: 9,
		cate_name: '男鞋',
		children:[
			{
				id:0,
				cate_name:'油画',
				pic:'https://img20.360buyimg.com/focus/s140x140_jfs/t15517/1/2397411512/6493/93b84110/5aa65089N0a8e1b95.jpg'
			},
			{
				id:1,
				cate_name:'版画',
				pic:'https://img30.360buyimg.com/focus/s140x140_jfs/t17182/202/775604307/4147/6abc2305/5aa65084N7ebb4655.jpg'
			}
		]
	},
	{
		id: 10,
		cate_name: '女鞋',
		children:[
			{
				id:0,
				cate_name:'油画',
				pic:'https://img20.360buyimg.com/focus/s140x140_jfs/t15517/1/2397411512/6493/93b84110/5aa65089N0a8e1b95.jpg'
			},
			{
				id:1,
				cate_name:'版画',
				pic:'https://img30.360buyimg.com/focus/s140x140_jfs/t17182/202/775604307/4147/6abc2305/5aa65084N7ebb4655.jpg'
			}
		]
	},
	{
		id: 11,
		cate_name: '内衣搭配',
		children:[
			{
				id:0,
				cate_name:'油画',
				pic:'https://img20.360buyimg.com/focus/s140x140_jfs/t15517/1/2397411512/6493/93b84110/5aa65089N0a8e1b95.jpg'
			},
			{
				id:1,
				cate_name:'版画',
				pic:'https://img30.360buyimg.com/focus/s140x140_jfs/t17182/202/775604307/4147/6abc2305/5aa65084N7ebb4655.jpg'
			}
		]
	},
	{
		id: 12,
		cate_name: '箱包手袋',
		children:[
			{
				id:0,
				cate_name:'烹饪锅具',
				pic:'https://img12.360buyimg.com/focus/s140x140_jfs/t13981/209/1768932684/2335/18446a64/5a28dae5Nb2cf749e.jpg'
			},
			{
				id:1,
				cate_name:'厨房配件',
				pic:'https://img10.360buyimg.com/focus/s140x140_jfs/t13090/20/1798226817/3117/b05811f8/5a28dad9Ne5e8c4e3.jpg'
			}
		]
	},
	{
		id: 13,
		cate_name: '美妆护肤',
		children:[
			{
				id:0,
				cate_name:'枕芯',
				pic:'https://img11.360buyimg.com/focus/s140x140_jfs/t13243/92/1783782366/1555/166277a6/5a28d9e8N0b556b71.jpg'
			},
			{
				id:1,
				cate_name:'被子',
				pic:'https://img13.360buyimg.com/focus/s140x140_jfs/t14788/350/269750544/2075/1141c865/5a28d617N1dedd321.jpg'
			}
		]
	},
	{
		id: 14,
		cate_name: '个护清洁',
		children:[
			{
				id:0,
				cate_name:'枕芯',
				pic:'https://img11.360buyimg.com/focus/s140x140_jfs/t13243/92/1783782366/1555/166277a6/5a28d9e8N0b556b71.jpg'
			},
			{
				id:1,
				cate_name:'被子',
				pic:'https://img13.360buyimg.com/focus/s140x140_jfs/t14788/350/269750544/2075/1141c865/5a28d617N1dedd321.jpg'
			}
		]
	},
	{
		id: 15,
		cate_name: '钟表珠宝',
		children:[
			{
				id:0,
				cate_name:'枕芯',
				pic:'https://img11.360buyimg.com/focus/s140x140_jfs/t13243/92/1783782366/1555/166277a6/5a28d9e8N0b556b71.jpg'
			},
			{
				id:1,
				cate_name:'被子',
				pic:'https://img13.360buyimg.com/focus/s140x140_jfs/t14788/350/269750544/2075/1141c865/5a28d617N1dedd321.jpg'
			}
		]
	},
	{
		id: 16,
		cate_name: '手机数码',
		children:[
			{
				id:0,
				cate_name:'枕芯',
				pic:'https://img11.360buyimg.com/focus/s140x140_jfs/t13243/92/1783782366/1555/166277a6/5a28d9e8N0b556b71.jpg'
			},
			{
				id:1,
				cate_name:'被子',
				pic:'https://img13.360buyimg.com/focus/s140x140_jfs/t14788/350/269750544/2075/1141c865/5a28d617N1dedd321.jpg'
			}
		]
	},
	{
		id: 17,
		cate_name: '电脑办公',
		children:[
			{
				id:0,
				cate_name:'枕芯',
				pic:'https://img11.360buyimg.com/focus/s140x140_jfs/t13243/92/1783782366/1555/166277a6/5a28d9e8N0b556b71.jpg'
			},
			{
				id:1,
				cate_name:'被子',
				pic:'https://img13.360buyimg.com/focus/s140x140_jfs/t14788/350/269750544/2075/1141c865/5a28d617N1dedd321.jpg'
			}
		]
	},{
		id: 18,
		cate_name: '家用电器',
		children:[
			{
				id:0,
				cate_name:'枕芯',
				pic:'https://img11.360buyimg.com/focus/s140x140_jfs/t13243/92/1783782366/1555/166277a6/5a28d9e8N0b556b71.jpg'
			},
			{
				id:1,
				cate_name:'被子',
				pic:'https://img13.360buyimg.com/focus/s140x140_jfs/t14788/350/269750544/2075/1141c865/5a28d617N1dedd321.jpg'
			}
		]
	},
	{
		id: 19,
		cate_name: '食品生鲜',
		children:[
			{
				id:0,
				cate_name:'枕芯',
				pic:'https://img11.360buyimg.com/focus/s140x140_jfs/t13243/92/1783782366/1555/166277a6/5a28d9e8N0b556b71.jpg'
			},
			{
				id:1,
				cate_name:'被子',
				pic:'https://img13.360buyimg.com/focus/s140x140_jfs/t14788/350/269750544/2075/1141c865/5a28d617N1dedd321.jpg'
			}
		]
	},
	{
		id: 20,
		cate_name: '酒水饮料',
		children:[
			{
				id:0,
				cate_name:'枕芯',
				pic:'https://img11.360buyimg.com/focus/s140x140_jfs/t13243/92/1783782366/1555/166277a6/5a28d9e8N0b556b71.jpg'
			},
			{
				id:1,
				cate_name:'被子',
				pic:'https://img13.360buyimg.com/focus/s140x140_jfs/t14788/350/269750544/2075/1141c865/5a28d617N1dedd321.jpg'
			}
		]
	},
	{
		id: 21,
		cate_name: '母婴童装',
		children:[
			{
				id:0,
				cate_name:'枕芯',
				pic:'https://img11.360buyimg.com/focus/s140x140_jfs/t13243/92/1783782366/1555/166277a6/5a28d9e8N0b556b71.jpg'
			},
			{
				id:1,
				cate_name:'被子',
				pic:'https://img13.360buyimg.com/focus/s140x140_jfs/t14788/350/269750544/2075/1141c865/5a28d617N1dedd321.jpg'
			}
		]
	},
	{
		id: 22,
		cate_name: '玩具乐器',
		children:[
			{
				id:0,
				cate_name:'枕芯',
				pic:'https://img11.360buyimg.com/focus/s140x140_jfs/t13243/92/1783782366/1555/166277a6/5a28d9e8N0b556b71.jpg'
			},
			{
				id:1,
				cate_name:'被子',
				pic:'https://img13.360buyimg.com/focus/s140x140_jfs/t14788/350/269750544/2075/1141c865/5a28d617N1dedd321.jpg'
			}
		]
	},
	{
		id: 23,
		cate_name: '医药保健',
		children:[
			{
				id:0,
				cate_name:'枕芯',
				pic:'https://img11.360buyimg.com/focus/s140x140_jfs/t13243/92/1783782366/1555/166277a6/5a28d9e8N0b556b71.jpg'
			},
			{
				id:1,
				cate_name:'被子',
				pic:'https://img13.360buyimg.com/focus/s140x140_jfs/t14788/350/269750544/2075/1141c865/5a28d617N1dedd321.jpg'
			}
		]
	},{
		id: 24,
		cate_name: '计生情趣',
		children:[
			{
				id:0,
				cate_name:'枕芯',
				pic:'https://img11.360buyimg.com/focus/s140x140_jfs/t13243/92/1783782366/1555/166277a6/5a28d9e8N0b556b71.jpg'
			},
			{
				id:1,
				cate_name:'被子',
				pic:'https://img13.360buyimg.com/focus/s140x140_jfs/t14788/350/269750544/2075/1141c865/5a28d617N1dedd321.jpg'
			}
		]
	},{
		id: 25,
		cate_name: '户外运动',
		children:[
			{
				id:0,
				cate_name:'枕芯',
				pic:'https://img11.360buyimg.com/focus/s140x140_jfs/t13243/92/1783782366/1555/166277a6/5a28d9e8N0b556b71.jpg'
			},
			{
				id:1,
				cate_name:'被子',
				pic:'https://img13.360buyimg.com/focus/s140x140_jfs/t14788/350/269750544/2075/1141c865/5a28d617N1dedd321.jpg'
			}
		]
	},
	{
		id: 26,
		cate_name: '礼品鲜花',
		children:[
			{
				id:0,
				cate_name:'枕芯',
				pic:'https://img11.360buyimg.com/focus/s140x140_jfs/t13243/92/1783782366/1555/166277a6/5a28d9e8N0b556b71.jpg'
			},
			{
				id:1,
				cate_name:'被子',
				pic:'https://img13.360buyimg.com/focus/s140x140_jfs/t14788/350/269750544/2075/1141c865/5a28d617N1dedd321.jpg'
			}
		]
	},
	{
		id: 27,
		cate_name: '汽车生活',
		children:[
			{
				id:0,
				cate_name:'',
				pic:'https://img10.360buyimg.com/focus/s140x140_jfs/t14155/271/890296038/3841/f1adee7f/5a166fe1Nc6bd2f12.jpg'
			},
			{
				id:1,
				cate_name:'',
				pic:'https://img20.360buyimg.com/focus/s140x140_jfs/t13555/266/920169438/5641/35f6a82d/5a166fddNbc219f4f.jpg'
			},
			{
				id:2,
				cate_name:'',
				pic:'https://img20.360buyimg.com/focus/s140x140_jfs/t13396/174/918318627/7288/8990601c/5a166faeN7103ed89.jpg'
			},
			{
				id:3,
				cate_name:'',
				pic:'https://img11.360buyimg.com/focus/s140x140_jfs/t13630/187/903217858/6015/b1316f3c/5a166fb4N646089bb.jpg'
			}
			
		]
	},
	
	
]

export default categoryList