<?php

use App\Http\Controllers\Pages\GuestPagesController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Pages\PropertyPagesController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::controller(GuestPagesController::class)->group(function(){
    Route::get('/', [GuestPagesController::class, 'home']);
});

Route::controller(PropertyPagesController::class)->prefix('/imovel')->group(function(){
    Route::get("/search","list");
    Route::get("/search/{text}","search_property_by_name");
    Route::get("/search/{type?}/{operation?}/{neighborhood?}/{max_value?}","search_property_by_fiters");
    Route::get("/{encrypted_id}","property_description");
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard/Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
