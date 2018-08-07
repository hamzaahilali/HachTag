<?php

use Illuminate\Database\Seeder;
use App\Models\Tag;
use App\Models\Post;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $tag = Tag::create([
            'name'          => 'Sport',
        ]);

        $post1 = Post::create([
            'text'          => 'vive FCB',
            'user_id'       => 1
        ]);

        $post2= Post::create([
            'text'          => 'vive WAC',
            'user_id'       => 1
        ]);

        $tag->posts()->attach($post1);
        $tag->posts()->attach($post2);
    }
}
