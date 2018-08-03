<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TagController extends Controller
{
    /**
     * API search Tag
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function search(Request $request)
    {
        $text = $request->q;

        $tags= Tag::where('name','like', '%'. $text .'%')->get();

        return response()->json($tags);
    }
}
