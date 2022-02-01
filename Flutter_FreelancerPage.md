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
                Icon(Icons.menu, size: 30, color:Colors.black54)
              ],
            ),
          ),
          //sized box is for top bar distance from texts
          SizedBox(height: 30),
          Container(
            margin: const EdgeInsets.only(left: 20, top: 0),
            child:Column(
              children: [
                
            Text("Jack Walton", textAlign: TextAlign.left, textScaleFactor: 1.5, ),
            //Text("Jack york", textAlign: TextAlign.left, textScaleFactor: 1.5, )
              ],
            )
          ),
          Container(
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
                  margin: EdgeInsets.all(20),
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
                    children: [
                       ListTile(
                        title: Text('About me '),
                        subtitle: Text(
                            'Iheb Meftah ,étudiant en Licence Science Inforamtiques specialite Anlayse De Donnees et Big Data  '),
                      ),
                      SizedBox(
                        height: 10,
                      ),
                      ListTile(
                        title: Text('Education'),
                        subtitle: Text(
                            'Higher Institute of Computer Science and Multimedia of Sfax '),
                      ),
                      SizedBox(
                        height: 10,
                      ),
                    ],
                    ),
                ),
                Text("data")
              ]
            ),
          ),
         
      ],
      ),
    );
    throw UnimplementedError();
  }

}
