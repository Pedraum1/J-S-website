<?php

namespace App\Http\Controllers\Pages;

use App\Encryption;
use App\Http\Controllers\Controller;
use App\Models\Neighborhood;
use App\Models\Property;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GuestPagesController extends Controller
{
    public function home(){
        $neighborhoods = Neighborhood::orderBy("name","asc")->get();
        $properties = Property::favorites()->get()->map(function($property){
            $property = $property->toArray();
            $property['id'] = Encryption::encrypt($property['id']);
            return $property;
        });

        return Inertia::render("Homepage", [
            "properties" => $properties,
            "neighborhoods" => $neighborhoods
        ]);
    }
}
