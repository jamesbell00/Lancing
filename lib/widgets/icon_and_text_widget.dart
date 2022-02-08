import 'package:flutter/cupertino.dart';

class IconAndTextWidget extends StatelessWidget {
  final IconData icon;
  final String text;
  final Color color;
  final Color iconColor;
  const IconAndTextWidget({ Key? key,
    required this.icon,
    required this.text,
    required this.color,
    required this.iconColor}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Row(// to return as a row(icons and text next to each other)
    //could be container, ..
      children: [
        Icon(icon, color: iconColor,),
        SizedBox(width: 5,),//btw icon and text
        Text(text, style: TextStyle(color: color, fontSize: 10))

      ],
    );
  }
}