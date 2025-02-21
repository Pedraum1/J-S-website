<?php

namespace App\Http\Controllers\Pages;

use App\Encryption;
use App\Http\Controllers\Controller;
use App\Models\Property;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PropertyPagesController extends Controller
{
    public function list(){

    }

    public function search_property_by_name(string $search_text){

    }

    public function search_property_by_fiters(?string $type, ?string $operation, ?string $neighborhood,?int $max_value){

    }

    public function property_description(string $encrypted_id){
        $property_id = Encryption::decrypt($encrypted_id);
        $property = Property::find($property_id);
        
        return Inertia::render("Property/PropertyPage",["property"=>$property]);
    }
}
