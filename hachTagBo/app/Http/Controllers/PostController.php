<?php

namespace App\Http\Controllers;

use App\Module\Post;
use App\Module\User;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * API get all Posts
     */
    public function AllPosts(){
        return response()->json( Post::with('user','comments')->orderBy('id', 'DESC')->get());
    }

    /**
     * API Verify User
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function addPost(Request $request)
    {
        $text = $request->text;
        $user_email = $request->user;

        $user = User::where('email', '=', $user_email)->firstOrFail();

        Post::create(['text' => $text, 'user_id' => $user->id]);

        return response()->json(['success'=> true, 'message'=> 'Thanks !']);
    }
}
