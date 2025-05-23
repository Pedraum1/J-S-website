<?php

namespace App\Http\Controllers\Adm;

use App\Actions\CreateNeighborhoodOrFail;
use App\Http\Controllers\Controller;
use App\Http\Requests\PropertyStoreRequest;
use App\Models\Neighborhood;
use App\Models\Property;
use App\Models\User;
use App\Services\Encryption;
use Inertia\Inertia;

class PropertyController extends Controller
{
    /**
     * Display a listing of the properties.
     */
    public function index()
    {
        $properties = Property::latest('id')->paginate(15);

        foreach ($properties as $property) {
            $property->encryptId();
        }

        return Inertia::render('Dashboard/Main/Dashboard', ['properties' => $properties]);
    }

    /**
     * Show the form for creating a new property.
     */
    public function create()
    {
        $neighborhoods = Neighborhood::orderBy('name', 'asc')->get();
        $agents = User::agents()->orderBy('name', 'asc')->get()->map(function ($agent) {
            $agent->encryptId();

            return $agent;
        });

        return Inertia::render('Dashboard/Property/AddProperty', ['neighborhoods' => $neighborhoods, 'agents' => $agents]);
    }

    /**
     * Store a newly created property in storage.
     */
    public function store(PropertyStoreRequest $request)
    {
        $validated = $request->validated();

        if (is_null($validated['neighborhood'])) {
            Neighborhood::create(['name' => $validated['new_neighborhood']]);
            $validated['neighborhood'] = $validated['new_neighborhood'];
        }
        unset($validated['new_neighborhood']);
        $validated += ['is_favorite' => false];

        $validated['agent_id'] = Encryption::decrypt($validated['agent_id']);

        Property::create($validated);

        return redirect(route('dashboard'));

    }


    /**
     * Show the form for editing the specified property.
     */
    public function edit(string $encrypted_id)
    {
        $property = Property::with('agent')->find(Encryption::decrypt($encrypted_id));
        $property->encryptId();
        $property->agent->encryptId();

        $property->agent_name = $property->agent->name;
        $property->agent->encryptId();

        $neighborhoods = Neighborhood::orderBy('name', 'asc')->get();
        $agents = User::agents()->orderBy('name', 'asc')->get();
        foreach ($agents as $agent) {
            $agent->encryptId();
        }
        foreach ($neighborhoods as $neighborhood) {
            $agent->encryptId();
        }

        return Inertia::render('Dashboard/Property/EditProperty', ['property' => $property, 'neighborhoods' => $neighborhoods, 'agents' => $agents]);
    }

    /**
     * Update the specified property in storage.
     */
    public function update(PropertyStoreRequest $request, string $encrypted_id)
    {
        $validated = $request->validated();

        $property = Property::find(Encryption::decrypt($encrypted_id));
        $validated = CreateNeighborhoodOrFail::handle($validated);

        $validated['agent_id'] = Encryption::decrypt($validated['agent_id']);

        $property->update($validated);

        return redirect(route('dashboard'));
    }

    /**
     * Display the specified property.
     */
    public function show_images(string $encrypted_id)
    {
        //TODO: Create page for property's image display
    }
    /**
     * Display the specified property.
     */
    public function update_images(string $encrypted_id)
    {
        //TODO: Create page for update property's page
    }

    /**
     * Toggles the visibility of the specified property.
     */
    public function toggle(string $encrypted_id)
    {
        $property = Property::findOrFail(Encryption::decrypt($encrypted_id));
        $property->is_active = ! $property->is_active;
        $property->save();

        return back();
    }

    /**
     * Favorites the specified property.
     */
    public function favorite(string $encrypted_id)
    {
        $property = Property::findOrFail(Encryption::decrypt($encrypted_id));
        $property->is_favorite = ! $property->is_favorite;
        $property->save();

        return back();
    }

    /**
     * Remove the specified property from storage.
     */
    public function destroy(string $encrypted_id)
    {
        $property = Property::findOrFail(Encryption::decrypt($encrypted_id));
        $property->delete();

        return back();
    }
}
