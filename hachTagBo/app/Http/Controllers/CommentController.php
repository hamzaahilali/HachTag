<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Post;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    /**
     * API Add Comment
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function AddComment(Request $request){

        $text = $request->text;
        $post_id = $request->post;

        Comment::create(['text' => $text, 'post_id' => $post_id]);

        return response()->json(['success'=> true, 'message'=> 'Thanks !']);

    }
}
