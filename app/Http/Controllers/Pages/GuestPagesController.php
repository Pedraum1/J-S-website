<?php

namespace App\Http\Controllers\Pages;

use App\Http\Controllers\Controller;
use App\Models\Property;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GuestPagesController extends Controller
{
    public function home(){
        $properties = Property::favorites()->get();
        return Inertia::render("Homepage", ["properties" => $properties]);
    }
}
