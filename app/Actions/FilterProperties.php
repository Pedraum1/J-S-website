<?php

namespace App\Actions;

use App\Models\Neighborhood;
use App\Models\Property;

class FilterProperties
{
    /**
     * Filter properties based on search filters
     */
    public function handle(array $filters)
    {
        $properties = Property::query()->active();

        if (! is_null($filters['property_type'])) {
            $properties->where('property_type', $filters['property_type']);
        }

        if (! is_null($filters['operation_type'])) {
            $properties->where('operation_type', $filters['operation_type']);
        }

        if (! is_null($filters['max_value'])) {
            $properties->where('price', '<=', (int) $filters['max_value']);
        }

        if (! is_null($filters['neighborhood_id'])) {
            $neighborhood = Neighborhood::findByEncryptedIdOrFail($filters['neighborhood_id']);

            if ($neighborhood->exists()) {
                $properties->where('neighborhood', $neighborhood->name);
            }
        }

        return $properties->with('main_photo')->latest()->paginate(10);

    }
}
