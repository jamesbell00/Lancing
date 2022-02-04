//new version








import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class FreelancerPage extends StatefulWidget {
  const FreelancerPage({ Key? key}) : super(key: key);



  @override
  _FreelancerPage createState() => _FreelancerPage();
}

//'with tickerProviderStateMaxin' is for tabbar(about,project)
class _FreelancerPage extends State<FreelancerPage> with TickerProviderStateMixin{
  @override
  Widget build(BuildContext context) {
    //controller is for tabbar. the length is 2 because i have 2 values(about,project ) in the tabbar
    TabController _tabController = TabController(length: 2, vsync: this);
    return Scaffold(
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.start ,//to move the text to the right
        children: [
          Container(
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
          
          //sized box is for top bar distance from texts
          SizedBox(height: 30),
          // contaner for loc,name,rate
          Container(
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
          

          SizedBox(height:12),
          //tab bar for the about and projects
          Container(
            child: Align(
              // all the arguments (alignemnt,is scrollable,and label padding )works
              // together. w/o it the allocation of the bar texts wont work!
              alignment: Alignment.centerLeft,
              child: TabBar(
                labelPadding: const EdgeInsets.only(left: 20,right: 20),
                controller: _tabController,
                labelColor: Colors.black,
                unselectedLabelColor: Colors.grey,
                isScrollable: true,
                indicatorSize: TabBarIndicatorSize.label,
                tabs:[
                  Tab(text: "About"),
                  Tab(text: "Projects")
                ]
              ),
            ),
          ),
          //container is for about section
          Container(
            height: 300,
            width: double.maxFinite,
            child: TabBarView(
              controller: _tabController,
              children: [
                //container is for about section
                Container(
                  height: 200,
                  width: double.infinity,//important!!
                  margin: EdgeInsets.all(5),
                  padding: EdgeInsets.all(10),
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(10),
                    gradient: LinearGradient(
                      begin: Alignment.topCenter,
                      end: Alignment.bottomCenter,
                      colors: [
                        Colors.blueGrey.shade200,
                        Colors.blueGrey.shade400

                      ],
                    ),
                  ),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.start,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children:[
                       ListTile(
                        title: Text('About me '),
                        subtitle: Text(
                            'Experienced and dedicated Data Analyst with several years of experience identifying efficiencies and problem areas within data streams.  ',
                            style: TextStyle(fontSize: 12),),
                      ),
                      //sized bix is for distance between 'about me' and 'education' section
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
                Text("data")
              ]
            ),
          ),
          //container for buttom invite and contact
          Container(
            margin: EdgeInsets.only(left: 85, top: 0,right: 60),
            padding: EdgeInsets.all(1),
            child: Row(
              children:[
                Container(
                  margin: EdgeInsets.only(right: 50),
                  child: SizedBox(
                    height:40, //height of button
                    width:90, //width of button
                    child:ElevatedButton(
                      child:
                        const Text("Invite",
                        style: TextStyle(
                          color: Colors.white,
                          
                          fontSize: 15
                    ),),
                    style: ElevatedButton.styleFrom(
                    primary: Colors.blueGrey, //background color of button
                    side: BorderSide(width:3, color:Colors.blueGrey.shade400), //border width and color
                    elevation: 3, //elevation of button
                    shape: RoundedRectangleBorder( //to set border radius to button
                      borderRadius: BorderRadius.circular(10)
                    ),
                    padding: EdgeInsets.all(0) //content padding inside button
                    ),
                    onPressed: (){ 
                    //code to execute when this button is pressed.
                    },                     
                 ),
                )
              ),
               Container(
                  child: SizedBox(
                    height:40, //height of button
                    width:90, //width of button
                    child:ElevatedButton(
                      child:
                        const Text("Contact",
                        style: TextStyle(
                          color: Colors.blueGrey,
                          
                          fontSize: 15
                    ),),
                    style: ElevatedButton.styleFrom(
                    primary: Colors.white, //background color of button
                    side: BorderSide(width:3, color:Colors.blueGrey.shade600), //border width and color
                    elevation: 3, //elevation of button
                    shape: RoundedRectangleBorder( //to set border radius to button
                      borderRadius: BorderRadius.circular(10)
                    ),
                    padding: EdgeInsets.all(0) //content padding inside button
                    ),
                    onPressed: (){ 
                    //code to execute when this button is pressed.
                    },                     
                 ),
                )
              ),
             ],
            ),
          )
        ],
      ),
    );
    throw UnimplementedError();
  }

}


