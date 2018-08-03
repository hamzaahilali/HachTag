<?php

namespace App\Module;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = ['user_id', 'text'];

    /**
     * Get user
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    /**
     * Get all of the comments for the post.
     */
    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    /**
     * Get all of the tags for the post.
     */
    public function tags()
    {
        return $this->belongsToMany(Tag::class, 'taggables',
            'tag_id', 'post_id');
    }
}
