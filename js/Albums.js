// this file contains the data we need for the gallery
// The main object, "gallery" contains an array of album
// each album contains an array of photos 
// (plus a name and a thumbnail image)
// The photos contain an image src and some metadata

var gallery = {
	albums : [
		{
			name : "Prayer Day", 
			thumbnail : "images/prayer/prayer7.JPG",
			photos : [
				{	
					src : "images/prayer/prayer1.JPG",
					description : "Prayer Day"
				}, 
				{	
					src : "images/prayer/prayer2.JPG", 
					description : "Prayer Day"
				}, 
				{	
					src : "images/prayer/prayer3.JPG", 
					description : "Prayer Day"
				}, 
				{	
					src : "images/prayer/prayer4.JPG", 
					description : "Prayer Day"
				} 
			]
		},

		{
			name : "Price Giving Day", 
			thumbnail : "images/price/price8.JPG",
			photos : [
				{	
					src : "images/price/DSC_2697.JPG",
					description : "Price Giving Day"
				}, 
				{	
					src : "images/price/price2.JPG",
					description : "Price Giving Day"
				}, 
				{	
					src : "images/price/DSC_2347.JPG", 
					description : "Price Giving Day"
				}, 
				{	
					src : "images/price/DSC_2897.JPG",
					description : "Price Giving Day"
				} 
			]
		},
		{
			name : "Sports Day", 
			thumbnail : "images/sports/sport.JPG",
			photos : [
				{	
					src : "images/sports/sport.JPG",
					description : "Sports Day"
				}, 
				{	
					src : "images/sports/IMG-20160617-WA0017.jpg", 
					description : "Sports Day"
				}, 
				{	
					src : "images/sports/sport2.jpg", 
					description : "Sports Day"
				}, 
				{	
					src : "images/sports/jga-2.jpg", 
					description : "Sports Day"
				} 
			]
		},
		{
			name : "Trips", 
			thumbnail : "images/trips_album/IMG-20160619-WA0082.jpg",
			photos : [
				{	
					src : "images/trips_album/IMG-20160617-WA0012.jpg", 
					description : "Trips"
				}, 
				{	
					src : "images/trips_album/IMG-20160619-WA0082.jpg", 
					description : "Trips"
				}, 
				{	
					src : "images/trips_album/IMG-20170421-WA0019.jpg", 
					description : "Trips"
				}, 
				{	
					src : "images/trips_album/IMG-20170421-WA0043.jpg",
					description : "Trips"
				} 
			]
		}

	], 


	teachers : [

        {
			name : "Lower", 
			thumbnail : "images/teachers/Lower/IMG_2687.JPG",
			lower : [
				{	
					src : "images/teachers/Lower/Faith.JPG", 
					description : "Tr. Faith"
				}, 
				{	
					src : "images/teachers/Lower/IMG_2647.JPG",
					description : "Our Teacher"
				},
				 
				{	
					src : "images/teachers/Lower/IMG_2652.JPG", 
					description : "Our Teacher"
				},
				{	
					src : "images/teachers/Lower/IMG_2655.JPG", 
					description : "Our Teacher"
				},
				{	
					src : "images/teachers/Lower/IMG_2656.JPG", 
					description : "Our Teacher"
				},
				{	
					src : "images/teachers/Lower/IMG_2658.JPG", 
					description : "Our Teacher"
				},
				{	
					src : "images/teachers/Lower/IMG_2661.JPG", 
					description : "Our Teacher"
				},
				{	
					src : "images/teachers/Lower/IMG_2663.JPG", 
					description : "Our Teacher"
				},
				{	
					src : "images/teachers/Lower/IMG_2666.JPG", 
					description : "Our Teacher"
				},
				{	
					src : "images/teachers/Lower/IMG_2670.JPG",
					description : "Our Teacher"
				},
				{	
					src : "images/teachers/Lower/Joyce.JPG",
					description : "Our Teacher"
				},
				{	
					src : "images/teachers/Lower/rosemary.JPG",
					description : "Tr. Rosemary"
				},
				{	
					src : "images/teachers/Lower/Christine.JPG",
					description : "Tr. Christine"
				}  
			]
		},
		
		{
			name : "Senior", 
			thumbnail : "images/teachers/Senior/seniorgroup.JPG",
			senior: [
				{	
					src : "images/teachers/Senior/Caroline.JPG", 
					description : "Tr. Caroline"
				}, 
				{	
					src : "images/teachers/Senior/Dickson (2).JPG",
					description : "Tr. Dickson"
				},
				 
				{	
					src : "images/teachers/Senior/Dominic.JPG", 
					description : "Tr. Dominic"
				},
				{	
					src : "images/teachers/Senior/Emily.JPG", 
					description : "Tr. Emily"
				},
				{	
					src : "images/teachers/Senior/Fred.JPG", 
					description : "Tr. Fred"
				},
				{	
					src : "images/teachers/Senior/George2.JPG", 
					description : "Tr. George"
				},
				{	
					src : "images/teachers/Senior/Gideon .JPG", 
					description : "Tr. Gideon"
				},
				{	
					src : "images/teachers/Senior/Jacinta.JPG", 
					description : "Tr. Jacinta"
				},
				{	
					src : "images/teachers/Senior/Joyce.JPG", 
					description : "Tr. Joyce"
				},
				{	
					src : "images/teachers/Senior/Judith.JPG",
					description : "Tr. Judith"
				},
				{	
					src : "images/teachers/Senior/Mary.JPG",
					description : "Tr. Mary"
				},
				{	
					src : "images/teachers/Senior/mule.JPG",
					description : "Tr. Mule"
				},
				{	
					src : "images/teachers/Senior/Patrick.JPG",
					description : "Tr. Patrick"
				} ,
				{	
					src : "images/teachers/Senior/Philomena.JPG",
					description : "Tr. Philomena"
				} ,
				{	
					src : "images/teachers/Senior/steve.JPG",
					description : "Tr. Steve"
				} ,
				{	
					src : "images/teachers/Senior/William.JPG",
					description : "Tr. William"
				}
				  
			]
		},

		{
			name : "Middle", 
			thumbnail : "images/teachers/Middle/midgroup.JPG",
			middle : [
				{	
					src : "images/teachers/Middle/Catherine.JPG", 
					description : "Tr. Faith"
				}, 
				{	
					src : "images/teachers/Middle/Cecilia.JPG",
					description : "Tr.Cecilia"
				},
				 
				{	
					src : "images/teachers/Middle/deborah2.JPG", 
					description : "Tr. Deborah"
				},
				{	
					src : "images/teachers/Middle/Denis.JPG", 
					description : "Tr. Denis"
				},
				{	
					src : "images/teachers/Middle/Edna.JPG", 
					description : "Tr. Edna"
				},
				{	
					src : "images/teachers/Middle/Elizabeth.JPG", 
					description : "Tr. Elizabeth"
				},
				{	
					src : "images/teachers/Middle/irene.JPG", 
					description : "Tr. Irene"
				},
				{	
					src : "images/teachers/Middle/maureen.JPG", 
					description : "Tr. Maureen"
				},
				{	
					src : "images/teachers/Middle/Mercy.JPG", 
					description : "Tr. Mercy"
				},
				{	
					src : "images/teachers/Middle/moses.JPG",
					description : "Tr. Moses"
				},
				{	
					src : "images/teachers/Middle/Peninnah.JPG",
					description : "Tr. Peninnah"
				}
			 
			]
		},
		{
			name : "KG", 
			thumbnail : "images/teachers/KG/Group.JPG",
			kg : [
				{	
					src : "images/teachers/KG/Agnes.JPG", 
					description : "Tr. Agnes"
				}, 
				{	
					src : "images/teachers/KG/Ann.JPG",
					description : "Tr.Ann"
				},
				 
				{	
					src : "images/teachers/KG/Consolata.JPG", 
					description : "Tr. Consolata"
				},
				{	
					src : "images/teachers/KG/Eunice.JPG", 
					description : "Tr. Eunice"
				},
				{	
					src : "images/teachers/KG/Jane.JPG", 
					description : "Tr. Jane"
				},
				{	
					src : "images/teachers/KG/Lydia.JPG", 
					description : "Tr. Lydia"
				},
				{	
					src : "images/teachers/KG/Marion .JPG", 
					description : "Tr. Marion "
				},
				{	
					src : "images/teachers/KG/mary.JPG", 
					description : "Tr. Mary"
				},
				{	
					src : "images/teachers/KG/Mildred.JPG", 
					description : "Tr. Mildred"
				},
				{	
					src : "images/teachers/KG/pauline.JPG",
					description : "Tr. Pauline"
				},
				{	
					src : "images/teachers/KG/Purity.JPG",
					description : "Tr. Purity"
				},
				{	
					src : "images/teachers/KG/Rose.JPG",
					description : "Tr. Rose"
				},
				{	
					src : "images/teachers/KG/Veronica.JPG",
					description : "Tr. Veronica"
				},
				{	
					src : "images/teachers/KG/Winnie.JPG",
					description : "Tr. Winnie"
				}
			 
			]
		},
		{
			name : "staff", 
			thumbnail : "images/teachers/staff/Non_Teaching.JPG",
			staff : [
				{	
					src : "images/teachers/staff/Ann.JPG", 
					description : " Ann Muthoni"
				}, 
				{	
					src : "images/teachers/staff/Anthony.JPG",
					description : " Anthony Mutiso"
				},
				 
				{	
					src : "images/teachers/staff/Betty.JPG", 
					description : " Betty Asila"
				},
				
				{	
					src : "images/teachers/staff/Hannah.JPG", 
					description : "Hannah"
				},
				{	
					src : "images/teachers/staff/IMG_1064.JPG", 
					description : "Staff"
				},
				{	
					src : "images/teachers/staff/Jeff.JPG", 
					description : " Jeff Mbiti"
				},
				{	
					src : "images/teachers/staff/Jill.JPG", 
					description : " Jill Wanjiku"
				},
				{	
					src : "images/teachers/staff/John.JPG", 
					description : " John Mutunga"
				},
				
				{	
					src : "images/teachers/staff/Patrick.JPG",
					description : "Patrick Ngaruri"
				},
				{	
					src : "images/teachers/staff/Rita.JPG",
					description : "Rita Oludhe"
				},
				{	
					src : "images/teachers/staff/Joyce.JPG",
					description : "Joyce Njeru"
				},
				{	
					src : "images/teachers/staff/Judy.JPG",
					description : "Judy Kiilu"
				},
				{	
					src : "images/teachers/staff/patrick.png", 
					description : "Patrick"
				},
				{	
					src : "images/teachers/staff/Kimei.png", 
					description : "Kimei "
				},
				{	
					src : "images/teachers/staff/kingori.png", 
					description : "kingori "
				},
				{	
					src : "images/teachers/staff/Thomas.png",
					description : "Thomas "
				},
				{	
					src : "images/teachers/staff/Edward.png", 
					description : "Edward"
				},
				{	
					src : "images/teachers/staff/Frankline.png", 
					description : "Frankline"
				},
				{	
					src : "images/teachers/staff/James.png", 
					description : "James"
				},
				{	
					src : "images/teachers/staff/Timothy.png",
					description : "Timothy"
				}
			 
			]
		}
	]
};