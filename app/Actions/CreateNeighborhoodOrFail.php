<?php

namespace App\Actions;

use App\Models\Neighborhood;

class CreateNeighborhoodOrFail
{
    /**
     * Create a new Neighborhood class instance.
     */
    public static function handle(array $validation_array): array
    {
        if (is_null($validation_array['neighborhood'])) {
            Neighborhood::create(['name' => $validation_array['new_neighborhood']]);
            $validated['neighborhood'] = $validation_array['new_neighborhood'];
        }
        unset($validated['new_neighborhood']);
        return $validated;
    }
}
