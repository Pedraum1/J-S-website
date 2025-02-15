<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

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
}
