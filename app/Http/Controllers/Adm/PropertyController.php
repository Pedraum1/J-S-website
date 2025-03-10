<?php

namespace App\Http\Controllers\Adm;

use App\Http\Controllers\Controller;
use App\Models\Property;
use App\Services\Encryption;
use Illuminate\Http\Request;
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

        return Inertia::render('Dashboard/Dashboard', ['properties' => $properties]);
    }

    /**
     * Show the form for creating a new property.
     */
    public function create()
    {
        return Inertia::render('Dashboard/AddProperty');
    }

    /**
     * Store a newly created property in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified property.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified property.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified property in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Toggles the visibility of the specified property.
     */
    public function toggle(string $encrypted_id)
    {
        $property = Property::findOrFail(Encryption::decrypt($encrypted_id));
        $property->listing = ! $property->listing;
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
