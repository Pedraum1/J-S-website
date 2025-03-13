<?php

namespace App\Models;

use App\Traits\HasEncryptedId;
use Illuminate\Database\Eloquent\Model;

class Neighborhood extends Model
{
    use HasEncryptedId;

    protected $table = 'neighborhoods';

    protected $fillable = ['name'];

    protected $hidden = ['id'];
}
