<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    protected $fillable = ['name'];

    /**
     * Get all of the posts that are assigned this tag.
     */
    public function posts()
    {
        return $this->belongsToMany(Post::class , 'taggables',
            'tag_id', 'post_id');
    }
}
