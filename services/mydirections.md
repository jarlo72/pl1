# My personal directions request

First, explore the various options through the Directions API https://developers.google.com/maps/documentation/directions/get-directions. 

Be creative and use multiple parameters from the API documentation to earn a top grade. The rubric is listed in the bottom of the MarkDown document. 

> Tip: Can't make changes? GitHub previews MD documents by default (read-only). Start editing to make the changes for your URL and JSON response below

## Directions URL

```
https://maps.googleapis.com/maps/api/directions/json?origin=place_id%3AChIJ816IxAb0K4gRYpbXJOgIt1Y&destination=place_id%3AChIJp1-W86X0K4gR_GMElbM3KYQ&waypoints=optimize%3Atrue%7Cplace_id%3AChIJ325EafTzK4gR0GbMvhc3XTs%7Cvia%3Aplace_id%3AChIJxRcgup30K4gRuw-lykuaMmo%7Cvia%3Aplace_id%3AChIJbXnSHSrzK4gRNvJAYl8_Rv8&avoid=highways&mode=bicycling&key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE
```

## Next paste the full JSON response to this query here:

```JSON
{
   "geocoded_waypoints" : [
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJ816IxAb0K4gRYpbXJOgIt1Y",
         "types" : [ "establishment", "food", "point_of_interest", "restaurant" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJ325EafTzK4gR0GbMvhc3XTs",
         "types" : [ "establishment", "food", "point_of_interest", "restaurant" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJxRcgup30K4gRuw-lykuaMmo",
         "types" : [ "establishment", "food", "point_of_interest", "restaurant" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJbXnSHSrzK4gRNvJAYl8_Rv8",
         "types" : [ "establishment", "food", "point_of_interest", "restaurant" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJp1-W86X0K4gR_GMElbM3KYQ",
         "types" : [ "establishment", "food", "point_of_interest", "restaurant" ]
      }
   ],
   "routes" : [
      {
         "bounds" : {
            "northeast" : {
               "lat" : 43.4812711,
               "lng" : -80.4662903
            },
            "southwest" : {
               "lat" : 43.4563735,
               "lng" : -80.5373834
            }
         },
         "copyrights" : "Map data ©2022 Google",
         "legs" : [
            {
               "distance" : {
                  "text" : "1.1 km",
                  "value" : 1102
               },
               "duration" : {
                  "text" : "5 mins",
                  "value" : 312
               },
               "end_address" : "247 King St N, Waterloo, ON N2J 2Y8, Canada",
               "end_location" : {
                  "lat" : 43.476221,
                  "lng" : -80.5259805
               },
               "start_address" : "160 University Ave W, Waterloo, ON N2L 3E9, Canada",
               "start_location" : {
                  "lat" : 43.4720342,
                  "lng" : -80.5373834
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "47 m",
                        "value" : 47
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 8
                     },
                     "end_location" : {
                        "lat" : 43.4717436,
                        "lng" : -80.5370063
                     },
                     "html_instructions" : "Head \u003cb\u003esoutheast\u003c/b\u003e toward \u003cb\u003eUniversity Ave W\u003c/b\u003e",
                     "polyline" : {
                        "points" : "esihGr}pjNBCB?B?@?DQDGJIBCBEJW"
                     },
                     "start_location" : {
                        "lat" : 43.4720342,
                        "lng" : -80.5373834
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.0 km",
                        "value" : 1013
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 257
                     },
                     "end_location" : {
                        "lat" : 43.4758599,
                        "lng" : -80.5258235
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eUniversity Ave W\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "kqihGh{pjNKWo@wBo@mBIa@Ic@Mo@o@gCa@aBa@uAu@gC_@eBw@gC]sAQq@[oAK_@e@iB]sAGMKc@Ok@[mAk@uBMg@GYa@}AYkAMe@[kAUu@Mi@"
                     },
                     "start_location" : {
                        "lat" : 43.4717436,
                        "lng" : -80.5370063
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "42 m",
                        "value" : 42
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 47
                     },
                     "end_location" : {
                        "lat" : 43.476221,
                        "lng" : -80.5259805
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the left\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ckjhGjunjNa@TMBSDC?"
                     },
                     "start_location" : {
                        "lat" : 43.4758599,
                        "lng" : -80.5258235
                     },
                     "travel_mode" : "BICYCLING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            },
            {
               "distance" : {
                  "text" : "15.6 km",
                  "value" : 15554
               },
               "duration" : {
                  "text" : "57 mins",
                  "value" : 3424
               },
               "end_address" : "869 Victoria St N, Kitchener, ON N2B 3C3, Canada",
               "end_location" : {
                  "lat" : 43.4631745,
                  "lng" : -80.4662903
               },
               "start_address" : "247 King St N, Waterloo, ON N2J 2Y8, Canada",
               "start_location" : {
                  "lat" : 43.476221,
                  "lng" : -80.5259805
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 95
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 13
                     },
                     "end_location" : {
                        "lat" : 43.476495,
                        "lng" : -80.52503129999999
                     },
                     "html_instructions" : "Head \u003cb\u003enorth\u003c/b\u003e toward \u003cb\u003eKing St N\u003c/b\u003e",
                     "polyline" : {
                        "points" : "kmjhGjvnjNSBC?CACGCMOiCC_@"
                     },
                     "start_location" : {
                        "lat" : 43.476221,
                        "lng" : -80.5259805
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.3 km",
                        "value" : 1275
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 325
                     },
                     "end_location" : {
                        "lat" : 43.46519230000001,
                        "lng" : -80.5223809
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eKing St N\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "cojhGlpnjNbAMz@IlAQb@If@G`@ENA^ElAOvAQ`AMhAQzBWx@I~@OvBYhBUbC]|AUhAQ`Dk@fDk@~Ck@bDk@tAUnAW"
                     },
                     "start_location" : {
                        "lat" : 43.476495,
                        "lng" : -80.52503129999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "2.1 km",
                        "value" : 2109
                     },
                     "duration" : {
                        "text" : "9 mins",
                        "value" : 514
                     },
                     "end_location" : {
                        "lat" : 43.4718623,
                        "lng" : -80.4983869
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eErb St E\u003c/b\u003e (signs for \u003cb\u003eRegional Road 9\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eErb Street\u003c/b\u003e)",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "mhhhGz_njNOuBMuBY{Da@mFIgAMgCYoC_@uAi@kB[aA[cAy@uByA{Ci@gAaAoBWu@Om@SoAMq@g@iCYmAMk@gB{HuDgPMo@COIYAIIa@Ia@Ga@CQE_@CQAQA_@Am@F_D?_ACe@E_@Qw@}@iBs@mBk@}B_@iBKeAM{AACMaBKqAGo@QqA"
                     },
                     "start_location" : {
                        "lat" : 43.46519230000001,
                        "lng" : -80.5223809
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 164
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 24
                     },
                     "end_location" : {
                        "lat" : 43.4706903,
                        "lng" : -80.49716289999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eTerrystone Walk\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "crihG|iijNb@[POp@}@nA_Bp@k@"
                     },
                     "start_location" : {
                        "lat" : 43.4718623,
                        "lng" : -80.4983869
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "32 m",
                        "value" : 32
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 4
                     },
                     "end_location" : {
                        "lat" : 43.470793,
                        "lng" : -80.4967953
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eCardinal Crescent S\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "yjihGfbijNSgA"
                     },
                     "start_location" : {
                        "lat" : 43.4706903,
                        "lng" : -80.49716289999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "36 m",
                        "value" : 36
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 5
                     },
                     "end_location" : {
                        "lat" : 43.4707207,
                        "lng" : -80.4964851
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eCardinal Crescent S\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "mkihG~_ijNNSHM@G?GAECCGA"
                     },
                     "start_location" : {
                        "lat" : 43.470793,
                        "lng" : -80.4967953
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 145
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 20
                     },
                     "end_location" : {
                        "lat" : 43.469901,
                        "lng" : -80.4951262
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "_kihG`~hjNLYPc@NUr@kADGd@m@FKBKFa@"
                     },
                     "start_location" : {
                        "lat" : 43.4707207,
                        "lng" : -80.4964851
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 101
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 15
                     },
                     "end_location" : {
                        "lat" : 43.4690078,
                        "lng" : -80.49494539999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e toward \u003cb\u003eUnion St\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "{eihGpuhjN|@Cl@IPCr@Q"
                     },
                     "start_location" : {
                        "lat" : 43.469901,
                        "lng" : -80.4951262
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.9 km",
                        "value" : 909
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 140
                     },
                     "end_location" : {
                        "lat" : 43.4712516,
                        "lng" : -80.484364
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eUnion St\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "i`ihGlthjNWeAi@oBeAcEmF_TSy@SmAMmAOgBC_AAkDB}FAU?mF"
                     },
                     "start_location" : {
                        "lat" : 43.4690078,
                        "lng" : -80.49494539999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 306
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 80
                     },
                     "end_location" : {
                        "lat" : 43.4685037,
                        "lng" : -80.48430279999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eLancaster St W\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "inihGfrfjNpKEzAEv@?"
                     },
                     "start_location" : {
                        "lat" : 43.4712516,
                        "lng" : -80.484364
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 106
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 22
                     },
                     "end_location" : {
                        "lat" : 43.4684882,
                        "lng" : -80.4856125
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eElizabeth St\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "c}hhGzqfjN?bB@p@?nB"
                     },
                     "start_location" : {
                        "lat" : 43.4685037,
                        "lng" : -80.48430279999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 307
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 44
                     },
                     "end_location" : {
                        "lat" : 43.471245,
                        "lng" : -80.4856552
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eBond St\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "a}hhG`zfjNwBB{DDcB?kB?a@?"
                     },
                     "start_location" : {
                        "lat" : 43.4684882,
                        "lng" : -80.4856125
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.8 km",
                        "value" : 804
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 145
                     },
                     "end_location" : {
                        "lat" : 43.4690078,
                        "lng" : -80.49494539999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eUnion St\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "gnihGjzfjNC|F@jDB~@NfBLlARlARx@lF~SdAbEh@nBVdA"
                     },
                     "start_location" : {
                        "lat" : 43.471245,
                        "lng" : -80.4856552
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 101
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 20
                     },
                     "end_location" : {
                        "lat" : 43.469901,
                        "lng" : -80.4951262
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "i`ihGlthjNs@PQBm@H}@B"
                     },
                     "start_location" : {
                        "lat" : 43.4690078,
                        "lng" : -80.49494539999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 145
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 27
                     },
                     "end_location" : {
                        "lat" : 43.4707207,
                        "lng" : -80.4964851
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e toward \u003cb\u003eCardinal Crescent S\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "{eihGpuhjNG`@CJGJe@l@EFs@jAOTQb@MX"
                     },
                     "start_location" : {
                        "lat" : 43.469901,
                        "lng" : -80.4951262
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "36 m",
                        "value" : 36
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 7
                     },
                     "end_location" : {
                        "lat" : 43.470793,
                        "lng" : -80.4967953
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eCardinal Crescent S\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "_kihG`~hjNF@BB@D?FAFILOR"
                     },
                     "start_location" : {
                        "lat" : 43.4707207,
                        "lng" : -80.4964851
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 216
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 63
                     },
                     "end_location" : {
                        "lat" : 43.4699439,
                        "lng" : -80.4992039
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eCardinal Crescent S\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "mkihG~_ijNRfA^xAL`@t@vCp@bC"
                     },
                     "start_location" : {
                        "lat" : 43.470793,
                        "lng" : -80.4967953
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 330
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 105
                     },
                     "end_location" : {
                        "lat" : 43.4724238,
                        "lng" : -80.5013127
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eBluevale St S\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "cfihG~nijNON[\\y@z@y@x@qBvB]\\}@|@SRULYF}@B"
                     },
                     "start_location" : {
                        "lat" : 43.4699439,
                        "lng" : -80.4992039
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.0 km",
                        "value" : 962
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 209
                     },
                     "end_location" : {
                        "lat" : 43.4701417,
                        "lng" : -80.51267659999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eBridgeport Rd E\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "suihGd|ijNPxIPxIx@zGp@lFZ~BNlAj@`EHh@Nz@RbANp@?DRz@l@zBLd@^pADHj@vB"
                     },
                     "start_location" : {
                        "lat" : 43.4724238,
                        "lng" : -80.5013127
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.0 km",
                        "value" : 1046
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 178
                     },
                     "end_location" : {
                        "lat" : 43.477998,
                        "lng" : -80.51975999999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eWeber St N\u003c/b\u003e (signs for \u003cb\u003eRegional Rd 8\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eWeber Street\u003c/b\u003e)",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "kgihGfcljN{A`BOPSTcAhAkBrBIJc@d@_@b@g@h@KPKLMNMJcBpAyAhA}AhAkBtAgBrA_At@OJKHq@h@]Vi@b@eClBo@h@]VQNUNc@\\GDOLKH_At@"
                     },
                     "start_location" : {
                        "lat" : 43.4701417,
                        "lng" : -80.51267659999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.7 km",
                        "value" : 705
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 152
                     },
                     "end_location" : {
                        "lat" : 43.4812711,
                        "lng" : -80.5122878
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eUniversity Ave\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "oxjhGnomjNo@wB_@uAqB}HQg@Oc@O_@s@mBi@uAa@gA}@}BGQWo@]eA_AkC}A_E"
                     },
                     "start_location" : {
                        "lat" : 43.477998,
                        "lng" : -80.51975999999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 453
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 100
                     },
                     "end_location" : {
                        "lat" : 43.4795184,
                        "lng" : -80.5076033
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eMayfield Ave\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "}lkhGx`ljN~@aAJOJQNa@@CLe@Fo@B]DeCRkEBk@Ba@Ny@Ni@vCgD"
                     },
                     "start_location" : {
                        "lat" : 43.4812711,
                        "lng" : -80.5122878
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 124
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 25
                     },
                     "end_location" : {
                        "lat" : 43.4785257,
                        "lng" : -80.5083085
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eLincoln Rd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "_bkhGnckjN`Al@bC~A"
                     },
                     "start_location" : {
                        "lat" : 43.4795184,
                        "lng" : -80.5076033
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.5 km",
                        "value" : 1453
                     },
                     "duration" : {
                        "text" : "7 mins",
                        "value" : 404
                     },
                     "end_location" : {
                        "lat" : 43.4674108,
                        "lng" : -80.499882
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eMargaret Ave N\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "y{jhG|gkjNXc@@C~DyEt@_Al@s@v@u@|@{@XY|@c@h@Ux@KhA?v@?RArAKz@Q|AWdAQb@IfB]`@Ih@K@A`@YxAgBpDoEd@e@rGgHb@e@~BaClBuBLCPA"
                     },
                     "start_location" : {
                        "lat" : 43.4785257,
                        "lng" : -80.5083085
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.6 km",
                        "value" : 1555
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 310
                     },
                     "end_location" : {
                        "lat" : 43.4563735,
                        "lng" : -80.48905479999999
                     },
                     "html_instructions" : "At the roundabout, continue straight onto \u003cb\u003eMargaret Ave S\u003c/b\u003e",
                     "maneuver" : "roundabout-right",
                     "polyline" : {
                        "points" : "ivhhGfsijN?@@?@@@??@@?@?@?@?@?@??A@?@A@??A@??A@A?A?A@??A?A?A?A@A?A?A?AAA?A?A?ANUBWvA{AhAkA\\g@RY|@}BvAiDp@_BRYTUdJeKbBeBBEh@]j@Y^Kx@In@Gd@MVMLGf@c@dAkAXa@Zm@b@yAL[T]X]`@Wb@SdDeBbB_A`Ag@\\StAs@`@U`@Sd@Wv@c@"
                     },
                     "start_location" : {
                        "lat" : 43.4674108,
                        "lng" : -80.499882
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "2.0 km",
                        "value" : 1990
                     },
                     "duration" : {
                        "text" : "8 mins",
                        "value" : 465
                     },
                     "end_location" : {
                        "lat" : 43.4635796,
                        "lng" : -80.466515
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eVictoria St N\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "iqfhGpogjNk@yBMc@ESU_AYiA_@_B]sAYkAa@eBq@_Ds@gD}@qDSs@UaA]yA]_BOs@Qu@Ke@[uAOm@]yAgA{EeAuEQ{@Qy@_@eBSmAUeCk@gDo@sD]kBSy@Ou@a@oBEKUoAe@qBg@sBOq@Sw@Sy@m@oBg@{BUaA{@wDQq@WgAEO"
                     },
                     "start_location" : {
                        "lat" : 43.4563735,
                        "lng" : -80.48905479999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "49 m",
                        "value" : 49
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 8
                     },
                     "end_location" : {
                        "lat" : 43.4631745,
                        "lng" : -80.4662903
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the right\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "k~ghGvbcjNj@_@d@M"
                     },
                     "start_location" : {
                        "lat" : 43.4635796,
                        "lng" : -80.466515
                     },
                     "travel_mode" : "BICYCLING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : [
                  {
                     "location" : {
                        "lat" : 43.4692452,
                        "lng" : -80.4843312
                     },
                     "step_index" : 9,
                     "step_interpolation" : 0.7300577443539061
                  },
                  {
                     "location" : {
                        "lat" : 43.4784025,
                        "lng" : -80.5187293
                     },
                     "step_index" : 20,
                     "step_interpolation" : 0.1340817101483231
                  }
               ]
            }
         ],
         "overview_polyline" : {
            "points" : "esihGr}pjNLCJYNMN]{@oCy@oCWsAqAiFwA}E_@eBw@gCo@eCkBmH_AkD}DiOMi@a@Ta@HWBGAGUSiDpFs@xBUpHaAtDa@vDi@tK{AlSoDdDm@]kF{@iLWoEYoC_@uAeAmD[cAy@uBcCcFaAoBWu@c@}B}AuHoHc\\_@gBUeBCq@DmECeBWwA}@iBs@mBk@}B_@iBYaDOeBSaCQqAb@[POp@}@nA_Bp@k@SgANSJUAMKE^}@bAaBj@u@JWFa@|@C~@Mr@QWeAoBsHaGyUa@{COgBC_A@iLAcGpKEzAEv@??bB@`DsHHoE?a@?C|FDjF\\tDRlARx@rHbZ`AtDeATm@H}@BKl@m@x@y@rAa@x@MXF@DHANY`@RfA^xAbAxDp@bCONuAxAgGlGi@`@YF}@Bb@rTjBhO`BxLr@vD`AvDl@vBp@`CkBrBmE~EcAhAs@z@Y\\qB|AkK|HkKhImEhDoAmEcCeJ}BgG_CgG}AqE}A_E~@aAVa@Pe@TuAHcDVwFR{ANi@vCgDdElCZg@tFyGdBiBvAuAfBy@x@KhA?jAArAKz@QbDi@jCg@jAUb@[jGwHxHmIbDgDlBuBLCP?@?B@D@DAJK?Q?CNWBWvA{AfBsBRY|@}BhCiGh@o@dJeKbBeBl@c@j@Y^KhBQ|@[t@k@~AmBZm@b@yAb@y@X]`@WhEyBdDgBvDqB|A{@y@}CuA}Fw@_DsAeGqByIi@uB}AcHuAcGmCqLc@uBs@sDUeCk@gDmA_HSy@mAaGqBoIaAiD}@}DkBaIj@_@d@M"
         },
         "summary" : "University Ave W",
         "warnings" : [
            "Bicycling directions are in beta. Use caution – This route may contain streets that aren't suited for bicycling."
         ],
         "waypoint_order" : []
      }
   ],
   "status" : "OK"
}
```
____
## Rubric

This is part of your first practical lab in Week 3 

1. A working URL properly documented in the MarkDown with a unique origin and destination earns 50%
2. Including one to four additional functioning unique parameters from the API earns 50-70%
3. Having 3 or more functioning unique/novel and well-thought out parameters from the API earns 70-90%
4. Including more than 2 "stops", including links to display PlaceIDs on Google Maps, or other innovative presentations earns 80%-100%. 
