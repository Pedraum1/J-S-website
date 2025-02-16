<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Property extends Model
{
    protected $table = "property";

    protected $fillable = [
        "listing",
        "is_favorite",
        "description",
        "street",
        "street_number",
        "neighborhood",
        "city",
        "area_size",
        "price",
        "condo_fee",
        "agent_id",
        "operation_type",
        "property_type",
        "bedrooms",
        "master_bedrooms",
        "bathrooms",
        "rooms",
        "kitchens",
        "service_rooms",
        "parking_spots"
    ];

    public function photos(): HasMany
    {
        return $this->hasMany(Image::class,'original_id','id');
    }

    public static function favorites(int $limit = 8){
        return Property::where('is_favorite', true)->with(['photos'])->latest()->take($limit);
    }

}
