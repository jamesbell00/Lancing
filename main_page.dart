import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutterapp/freelancer_page.dart';

class MainPage extends StatefulWidget {
   MainPage({ Key? key}) : super(key: key);


 

  @override
  _MainPageState createState() => _MainPageState();
}

class _MainPageState extends State<MainPage> {
  List pages = [
    const FreelancerPage(),
   /* SavedProfiles(),
    Chats(),
    MyPage()*/
  ];
  int _currentIndex=0;
  List<Widget> body = const [
    Icon(Icons.menu),
    Icon(Icons.bookmark_add_outlined),
    Icon(Icons.chat_bubble),
    Icon(Icons.settings),
  ];
  @override
  Widget build(BuildContext context) {
    return Scaffold(

      
      body: pages[0],
  
      bottomNavigationBar: BottomNavigationBar(
        unselectedFontSize: 0.0,
        selectedFontSize: 0.0,
        selectedItemColor: Colors.black54,
        unselectedItemColor: Colors.grey.withOpacity(0.5),
        showSelectedLabels: false,
        showUnselectedLabels: false,
        currentIndex: _currentIndex,
        backgroundColor: Colors.blueGrey,
         onTap: (int newIndex) {
          setState(() {
          _currentIndex = newIndex;
           });
        },
        items: const[
          BottomNavigationBarItem(label: 'Home', icon: Icon(Icons.apps_outlined)),
          BottomNavigationBarItem(label: 'Saved Profiles', icon: Icon(Icons.bookmark_add_outlined) ),
          BottomNavigationBarItem(label: 'Chats', icon: Icon(Icons.chat_bubble)),
          BottomNavigationBarItem(label: 'MyPage', icon: Icon(Icons.person)),
        ],
      ),
    );
  }
