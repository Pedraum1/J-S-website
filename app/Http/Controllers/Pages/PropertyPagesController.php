<?php

namespace App\Http\Controllers\Pages;

use App\Http\Controllers\Controller;
use App\Models\Neighborhood;
use App\Models\Property;
use App\Services\Encryption;
use Inertia\Inertia;

class PropertyPagesController extends Controller
{
    public function list()
    {
        $properties = Property::with('main_photo')->latest()->paginate(10);
        $neighborhoods = Neighborhood::orderBy('name', 'asc')->get();

        foreach ($properties as $property) {
            $property->encryptId();
        }

        return Inertia::render('Property/PropertyList',
            [
                'properties' => $properties,
                'neighborhoods' => $neighborhoods,
            ]);
    }

    public function search_property_by_name(string $search_text) {}

    public function search_property_by_fiters(?string $type, ?string $operation, ?string $neighborhood, ?int $max_value) {}

    public function property_description(string $encrypted_id)
    {
        $property_id = Encryption::decrypt($encrypted_id);
        $data = Property::find($property_id);
        $data->encryptId();

        return Inertia::render('Property/PropertyPage', ['property' => $data->toArray()]);
    }
}
