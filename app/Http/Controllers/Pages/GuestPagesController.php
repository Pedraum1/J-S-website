<?php

namespace App\Http\Controllers\Pages;

use App\Encryption;
use App\Http\Controllers\Controller;
use App\Models\Neighborhood;
use App\Models\Property;
use Inertia\Inertia;

class GuestPagesController extends Controller
{
    public function home()
    {
        $neighborhoods = Neighborhood::orderBy('name', 'asc')->get();

        $properties = Property::favorites()->latest()->get()->map(function ($property) {
            $property->encryptId();
            $property = $property->toArray();

            return $property;
        });

        return Inertia::render('Homepage', [
            'properties' => $properties,
            'neighborhoods' => $neighborhoods,
        ]);
    }
}
