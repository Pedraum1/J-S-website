<?php

namespace App\Http\Controllers\Pages;

use App\Actions\FilterProperties;
use App\Http\Controllers\Controller;
use App\Http\Requests\PropertyFilterRequest;
use App\Models\Neighborhood;
use App\Models\Property;
use App\Services\Encryption;
use Inertia\Inertia;

class PropertyPagesController extends Controller
{
    public function list()
    {
        $properties = Property::active()->with('main_photo')->latest()->paginate(10);
        $neighborhoods = Neighborhood::orderBy('name', 'asc')->get();

        foreach ($properties as $property) {
            $property->encryptId();
        }

        foreach ($neighborhoods as $neighborhood) {
            $neighborhood->encryptId();
        }

        return Inertia::render('Property/List/PropertyList',
            [
                'properties' => $properties,
                'neighborhoods' => $neighborhoods,
            ]);
    }

    public function search_property_by_name(string $search_text) {}

    public function search_property_by_fiters(PropertyFilterRequest $request, FilterProperties $filter)
    {
        $validated = $request->validated();
        $properties = $filter->handle($validated);

        $neighborhoods = Neighborhood::orderBy('name', 'asc')->get();
        foreach ($properties as $property) {
            $property->encryptId();
            $property->encryptId('agent_id');
        }

        foreach ($neighborhoods as $neighborhood) {
            $neighborhood->encryptId();
        }

        if (! empty($validated['neighborhood_id'])) {
            $searched_neighborhood = Neighborhood::findByEncryptedIdOrFail($validated['neighborhood_id']);
        }

        $applied_filters = [
            'max_value' => $validated['max_value'] ?? null,
            'property_type' => $validated['property_type'] ?? null,
            'operation_type' => $validated['operation_type'] ?? null,
            'neighborhood_id' => $validated['neighborhood_id'] ?? null,
            'neighborhood_name' => $searched_neighborhood->name ?? null,
        ];

        return Inertia::render('Property/List/PropertyList',
            [
                'properties' => $properties,
                'neighborhoods' => $neighborhoods,
                'applied_filters' => $applied_filters,
            ]);

    }

    public function property_description(string $encrypted_id)
    {
        $property_id = Encryption::decrypt($encrypted_id);
        $data = Property::active()->with('agent')->find($property_id);
        $data->agent->encryptId();

        if (! is_null($data)) {
            $data->encryptId();

            return Inertia::render('Property/Description/PropertyPage', ['property' => $data->toArray()]);
        }

        return redirect()->route('property.list');
    }
}
