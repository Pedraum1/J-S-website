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

        if (! empty($filters['property_type'])) {
            $properties->where('property_type', $filters['property_type']);
        }

        if (! empty($filters['operation_type'])) {
            $properties->where('operation_type', $filters['operation_type']);
        }

        if (! empty($filters['max_value'])) {
            $properties->where('price', '<=', (int) $filters['max_value']);
        }

        if (! empty($filters['neighborhood_id'])) {
            $neighborhood = Neighborhood::findByEncryptedIdOrFail($filters['neighborhood_id']);

            if ($neighborhood->exists()) {
                $properties->where('neighborhood', $neighborhood->name);
            }
        }

        return $properties->with('main_photo')->latest()->paginate(10);

    }
}
