<?php

namespace App\Http\Controllers\Pages;

use App\Http\Controllers\Controller;
use App\Models\Neighborhood;
use App\Models\Property;
use Inertia\Inertia;

class GuestPagesController extends Controller
{
    public function home()
    {
        $neighborhoods = Neighborhood::orderBy('name', 'asc')->get()->map(function ($neighborhood) {
            $neighborhood->encryptId();
            $neighborhood = $neighborhood->toArray();

            return $neighborhood;
        });

        $properties = Property::favorites()->latest()->get()->map(function ($property) {
            $property->encryptId();
            $property = $property->toArray();

            return $property;
        });

        return Inertia::render('Homepage/Homepage', [
            'properties' => $properties,
            'neighborhoods' => $neighborhoods,
        ]);
    }
}
