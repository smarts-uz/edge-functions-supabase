import 'package:flutter/material.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class NotesHomPage extends StatelessWidget {
  static const route = '/';

  const NotesHomPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: FutureBuilder(
      future: Supabase.instance.client.from('notes').select(),
      builder: (context, snapshot) {
        return ListView.builder(
          itemBuilder: (ctx, i) {
            return Text(snapshot.data![i]['title']);
          },
        );
      },
    ));
  }
}
