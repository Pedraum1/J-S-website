<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Image extends Model
{
    protected $table = "images";

    protected $fillable = ["original_id","type","name"];

    public function property(): BelongsTo
    {
        return $this->belongsTo(Property::class,"id","original_id");
    }
}
