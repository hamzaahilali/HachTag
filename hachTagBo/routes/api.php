<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



Route::group(['middleware' => ['cors']], function() {

    /* AuthController Route */
    Route::post('register', 'AuthController@register');
    Route::post('login', 'AuthController@login');
    Route::post('recover', 'AuthController@recover');
    Route::get('users', 'AuthController@AllUsers');

    /* PostController Route */
    Route::get('posts', 'PostController@AllPosts');
    Route::post('addPost', 'PostController@addPost');

    /* Commentcontroller Route */
    Route::post('addComment', 'CommentController@addComment');
});


Route::group(['middleware' => ['jwt.auth']], function() {
    Route::get('logout', 'AuthController@logout');
    Route::get('test', function(){
        return response()->json(['foo'=>'bar']);
    });
});





