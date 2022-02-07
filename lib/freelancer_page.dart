import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutterapp/widgets/icon_and_text_widget.dart';

class FreelancerPage extends StatefulWidget {
  const FreelancerPage({Key? key}) : super(key: key);

  @override
  _FreelancerPage createState() => _FreelancerPage();
}

//'with tickerProviderStateMaxin' is for tabbar(about,project)
class _FreelancerPage extends State<FreelancerPage>
    with TickerProviderStateMixin {
  @override
  Widget build(BuildContext context) {
    //controller is for tabbar. the length is 2 because i have 2 values(about,project ) in the tabbar
    TabController _tabController = TabController(length: 2, vsync: this);
    return Scaffold(
      body: Column(
        crossAxisAlignment:
            CrossAxisAlignment.start, //to move the text to the right
        children: [
          /* Container(
            //color: Colors.blueGrey[400],
            // padding for menu bar comes down left
            padding: const EdgeInsets.only(top: 70, right: 20), 
            child: Row(
              children: [
                //container for the freelancer profile 
                Expanded(child: Container()),//to push the logo to right of screen
                Container(
                  margin: const EdgeInsets.only(right: 290),
                  width: 50,
                  height: 50,

                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(50),
                    color: Colors.grey.withOpacity(0.5),
                  ),
                ),
                Icon(Icons.menu, size: 30, color:Colors.black54),
                Column(
                  
                )            
              ],   
            ), 
             
          ),
          */
          //sized box is for top bar distance from texts
          // SizedBox(height: 30),
          // contaner for loc,name,rate
          /* Container(
            //color: Colors.blueGrey,
            //margin is for name, loc, and rate box
            margin: const EdgeInsets.only(left: 0, top: 0),
            child:Column(
              children: [
                Container(
                  alignment: Alignment.topLeft,
                  margin: const EdgeInsets.only(left: 20),
                  child: 
                    Text("Jack Walton", textAlign: TextAlign.left, textScaleFactor: 1.5,  )
                
                ),
                Container(
                  alignment: Alignment.topLeft,
                    margin: const EdgeInsets.only(left: 20),
                    child: 
                      Text("New york, NY", textAlign: TextAlign.left, textScaleFactor: 1, )
                ),
                Container(
                  margin: const EdgeInsets.only(left: 20, top: 10),
                  //padding: const EdgeInsets.only(top: 70, right: 20),
                  child: Row(
                    children: <Widget>[
                      Icon(Icons.star_border_rounded, size: 15, color:Colors.black54),
                      Text(
                        "4.6/5",
                      ),
                    ],
                  ),
                ),
                //sized box is for distance between name,.. texts and lower part
              ],
            )
          ),
          
          */

          Container(
              // this container contains both (profile/bar) and (name,loc,rate)
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(7),
                gradient: LinearGradient(
                  begin: Alignment.topCenter,
                  end: Alignment.bottomCenter,
                  colors: [Colors.blueGrey.shade100, Colors.white10],
                ),
              ),
              child: Column(
                children: [
                  Container(
                    //color: Colors.blueGrey[400],
                    // padding for menu bar comes down left
                    padding: const EdgeInsets.only(top: 40, right: 20),
                    child: Row(
                      children: [
                        //container for the freelancer profile
                        Expanded(
                            child:
                                Container()), //to push the logo to right of screen
                        Container(
                          margin: const EdgeInsets.only(right: 270),                         
                          width: 70,
                          height: 70,
                          decoration: BoxDecoration(
                            border: Border.all(width: 2),
                            borderRadius: BorderRadius.circular(50),
                            color: Colors.grey.withOpacity(0.5),
                            image: DecorationImage(
                                  fit: BoxFit.cover,//to image fit the box 
                                  image: AssetImage(
                                    "assets/images/jack.jpg"
                                    )
                                )
                          ),
                        ),
                        Icon(Icons.menu, size: 30, color: Colors.black54),
                        Column()
                      ],
                    ),
                  ),
                  SizedBox(height: 20),
                  Container(
                      height: 90, // height for the box (whole bar top)
                      //margin is for name, loc, and rate box
                      margin: const EdgeInsets.only(left: 0, top: 0),
                      child: Column(
                        children: [
                          Container(
                              alignment: Alignment.topLeft,
                              margin: const EdgeInsets.only(left: 20),
                              child: Text(
                                "Jack Walton",
                                textAlign: TextAlign.left,
                                textScaleFactor: 1.5,
                              )),
                          Container(
                              alignment: Alignment.topLeft,
                              margin: const EdgeInsets.only(left: 20),
                              child: Text(
                                "New york, NY",
                                textAlign: TextAlign.left,
                                textScaleFactor: 1,
                              )),
                          Container(
                            margin: const EdgeInsets.only(left: 20, top: 10),
                            //padding: const EdgeInsets.only(top: 70, right: 20),
                            child: Row(
                              children: <Widget>[
                                Icon(Icons.star_border_rounded,
                                    size: 15, color: Colors.black54),
                                Text(
                                  "4.6/5",
                                ),
                              ],
                            ),
                          ),
                          //sized box is for distance between name,.. texts and lower part
                        ],
                      )
                      ),
                ],
              )
              ),

          //tab bar for the about and projects
          Container(
            child: Align(
              // all the arguments (alignemnt,is scrollable,and label padding )works
              // together. w/o it the allocation of the bar texts wont work!
              alignment: Alignment.centerLeft,
              child: TabBar(
                  labelPadding: const EdgeInsets.only(left: 20, right: 20),
                  controller: _tabController,
                  labelColor: Colors.black,
                  unselectedLabelColor: Colors.grey,
                  isScrollable: true,
                  indicatorSize: TabBarIndicatorSize.label,
                  tabs: [Tab(text: "About"), Tab(text: "Projects")]),
            ),
          ),
          //container is for 'about' and 'project' section
          Container(
            height: 300,
            width: double.maxFinite,
            child: TabBarView(controller: _tabController, children: [
              //container is for about section
              Container(
                height: 200,
                width: double.infinity, //important!!
                margin: EdgeInsets.all(5),
                padding: EdgeInsets.all(10),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(10),
                  gradient: LinearGradient(
                    begin: Alignment.topCenter,
                    end: Alignment.bottomCenter,
                    colors: [Colors.blueGrey.shade100, Colors.white],
                  ),
                ),
                child: ListView(
                  //mainAxisAlignment: MainAxisAlignment.start,
                  //crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    ListTile(
                      title: Text('About me '),
                      subtitle: Text(
                        'Experienced and dedicated Data Analyst with several years of experience identifying efficiencies and problem areas within data streams.  ',
                        style: TextStyle(fontSize: 14),
                      ),
                    ),
                    //sized bix is for distance between 'about me' and 'education' section
                    SizedBox(
                      height: 10,
                    ),
                    ListTile(
                      title: Text('Field of Work'),
                      subtitle: Text(
                        ' - Data Analysis \n - Data Modeling \n - Data Mining ',
                        style: TextStyle(fontSize: 14),
                      ),
                    ),
                    SizedBox(
                      height: 10,
                    ),
                    ListTile(
                      title: Text('Experiences'),
                      subtitle: Text(
                          '-Created data modeling standards and procedures.\n-Performed detailed data validation  spanning across several different international projects.\n -Worked with complex datasets and trained new hires to work with them as well.'),
                    ),
                    SizedBox(
                      height: 8,
                    ),
                  ],
                ),
              ),
              //container is for the Project part
              Container(
                height: 100,
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(10),
                  gradient: LinearGradient(
                    begin: Alignment.topCenter,
                    end: Alignment.bottomCenter,
                    colors: [Colors.blueGrey.shade100, Colors.white],
                  ), 
                ),
                child:ListView.builder(  //listview is for project section
                    shrinkWrap: true,
                    physics: AlwaysScrollableScrollPhysics(),
                    itemCount: 10, // is connecting to index
                    itemBuilder: (context, index){
                      return Container(
                        margin: EdgeInsets.only(left: 10,right: 20, bottom: 10),
                        child: Row(
                          children: [
                            Container(// container for image section
                              width: 100,
                              height: 100,
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(20),
                                color: Colors.white38,
                                image: DecorationImage(
                                  fit: BoxFit.cover,//to image fit the box 
                                  image: AssetImage(
                                    "assets/images/Database.jpg"
                                    )
                                )
                              ),
                            ), 
                            Expanded( // we wrap it around expanded widget to make the Width dynamic(take all available space)
                              child: Container( // container for text of each project
                                height: 89,
                                //width: 250,
                                decoration: BoxDecoration(
                                  borderRadius: BorderRadius.only(
                                    topRight: Radius.circular(20),
                                    bottomRight: Radius.circular(20)
                                  ),
                                  color: Colors.white,
                                ),
                                child: Padding(// padding btw texts and images
                                  padding: EdgeInsets.only(right: 20, left: 5),
                                  child: Column(
                                    crossAxisAlignment: CrossAxisAlignment.start,
                                    mainAxisAlignment: MainAxisAlignment.center,//to set all three rows(texts) in the center of the box
                                    children: [
                                      Text("Marketing Forecast ", style: TextStyle(fontSize: 15, color: Colors.black,), overflow: TextOverflow.ellipsis ),
                                      SizedBox(height: 2,),
                                      Text("Investigate and conduct studies on the forecast, demand and capital  of proposed products.", style: TextStyle(fontSize: 14, color: Colors.black54,), overflow: TextOverflow.ellipsis),
                                      SizedBox(height: 4,),
                                      Row(
                                        children: [
                                          IconAndTextWidget(
                                           icon: Icons.speed_rounded,
                                           text: "Advanced", 
                                           color: Colors.black87, 
                                           iconColor: Colors.blueGrey),
                                           SizedBox(width: 4,),
                                           IconAndTextWidget(
                                           icon: Icons.timer,
                                           text: "6 Months", 
                                           color: Colors.black87, 
                                           iconColor: Colors.blueGrey),

                                        ],
                                        
                                      )
                                    ],
                                  ),
                                  ),
                              ),
                            )
                          ],
                        ),
                      );
                    }
                 ),
              )
              
            ]),
          ),
          //container for buttom invite and contact
          Container(
            margin: EdgeInsets.only(left: 85, top: 5, right: 60),
            padding: EdgeInsets.all(1),
            child: Row(
              children: [
                Container(
                    margin: EdgeInsets.only(right: 50),
                    child: SizedBox(
                      height: 40, //height of button
                      width: 90, //width of button
                      child: ElevatedButton(
                        child: const Text(
                          "Invite",
                          style: TextStyle(color: Colors.white, fontSize: 15),
                        ),
                        style: ElevatedButton.styleFrom(
                            primary:
                                Colors.blueGrey, //background color of button
                            side: BorderSide(
                                width: 3,
                                color: Colors.blueGrey
                                    .shade400), //border width and color
                            elevation: 3, //elevation of button
                            shape: RoundedRectangleBorder(
                                //to set border radius to button
                                borderRadius: BorderRadius.circular(10)),
                            padding: EdgeInsets.all(
                                0) //content padding inside button
                            ),
                        onPressed: () {
                          //code to execute when this button is pressed.
                        },
                      ),
                    )),
                Container(
                    child: SizedBox(
                  height: 40, //height of button
                  width: 90, //width of button
                  child: ElevatedButton(
                    child: const Text(
                      "Contact",
                      style: TextStyle(color: Colors.blueGrey, fontSize: 15),
                    ),
                    style: ElevatedButton.styleFrom(
                        primary: Colors.white, //background color of button
                        side: BorderSide(
                            width: 3,
                            color: Colors
                                .blueGrey.shade600), //border width and color
                        elevation: 3, //elevation of button
                        shape: RoundedRectangleBorder(
                            //to set border radius to button
                            borderRadius: BorderRadius.circular(10)),
                        padding:
                            EdgeInsets.all(0) //content padding inside button
                        ),
                    onPressed: () {
                      //code to execute when this button is pressed.
                    },
                  ),
                )),
              ],
            ),
          )
        ],
      ),
    );
    throw UnimplementedError();
  }
}