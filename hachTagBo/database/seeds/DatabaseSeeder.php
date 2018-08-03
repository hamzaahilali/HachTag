<?php

use Illuminate\Database\Seeder;
use App\Module\Tag;
use App\Module\Post;

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
