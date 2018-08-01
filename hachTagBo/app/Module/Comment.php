<?php

namespace App\Module;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $fillable = ['post_id', 'text'];

    public function post()
    {
        return $this->belongsTo(Post::class, 'post_id');
    }
}
